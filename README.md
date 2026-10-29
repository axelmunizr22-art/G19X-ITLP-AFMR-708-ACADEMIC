# PluriOne Trace - Sistema Inteligente de Trazabilidad de Materiales

**Alumno:** Axel Farid Muñiz Ramírez  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Institución:** Instituto Tecnológico de La Piedad (ITLP)  
**Empresa:** PluriOne S.A. de C.V. (Develop Talent & Technology)

---

##  Descripción del Proyecto

PluriOne Trace es una aplicación web full-stack diseñada para gestionar, monitorear y consultar la trazabilidad de materiales y envíos en procesos logísticos.

Permite relacionar paquetes con clientes, conductores y rutas de transporte, registrar actualizaciones de ubicación (*checkpoints*) y generar guías de seguimiento en formato PDF. Además, integra un asistente conversacional conectado con la API de Google Gemini, capaz de responder consultas operativas utilizando información de la base de datos.

---

##  Stack Tecnológico y Puertos

- **Backend (puerto 8000):** Python, FastAPI, SQLAlchemy, Uvicorn y Passlib.
- **Frontend (puerto 5173):** JavaScript, React, Vite, Tailwind CSS y html2pdf.js.
- **Base de datos:** SQLite (`trazabilidad.db`), generada automáticamente por la aplicación.
- **Inteligencia artificial:** API de Google Gemini mediante la biblioteca `google-genai`.

---

##  Requisitos previos

Antes de instalar el proyecto, asegúrate de tener:

- Python 3.10 o posterior.
- Node.js y npm.
- Una clave de API de Google Gemini, disponible desde Google AI Studio.
- Git, para clonar el repositorio.

---

##  Guía de instalación y ejecución

### 1. Obtener el proyecto

Clona el repositorio y entra en la carpeta principal:

```bash
git clone https://github.com/axelmunizr22-art/G19X-ITLP-AFMR-708-ACADEMIC.git 
cd G19X-ITLP-AFMR-708-ACADEMIC
```

### 2. Configurar el backend

Abre una terminal y entra en la carpeta del backend:

```bash
cd trazabilidad-backend
```

Crea un entorno virtual de Python:

```bash
python -m venv venv
```

Activa el entorno virtual en Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

En Windows CMD, utiliza:

```bat
venv\Scripts\activate.bat
```

En Linux o macOS, utiliza:

```bash
source venv/bin/activate
```

Instala las dependencias del proyecto:

```bash
pip install -r requirements.txt
```

### 3. Configurar las variables de entorno

Copia el archivo `.env.example` y nómbralo `.env` dentro de la carpeta `trazabilidad-backend`.

En Windows PowerShell:
```powershell
Copy-Item .env.example .env
```

En Windows CMD:

```bat
copy .env.example .env
```

En Linux o macOS:

```bash
cp .env.example .env
```

Abre el archivo `.env` y configura las variables necesarias:

```env
ADMIN_CORREO=admin@plurione.com
ADMIN_PASSWORD=tu_contrasena_segura
GEMINI_API_KEY=tu_clave_de_api_de_gemini
SECRET_KEY=tu_llave_secreta_jwt_super_segura
DATABASE_URL=sqlite:///./trazabilidad.db
```

**Importante:**

- ADMIN_CORREO y ADMIN_PASSWORD: Credenciales del administrador inicial (cargadas de manera segura en el backend mediante la función seed_usuario(), evitando contraseñas quemadas en el código fuente).
- SECRET_KEY: Llave criptográfica estricta para firmar y validar los tokens JWT de sesión.
- GEMINI_API_KEY: Tu clave personal de Google Gemini para la inteligencia artificial.
- No compartas tu archivo .env ni publiques tus credenciales en GitHub.
- El archivo .env debe estar excluido del control de versiones mediante .gitignore.
- Conserva .env.example sin claves ni contraseñas reales para que otros desarrolladores sepan qué variables deben configurar.


### 4. Ejecutar el backend

Desde la carpeta `trazabilidad-backend`, con el entorno virtual activado, ejecuta:

```bash
uvicorn main:app --reload
```

El backend estará disponible en:

- API: http://127.0.0.1:8000
- Documentación interactiva: http://127.0.0.1:8000/docs

Mantén esta terminal abierta mientras utilizas la aplicación.

### 5. Instalar y ejecutar el frontend

Abre una segunda terminal y entra en la carpeta del frontend:

```bash
cd trazabilidad-frontend
```

Instala las dependencias de Node.js:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible normalmente en:

http://localhost:5173

Mantén abierta esta terminal mientras utilizas el sistema.

---

## Cuenta de Administrador

El sistema cuenta con la función de inicialización automática `seed_usuario()` en `main.py`, la cual se ejecuta al arrancar el servidor backend para crear un usuario administrador único si no existe previamente en la base de datos `trazabilidad.db`.

Por motivos de seguridad, la contraseña se obtiene estrictamente de la variable de entorno `ADMIN_PASSWORD` definida en el archivo `.env`, evitando almacenar claves fijas en el código fuente.

**Credenciales de acceso configuradas por defecto:**
* **Correo:** `admin@plurionetrace.com` (o el especificado en la variable `ADMIN_CORREO` de tu `.env`).
* **Contraseña:** Definida mediante la variable `ADMIN_PASSWORD`.

Para iniciar sesión con privilegios de administrador por primera vez, asegúrate de haber configurado tu archivo `.env` antes de encender el servidor backend con Uvicorn.

---

### Registro e Inicio de Sesión

Para acceder al sistema:

1. Ejecuta el backend y el frontend siguiendo los pasos anteriores.
2. Abre `http://localhost:5173` en tu navegador.
3. Inicia sesión con las credenciales de administrador por defecto:
   * **Correo:** `admin@plurionetrace.com` (o el configurado en `ADMIN_CORREO` del `.env`)
   * **Contraseña:** Configurada en la variable `ADMIN_PASSWORD` del archivo `.env`.
4. Si requieres una cuenta adicional, utiliza la opción de registro integrada en la interfaz para dar de alta nuevos usuarios con sus respectivas contraseñas cifradas de forma segura.

Los permisos y las funciones disponibles están protegidos mediante tokens de acceso (JWT) para garantizar la seguridad del sistema.

##  Base de datos


El proyecto utiliza SQLite para almacenar la información de trazabilidad. El archivo trazabilidad.db se genera automáticamente de forma local al iniciar el backend.

---

##  Inteligencia artificial

PluriOne Trace integra Google Gemini para ofrecer asistencia conversacional relacionada con las operaciones logísticas. El servicio requiere una clave válida configurada mediante la variable `GEMINI_API_KEY` en el archivo `.env`.

---

##  Consideraciones de seguridad

- No almacenes contraseñas directamente en el código fuente.
- No subas archivos `.env` al repositorio.
- No publiques claves de API ni credenciales.
- Utiliza contraseñas seguras para las cuentas administrativas.
- No compartas credenciales de desarrollo en capturas, documentación pública o repositorios.
- En entornos de producción, desactiva la configuración de recarga automática de Uvicorn y utiliza una configuración de despliegue apropiada.

---
## Simulador IoT

El proyecto incluye un script emulador para enviar actualizaciones automáticas de ubicación y estado a la API simulando dispositivos IoT en campo.

### ¿Cómo ejecutarlo?

1. Asegúrate de tener tu entorno virtual activo y el backend encendido (`uvicorn main:app --reload`).
2. Ejecuta el simulador pasando como argumentos el ID del material y la nueva ubicación:
   ```bash
   python trazabilidad-backend/simulador_iot.py MAT-101 "Monterrey"

## Uso de IA

Se utilizó un asistente de inteligencia artificial como herramienta de apoyo técnico a lo largo del proyecto para:
- Estructurar y optimizar los endpoints de FastAPI y los esquemas en Pydantic.
- Resolver detalles de integración y consumo de APIs en el frontend con React + Vite.
- Asistir en la configuración del entorno, rutas de archivos (`load_dotenv`) y la depuración del script de simulación IoT (`simulador_iot.py`).
- Colaborar en la redacción y estructuración de la documentación técnica (`README.md`, PRD y MVP).

**Criterio y validación humana:**
El diseño del modelo de datos, la arquitectura general del sistema, las reglas de negocio, la resolución de pruebas funcionales y la validación de cada componente en entorno local fueron definidos, probados y validados directamente por el desarrollador.

##  Motor Analítico de IA e Inteligencia Logística (Engine V2.0)

El sistema de trazabilidad incorpora un motor de diagnóstico inteligente que evalúa en tiempo real el desempeño de los envíos mediante las siguientes reglas analíticas:

1. **Extracción Dinámica de Tiempos (`minutos_estimados`)**: Mediante el uso de expresiones regulares (`re`), el sistema procesa el campo de texto `tiempo_estimado` de la ruta asignada (ej. "4 horas", "90 min") para transformarlo a un valor numérico en minutos. Si la ruta se encuentra sin definir, el sistema gestiona el estado de manera predeterminada (`None`).
2. **Cálculo de Tránsito en Vivo**: Se calcula con precisión el tiempo transcurrido desde el primer evento de la bitácora con estado *"En tránsito"* hasta el momento actual del análisis.
3. **Criterio Automatizado de Nivel de Riesgo**:
   -  **Riesgo Alto**: Si el tiempo en tránsito supera el tiempo estimado de la ruta o si se detectan checkpoints con retraso explícito.
   -  **Riesgo Medio**: Si el envío ha consumido el 80% o más del tiempo estimado de la ruta.
   -  **Riesgo Bajo**: Si el trayecto opera dentro de los parámetros normales esperados.
4. **Corrección Métrica**: Se sustituyó el concepto ambiguo de «kilómetros recorridos» por la métrica precisa de **«km de la ruta»**, reflejando la distancia total planeada del trayecto asignado.



##  Licencia

Proyecto académico desarrollado para fines educativos y de demostración tecnológica.

