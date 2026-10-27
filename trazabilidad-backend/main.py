import os
import re
import time
import threading
from typing import Optional

from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session, sessionmaker
from pydantic import BaseModel
from database import engine, Base, get_db
import models

from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer

# Leer la SECRET_KEY de las variables de entorno de forma segura
SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    raise ValueError("⚠️ No se encontró la variable SECRET_KEY en el archivo .env")

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

def crear_token_acceso(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def obtener_usuario_actual(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="No se pudo validar las credenciales",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        correo: str = payload.get("sub")
        if correo is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    usr = db.query(models.Usuario).filter(models.Usuario.correo == correo).first()
    if usr is None:
        raise credentials_exception
    return usr

# --- INTEGRACIÓN CON ENCRIPTACIÓN (BCRYPT) ---
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def obtener_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def verificar_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


# --- INTEGRACIÓN CON GEMINI ---
from google import genai

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=GEMINI_API_KEY) if GEMINI_API_KEY else None


# 1. Crear las tablas en la Base de Datos
Base.metadata.create_all(bind=engine)
# --- CREAR USUARIO DE PRUEBA AUTOMÁTICO ---
from database import SessionLocal
import models

def seed_usuario(db: Session):
    # Verificamos si ya existe el usuario admin leyendo desde el .env
    admin_correo = os.getenv("ADMIN_CORREO", "admin@plurionetrace.com")
    admin_password = os.getenv("ADMIN_PASSWORD")  # Sin valor por defecto fijo en el código
    
    if not admin_password:
        print("Advertencia: ADMIN_PASSWORD no está configurada en las variables de entorno.")
        return

    usuario_existente = db.query(models.Usuario).filter(models.Usuario.correo == admin_correo).first()
    if not usuario_existente:
        nuevo_admin = models.Usuario(
            correo=admin_correo,
            password=obtener_password_hash(admin_password)  # <--- Corregido al nombre correcto de tu función
        )
        db.add(nuevo_admin)
        db.commit()
        print(f"Usuario administrador inicial creado: {admin_correo}")

# 2. Inicializar la app de FastAPI (Instancia Única)
app = FastAPI(title="PluriOne Trace API", version="1.0")

# 3. Configuración de CORS
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# SIMULACIÓN AUTOMÁTICA DE TRAZABILIDAD
# ==========================================

SimulationSession = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

simulaciones_activas = set()
simulaciones_lock = threading.Lock()


def simular_trayecto_automatico(
    material_id: str,
    destino: str,
    conductor_nombre: str
):
    """
    Registra una etapa cada 15 segundos.
    La simulación empieza después de asignar conductor y ruta.
    """
    etapas = [
        ("Caseta de salida", "Salida registrada"),
        ("Punto de inspección", "Inspección en tránsito completada"),
        ("Almacén regional", "Recepción en almacén regional"),
        ("Puerta de entrega", f"Entregado en {destino}"),
    ]

    db = SimulationSession()
    try:
        for ubicacion, estado in etapas:
            time.sleep(15)

            material = (
                db.query(models.Material)
                .filter(models.Material.id == material_id)
                .first()
            )

            if not material:
                print(f"Simulación cancelada: no existe el material {material_id}")
                break

            if material.estado and "Cancelado" in material.estado:
                print(f"Simulación cancelada para {material_id}.")
                break

            material.ubicacion_actual = ubicacion
            material.estado = estado

            db.add(models.HistorialTrazabilidad(
                material_id=material_id,
                ubicacion=ubicacion,
                estado=estado
            ))
            db.commit()
            print(f"[PluriOne Trace] {material_id}: {ubicacion} - {estado}")

    except Exception as e:
        db.rollback()
        print(f"Error en la simulación del envío {material_id}: {e}")
    finally:
        db.close()
        with simulaciones_lock:
            simulaciones_activas.discard(material_id)


# ==========================================
# 1. ESQUEMAS PYDANTIC
# ==========================================

class MaterialCreate(BaseModel):
    id: str
    nombre: str
    cliente: Optional[str] = "Cliente General"
    ubicacion_inicial: Optional[str] = "Almacén Central"
    metodo_captura: Optional[str] = "Código QR (Guía Digital)"


class EscaneoUpdate(BaseModel):
    nueva_ubicacion: str
    nuevo_estado: str
    motivo: Optional[str] = None


class UsuarioSchema(BaseModel):
    correo: str
    password: str


class RecuperarSchema(BaseModel):
    correo: str
    password_actual: str
    nueva_password: str


class ChatbotQuery(BaseModel):
    message: str


class ClienteCreate(BaseModel):
    nombre: str
    empresa: Optional[str] = None
    email: Optional[str] = None
    telefono: Optional[str] = None
    direccion_entrega: str
    calificacion: Optional[int] = 5


class ConductorCreate(BaseModel):
    nombre: str
    licencia: str
    vehiculo_asignado: Optional[str] = None
    estado: Optional[str] = "Disponible"
    calificacion: Optional[float] = 5.0


class RutaCreate(BaseModel):
    nombre_ruta: str
    origen: str
    destino: str
    distancia_km: str
    tiempo_estimado: str
    calificacion_seguridad: Optional[int] = 5


class AsignarEnvio(BaseModel):
    material_id: str
    conductor_nombre: Optional[str] = "Sin Conductor"
    ruta_destino: Optional[str] = "Sin Destino"


# ==========================================
# 2. AUTENTICACIÓN SEGURA (BCRYPT)
# ==========================================

@app.post("/auth/register")
def registrar_usuario(datos: UsuarioSchema, db: Session = Depends(get_db)):
    try:
        existe = db.query(models.Usuario).filter(
            models.Usuario.correo == datos.correo
        ).first()
        if existe:
            raise HTTPException(
                status_code=400,
                detail="El correo electrónico ya está registrado."
            )

        nombre_defecto = datos.correo.split("@")[0].capitalize()
        
        # Encriptar la contraseña con Bcrypt
        password_hashed = obtener_password_hash(datos.password)
        
        nuevo_usuario = models.Usuario(
            nombre=nombre_defecto,
            correo=datos.correo,
            password=password_hashed,
            rol="Operador"
        )
        db.add(nuevo_usuario)
        db.commit()
        return {"mensaje": "Cuenta creada con éxito."}
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error interno en servidor: {str(e)}")


@app.post("/auth/login")
def login(datos: UsuarioSchema, db: Session = Depends(get_db)):
    usr = db.query(models.Usuario).filter(models.Usuario.correo == datos.correo).first()
    
    if not usr or not verificar_password(datos.password, usr.password):
        raise HTTPException(status_code=401, detail="Credenciales incorrectas.")
        
    # Generar el token JWT
    access_token = crear_token_acceso(data={"sub": usr.correo})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "mensaje": "Inicio de sesión exitoso",
        "correo": usr.correo
    }

@app.post("/auth/recuperar")
def recuperar_password(datos: RecuperarSchema, db: Session = Depends(get_db)):
    usr = db.query(models.Usuario).filter(
        models.Usuario.correo == datos.correo
    ).first()
    if not usr:
        raise HTTPException(status_code=404, detail="El correo no se encuentra registrado.")

    # Validar password anterior antes de autorizar el cambio
    if not verificar_password(datos.password_actual, usr.password):
        raise HTTPException(status_code=401, detail="La contraseña actual es incorrecta.")

    usr.password = obtener_password_hash(datos.nueva_password)
    db.commit()
    return {"mensaje": "Contraseña actualizada exitosamente."}


# ==========================================
# 3. MATERIALES Y TRAZABILIDAD
# ==========================================

@app.post("/materiales/", status_code=201)
def registrar_material(material: MaterialCreate, db: Session = Depends(get_db), usuario_actual = Depends(obtener_usuario_actual)):
    existe = db.query(models.Material).filter(
        models.Material.id == material.id
    ).first()
    if existe:
        raise HTTPException(status_code=400, detail="El código de material ya existe.")

    nombre_cliente = material.cliente or "Cliente General"
    cliente_obj = db.query(models.Cliente).filter(
        models.Cliente.nombre == nombre_cliente
    ).first()
    
    if not cliente_obj:
        cliente_obj = models.Cliente(nombre=nombre_cliente)
        db.add(cliente_obj)
        db.flush()

    nuevo_mat = models.Material(
        id=material.id,
        nombre=material.nombre,
        cliente_id=cliente_obj.id,
        ubicacion_actual=material.ubicacion_inicial or "Almacén Central",
        estado="En Almacén (Pendiente de Asignación)",
        metodo_captura=material.metodo_captura or "Código QR (Guía Digital)"
    )
    db.add(nuevo_mat)
    db.flush()

    db.add(models.HistorialTrazabilidad(
        material_id=nuevo_mat.id,
        ubicacion=nuevo_mat.ubicacion_actual,
        estado="Registrado en Sistema (Esperando Asignación)"
    ))

    db.commit()
    db.refresh(nuevo_mat)
    return nuevo_mat


@app.put("/materiales/{material_id}/escanear")
def escanear_material(
    material_id: str,
    datos: EscaneoUpdate,
    db: Session = Depends(get_db),
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    mat = db.query(models.Material).filter(
        models.Material.id == material_id
    ).first()
    
    if not mat:
        raise HTTPException(status_code=404, detail="Material no encontrado")

    # Actualizar ubicación y estado actual del material
    mat.ubicacion_actual = datos.ubicacion
    mat.estado = datos.estado

    # Registrar en el historial de trazabilidad
    nuevo_historial = models.HistorialTrazabilidad(
        material_id=material_id,
        ubicacion=datos.ubicacion,
        estado=datos.estado
    )
    db.add(nuevo_historial)
    db.commit()
    db.refresh(mat)
    
    return {"mensaje": "Checkpoint registrado correctamente", "material_id": material_id, "estado": datos.estado, "ubicacion": datos.ubicacion}


@app.get("/materiales/")
def obtener_materiales(
    db: Session = Depends(get_db), 
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    materiales = db.query(models.Material).all()
    resultado = []

    for m in materiales:
        nombre_cliente = "Cliente General"
        if getattr(m, "cliente_rel", None) and getattr(m.cliente_rel, "nombre", None):
            nombre_cliente = m.cliente_rel.nombre
        elif isinstance(getattr(m, "cliente", None), str) and m.cliente.strip():
            nombre_cliente = m.cliente

        resultado.append({
            "id": m.id,
            "nombre": m.nombre,
            "cliente": nombre_cliente,
            "ubicacion_actual": m.ubicacion_actual,
            "estado": m.estado,
            "metodo_captura": m.metodo_captura
        })
    return resultado


@app.get("/materiales/{material_id}/guia")
def obtener_guia_material(
    material_id: str, 
    db: Session = Depends(get_db), 
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    material = db.query(models.Material).filter(
        models.Material.id == material_id
    ).first()
    if not material:
        raise HTTPException(status_code=404, detail="El material no existe.")

    historial = (
        db.query(models.HistorialTrazabilidad)
        .filter(models.HistorialTrazabilidad.material_id == material_id)
        .order_by(models.HistorialTrazabilidad.fecha_hora.asc())
        .all()
    )

    cliente_nom = "Cliente General"
    if getattr(material, "cliente_rel", None):
        cliente_nom = material.cliente_rel.nombre
    elif getattr(material, "cliente", None):
        cliente_nom = material.cliente

    return {
        "id": material.id,
        "nombre": material.nombre,
        "cliente": cliente_nom,
        "ubicacion_actual": material.ubicacion_actual,
        "estado": material.estado,
        "metodo_captura": material.metodo_captura,
        "historial": [
            {
                "ubicacion": h.ubicacion,
                "estado": h.estado,
                "fecha_hora": str(h.fecha_hora).replace("T", " ")[:19]
            }
            for h in historial
        ]
    }


# ==========================================
# 4. CHATBOT INTELIGENTE (GEMINI)
# ==========================================

@app.post("/chatbot")
def responder_chatbot(
    request: dict, 
    db: Session = Depends(get_db),
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    pregunta_usuario = (request.get("message") or "").strip()

    materiales = db.query(models.Material).all()
    contexto_db = []

    for m in materiales:
        cliente_nom = "Cliente General"
        if getattr(m, "cliente_rel", None) and getattr(m.cliente_rel, "nombre", None):
            cliente_nom = m.cliente_rel.nombre
        elif isinstance(getattr(m, "cliente", None), str) and m.cliente.strip():
            cliente_nom = m.cliente

        contexto_db.append(
            f"• Paquete {m.id}: Material '{m.nombre}', Cliente '{cliente_nom}', "
            f"Ubicación '{m.ubicacion_actual}', Estado '{m.estado}'."
        )

    string_contexto = "\n".join(contexto_db) if contexto_db else "No hay materiales registrados actualmente."

    prompt_completo = f"""
Eres el asistente virtual experto en logística del sistema 'PluriOne Trace'.

Si preguntan por paquetes o envíos, responde usando estos datos actuales:
{string_contexto}

Si preguntan por conceptos generales de logística (Incoterms, aduanas,
rutas o última milla), responde de forma clara, concisa y profesional.

Pregunta del usuario: {pregunta_usuario}
"""

    if client is None:
        return {"respuesta": "La integración con Gemini no está configurada. Revisa GEMINI_API_KEY en el archivo .env."}

    modelos_ia = ["gemini-2.5-flash", "gemini-3.6-flash"]
    ultimo_error = None

    for modelo in modelos_ia:
        for intento in range(3):
            try:
                response = client.models.generate_content(
                    model=modelo,
                    contents=prompt_completo
                )
                return {"respuesta": response.text or "No se recibió una respuesta de la IA."}
            except Exception as e:
                ultimo_error = e
                if "503" in str(e) and intento < 2:
                    time.sleep(1)
                    continue
                break

    print(f"Error en Gemini: {ultimo_error}")
    return {
        "respuesta": "El servicio de IA no está disponible en este momento. Intenta de nuevo."
    }


# ==========================================
# 5. CLIENTES
# ==========================================

@app.get("/clientes")
def obtener_clientes(db: Session = Depends(get_db), usuario_actual: models.Usuario = Depends(obtener_usuario_actual)):
    return db.query(models.Cliente).all()


@app.post("/clientes")
def crear_cliente(cliente: ClienteCreate, db: Session = Depends(get_db), usuario_actual = Depends(obtener_usuario_actual)):
    
    nuevo = models.Cliente(**cliente.dict())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo


# ==========================================
# 6. CONDUCTORES
# ==========================================

@app.get("/conductores")
def obtener_conductores(
    db: Session = Depends(get_db), 
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    return db.query(models.Conductor).all()


@app.post("/conductores")
def crear_conductor(conductor: ConductorCreate, db: Session = Depends(get_db), usuario_actual = Depends(obtener_usuario_actual)):   
    nuevo = models.Conductor(**conductor.dict())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo


# ==========================================
# 7. RUTAS
# ==========================================

@app.get("/rutas")
def obtener_rutas(
    db: Session = Depends(get_db), 
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    return db.query(models.Ruta).all()


@app.post("/rutas")
def crear_ruta(ruta: RutaCreate, db: Session = Depends(get_db), usuario_actual = Depends(obtener_usuario_actual)):  
    nuevo = models.Ruta(**ruta.dict())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo


# ==========================================
# 8. ASIGNACIÓN DE ENVÍOS
# ==========================================

@app.post("/envios/asignar")
def asignar_datos_envio(datos: AsignarEnvio, db: Session = Depends(get_db), usuario_actual = Depends(obtener_usuario_actual)):
    
    material = db.query(models.Material).filter(
        models.Material.id == datos.material_id
    ).first()

    if not material:
        raise HTTPException(status_code=404, detail="El paquete especificado no existe.")

    conductor_nombre = (datos.conductor_nombre or "Sin Conductor").strip()
    destino = (datos.ruta_destino or "").strip()

    if not destino or destino.casefold() in {"sin destino", "destino", "none", "n/a"}:
        raise HTTPException(
            status_code=400,
            detail="Debes especificar un destino válido para iniciar la simulación."
        )

    conductor = db.query(models.Conductor).filter(
        models.Conductor.nombre == conductor_nombre
    ).first()
    
    if not conductor:
        conductor = models.Conductor(nombre=conductor_nombre)
        db.add(conductor)
        db.flush()

    ruta = db.query(models.Ruta).filter(
        models.Ruta.destino == destino
    ).first()

    if not ruta:
        ruta = models.Ruta(
            nombre_ruta=f"Ruta hacia {destino}",
            origen="Ciudad de México",
            destino=destino,
            distancia_km="Por definir",
            tiempo_estimado="Por definir"
        )
        db.add(ruta)
        db.flush()

    material.conductor_id = conductor.id
    material.ruta_id = ruta.id
    material.estado = f"En tránsito hacia {ruta.destino}"
    material.ubicacion_actual = f"En unidad con {conductor.nombre}"

    db.add(models.HistorialTrazabilidad(
        material_id=material.id,
        ubicacion=f"En unidad con {conductor.nombre}",
        estado=f"En tránsito hacia {ruta.destino}"
    ))

    db.commit()
    db.refresh(material)

    iniciar = False
    with simulaciones_lock:
        if material.id not in simulaciones_activas:
            simulaciones_activas.add(material.id)
            iniciar = True

    if iniciar:
        try:
            threading.Thread(
                target=simular_trayecto_automatico,
                args=(material.id, ruta.destino, conductor.nombre),
                daemon=True
            ).start()
        except Exception as e:
            with simulaciones_lock:
                simulaciones_activas.discard(material.id)
            raise HTTPException(
                status_code=500,
                detail=f"No se pudo iniciar la simulación: {e}"
            )

    return {
        "mensaje": (
            f"Envío {material.id} asignado a {conductor.nombre}. "
            + ("Simulación iniciada." if iniciar else "La simulación ya está activa.")
        ),
        "material_id": material.id,
        "conductor": conductor.nombre,
        "destino": ruta.destino,
        "simulacion_iniciada": iniciar
    }


@app.get("/envios/{material_id}/detalle")
def obtener_detalle_envio(
    material_id: str, 
    db: Session = Depends(get_db), 
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    m = db.query(models.Material).filter(
        models.Material.id == material_id
    ).first()
    if not m:
        raise HTTPException(status_code=404, detail="El paquete no existe en la base de datos.")

    cli = getattr(m, "cliente_rel", None)
    cond = getattr(m, "conductor_rel", None)
    rut = getattr(m, "ruta_rel", None)

    return {
        "codigo_paquete": m.id,
        "producto": getattr(m, "nombre", "N/A"),
        "estado_actual": getattr(m, "estado", "Sin Estado"),
        "ubicacion_actual": getattr(m, "ubicacion_actual", "Sin Ubicación"),
        "datos_cliente": {
            "nombre": cli.nombre if cli else "Sin Asignar",
            "empresa": cli.empresa if cli and cli.empresa else "N/A",
            "email": cli.email if cli and cli.email else "N/A",
            "telefono": cli.telefono if cli and cli.telefono else "N/A",
            "domicilio_destino": cli.direccion_entrega if cli and cli.direccion_entrega else "N/A",
            "calificacion_cliente": cli.calificacion if cli else None
        },
        "datos_transporte": {
            "conductor": cond.nombre if cond else "Sin Asignar",
            "vehiculo": cond.vehiculo_asignado if cond and cond.vehiculo_asignado else "N/A",
            "licencia_conductor": cond.licencia if cond and cond.licencia else "N/A",
            "calificacion_conductor": cond.calificacion if cond else None,
            "ruta": f"{rut.origen} ➔ {rut.destino}" if rut else "Sin Asignar",
            "tiempo_estimado": rut.tiempo_estimado if rut and rut.tiempo_estimado else "N/A"
        }
    }


@app.get("/materiales/{material_id}/analisis-ia")
def obtener_analisis_ia_material(
    material_id: str, 
    db: Session = Depends(get_db), 
    usuario_actual: models.Usuario = Depends(obtener_usuario_actual)
):
    material = db.query(models.Material).filter(models.Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="El material no existe.")

    # Consultar historial real de eventos del material
    historial = db.query(models.HistorialTrazabilidad).filter(
        models.HistorialTrazabilidad.material_id == material_id
    ).all()

    conteo_puntos = len(historial)
    
    # Contar cuántos checkpoints reales tienen incidencia de "Retraso" o "Alerta"
    checkpoints_retrasados = sum(
        1 for h in historial 
        if h.estado and ("retrasado" in h.estado.lower() or "alerta" in h.estado.lower())
    )

    estado_actual = (material.estado or "").lower()

    # Obtener datos de la ruta asignada (si tiene relación)
    tiempo_estimado_str = "N/A"
    distancia_km = 0
    if getattr(material, "ruta_rel", None):
        tiempo_estimado_str = material.ruta_rel.tiempo_estimado or "N/A"
        distancia_km = material.ruta_rel.distancia_km or 0

    # Lógica inteligente basada en métricas reales de la BD
    if checkpoints_retrasados > 0 or "retrasado" in estado_actual:
        nivel_riesgo = "Alto"
        porcentaje_confianza_o_riesgo = min(95.0, 70.0 + (checkpoints_retrasados * 10.0))
        diagnostico = f"Se detectaron {checkpoints_retrasados} checkpoints con retraso sobre un total de {conteo_puntos} registros. El trayecto presenta desviaciones respecto al tiempo estimado ({tiempo_estimado_str})."
        recomendacion = "Contactar al operador logístico inmediatamente para reprogramar la ruta."
    elif "entregado" in estado_actual:
        nivel_riesgo = "Bajo"
        porcentaje_confianza_o_riesgo = 100.0
        diagnostico = f"Envío completado exitosamente. Se validaron {conteo_puntos} puntos de control sin incidencias críticas."
        recomendacion = "Archivar guía de despacho y cerrar ciclo operativo."
    else:
        if conteo_puntos > 2:
            nivel_riesgo = "Medio"
            porcentaje_confianza_o_riesgo = 45.0
            diagnostico = f"El paquete acumula {conteo_puntos} checkpoints en tránsito normal ({distancia_km} km recorridos). Se sugiere supervisión preventiva."
            recomendacion = "Monitorear llegada al próximo punto de control."
        else:
            nivel_riesgo = "Bajo"
            porcentaje_confianza_o_riesgo = 15.0
            diagnostico = f"Inicia la trazabilidad del material. {conteo_puntos} checkpoints iniciales registrados."
            recomendacion = "Tránsito estándar dentro de los parámetros esperados."

    return {
        "material_id": material.id,
        "nombre": material.nombre,
        "estado": material.estado,
        "ubicacion": material.ubicacion_actual,
        "nivel_riesgo": nivel_riesgo,
        "porcentaje_evaluado": round(porcentaje_confianza_o_riesgo, 1),
        "checkpoints_totales": conteo_puntos,
        "checkpoints_retrasados": checkpoints_retrasados,
        "tiempo_estimado_ruta": tiempo_estimado_str,
        "diagnostico_ia": diagnostico,
        "recomendacion": recomendacion
    }