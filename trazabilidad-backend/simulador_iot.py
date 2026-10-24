import time
import requests
import sys
import os
from dotenv import load_dotenv

# Cargar variables de entorno del backend si están disponibles, o usar valores por defecto
load_dotenv(os.path.join(os.path.dirname(__file__), 'trazabilidad-backend', '.env'))

API_URL = "http://localhost:8000"

# Credenciales de administrador para autenticar el simulador IoT
ADMIN_CORREO = os.getenv("ADMIN_CORREO", "admin@plurione.com")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "tu_contrasena_segura")

def obtener_token_jwt():
    """Se autentica en el backend para obtener un token Bearer válido."""
    login_url = f"{API_URL}/auth/login"
    # OAuth2PasswordRequestForm espera los datos como form-data (username y password)
    payload = {
        "username": ADMIN_CORREO,
        "password": ADMIN_PASSWORD
    }
    try:
        response = requests.post(login_url, data=payload)
        if response.status_code == 200:
            token = response.json().get("access_token")
            return token
        else:
            print(f" [AUTH ERROR] No se pudo autenticar el simulador: {response.text}")
            return None
    except Exception as e:
        print(f" [ERROR DE CONEXIÓN] No se pudo conectar al servidor de autenticación: {e}")
        return None

def generar_puntos_ruta(destino):
    """Genera una secuencia lógica de paradas basada en la ciudad destino."""
    return [
        {"ubicacion": "Centro de Distribución Origen", "estado": "En Regla"},
        {"ubicacion": "Punto de Control Carretera Intercoastal", "estado": "En Regla"},
        {"ubicacion": f"Caseta de Inspección {destino}", "estado": "Retrasado", "motivo": "Tráfico/Inspección Rutinaria"},
        {"ubicacion": f"Almacén Logístico {destino}", "estado": "En Regla"},
        {"ubicacion": f"Cliente Final en {destino}", "estado": "Entregado a Cliente"}
    ]

def ejecutar_simulacion(material_id, destino, intervalo_segundos=4):
    print("\n Autenticando simulador IoT con token de seguridad...")
    token = obtener_token_jwt()
    if not token:
        print(" Operación cancelada: se requiere autenticación válida.")
        return

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }

    ruta = generar_puntos_ruta(destino)
    
    print(f"\n==================================================")
    print(f"  SIMULANDO RUTA HACIA: {destino.upper()}")
    print(f"  CÓDIGO DE ENVÍO: {material_id}")
    print(f"==================================================\n")
    
    for paso in ruta:
        payload = {
            "nueva_ubicacion": paso["ubicacion"],
            "nuevo_estado": paso["estado"],
            "motivo": paso.get("motivo", "")
        }
        
        try:
            url = f"{API_URL}/materiales/{material_id}/escanear"
            response = requests.put(url, json=payload, headers=headers)
            
            if response.status_code == 200:
                print(f" [SENSOR RFID] {paso['ubicacion']} | Estado: {paso['estado']}")
            else:
                detalle = response.json().get('detail', 'Error desconocido')
                print(f" [ALERTA] No se pudo actualizar {material_id}: {detalle}")
                break
                
        except Exception as e:
            print(f" [ERROR CONEXIÓN] No se pudo conectar a FastAPI: {e}")
            break
            
        time.sleep(intervalo_segundos)

    print("\n--------------------------------------------------")
    print(f"  SIMULACIÓN COMPLETADA PARA {material_id}")
    print("--------------------------------------------------\n")

if __name__ == "__main__":
    # Lee los parámetros pasados desde la terminal o usa valores por defecto
    codigo_envio = sys.argv[1] if len(sys.argv) > 1 else "MAT-555"
    ciudad_destino = sys.argv[2] if len(sys.argv) > 2 else "Monterrey Nuevo Leon"
    
    ejecutar_simulacion(material_id=codigo_envio, destino=ciudad_destino)