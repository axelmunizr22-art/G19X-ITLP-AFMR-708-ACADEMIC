Sistema Inteligente de Trazabilidad de Materiales
Alumno: Axel Farid Muñiz Ramírez  
Carrera: Ingeniería en Sistemas Computacionales  
Institución: Instituto Tecnológico de La Piedad  
Empresa: PluriOne S.A. de C.V. (Develop Talent & Technology)
Qué hace?
Es una aplicación web para registrar materiales y
consultar su seguimiento dentro de un proceso logístico. Permite
relacionar materiales con clientes, conductores y rutas, actualizar su
ubicación y estado, consultar el historial de trazabilidad y generar una
guía de seguimiento. También integra un asistente conversacional con
Google Gemini para apoyar consultas relacionadas con los envíos.
Qué necesitas instalado?
Python 3.11 o posterior.
Node.js y npm, en versiones compatibles con las dependencias de Vite
del proyecto.
Una clave de API de Google AI Studio para utilizar las funciones de
Gemini.
Git (opcional).
Base de datos
El proyecto utiliza SQLite, por lo que no necesitas instalar MySQL ni
crear una base de datos en un servidor independiente.
El archivo de base de datos se encuentra en
`trazabilidad-backend/trazabilidad.db`.
La aplicación utiliza SQLAlchemy para conectarse a SQLite.
Conserva una copia de seguridad del archivo `.db` antes de realizar
cambios importantes.
Si el proyecto se ejecuta por primera vez y no existe la base de
datos, revisa la configuración de inicialización en `main.py` y los
modelos antes de crear o importar datos.
Configuración
Abre la carpeta `trazabilidad-backend`.
Crea o revisa el archivo `.env` dentro de esa carpeta.
Configura las variables siguientes:
``` dotenv
DATABASE\_URL=sqlite:///./trazabilidad.db


```

Cómo instalarlo y ejecutarlo
El backend y el frontend se ejecutan en terminales separadas.
1. Backend (FastAPI)
Desde la carpeta raíz del proyecto, abre una terminal y ejecuta:
``` powershell
cd trazabilidad-backend
python -m venv venv
.\\venv\\Scripts\\Activate
python -m pip install --upgrade pip
pip install fastapi "uvicorn\[standard]" sqlalchemy pydantic python-dotenv google-genai
uvicorn main:app --reload
```
Si ya existe el entorno virtual `venv`, puedes activarlo y omitir el
comando que lo crea. En caso de que PowerShell no permita activar el
entorno, puedes usar la terminal CMD con `venv\\Scripts\\activate.bat`.
La API estará disponible normalmente en:
http://localhost:5173/
Uvicorn running on http://127.0.0.1:8000

2. Frontend (React + Vite)
Abre una segunda terminal desde la carpeta raíz del proyecto:
``` powershell
cd trazabilidad-frontend
npm install
npm run dev
```
Vite mostrará en la terminal la dirección local para abrir la
aplicación; normalmente es http://localhost:5173.
Mantén ambas terminales abiertas mientras utilices el sistema.
Usuario de prueba
usuario: axelmunizr22@gmail.com
contraseña: F12345
De igual manera para prueba puede crear su cuenta y entrara al sistema

Lo que todavía no funciona o requiere validación
Seguridad y autenticación: reforzar la protección de las cuentas mediante el almacenamiento seguro de contraseñas, la validación del proceso de recuperación y la implementación de mecanismos de autorización para proteger los endpoints de la API.

Integración con Google Gemini: verificar la carga de la clave API mediante variables de entorno, validar la comunicación con el servicio y asegurar un manejo adecuado de errores cuando no exista conexión o el servicio no esté disponible.

Simulación y seguimiento de trayectos: las ubicaciones y los cambios de estado generados automáticamente representan eventos simulados. Para ofrecer seguimiento GPS en tiempo real, será necesario integrar una fuente de geolocalización y validar la actualización de las coordenadas.

Pruebas funcionales e integración: ejecutar pruebas que permitan comprobar el flujo completo del sistema, desde el registro de materiales y la asignación de conductores y rutas hasta la actualización de estados, la consulta del historial y la generación de guías de seguimiento.

Preparación para producción: fortalecer la configuración de CORS, proteger las credenciales, mejorar el registro y manejo de errores, verificar la integridad de los datos y establecer procedimientos de respaldo y recuperación antes de desplegar la aplicación en un entorno productivo.

Tecnologías principales
Frontend: React, Vite, Axios y Lucide React.
Backend: Python, FastAPI y Pydantic.
Persistencia: SQLite y SQLAlchemy.
Asistente de IA: Google Gemini.
---
Proyecto desarrollado como parte de la Residencia Profesional de
Ingeniería en Sistemas Computacionales para PluriOne S.A. de C.V.,
en el Instituto Tecnológico de La Piedad / TecNM.