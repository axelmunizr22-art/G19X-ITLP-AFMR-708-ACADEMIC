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
git clone URL_DEL_REPOSITORIO
cd NOMBRE_DEL_REPOSITORIO
```

Reemplaza `URL_DEL_REPOSITORIO` y `NOMBRE_DEL_REPOSITORIO` por los datos reales de tu repositorio.

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

Copia el archivo `.env.example` y nómbralo `.env` dentro de la carpeta `trazabilidad-backend`. Abre tu archivo `.env` y asegúrate de configurar estas variables obligatorias:


Dentro de `trazabilidad-backend`, busca el archivo `.env.example` y crea una copia llamada `.env`.

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


Si el proyecto utiliza otras variables de entorno, agrégalas al archivo `.env` según la configuración del backend.

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

##  Cuenta de administrador

Durante el inicio del backend, la función `seed_usuario()` de `main.py` puede crear automáticamente una cuenta de administrador si así está implementado en el proyecto.

Por seguridad, la contraseña del administrador debe obtenerse de la variable de entorno `ADMIN_PASSWORD`, definida en el archivo `.env`, y no estar escrita directamente en el código fuente.

Para configurar la contraseña:

1. Abre el archivo `.env` del backend.
2. Define la variable `ADMIN_PASSWORD` con una contraseña segura.
3. Inicia el backend para que se ejecute el proceso de inicialización de usuarios.

La cuenta de administrador debe utilizar el correo que establezca la implementación de `seed_usuario()` en `main.py`. Consulta esa función para identificar el correo configurado.

**Nota:** Si la cuenta de administrador ya existe en la base de datos, modificar `ADMIN_PASSWORD` no necesariamente cambiará su contraseña. Esto depende de cómo esté implementada la función `seed_usuario()`.

---

##  Registro e inicio de sesión

Para acceder al sistema:

1. Ejecuta el backend y el frontend siguiendo los pasos anteriores.
2. Abre http://localhost:5173 en tu navegador.
3. Inicia sesión con una cuenta existente.
* **Correo:** `admin@plurionetrace.com`
* **Contraseña:** Configurada en la variable `ADMIN_PASSWORD` del archivo `.env`.
4. Si no tienes una cuenta, utiliza la opción de registro, cuando esté habilitada.


Los permisos y las funciones disponibles dependerán del rol asignado a cada usuario.

---

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

##  Licencia

Proyecto académico desarrollado para fines educativos y de demostración tecnológica.
