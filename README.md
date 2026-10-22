# PluriOne Trace - Sistema Inteligente de Trazabilidad de Materiales

**Alumno:** Axel Farid Muñiz Ramírez  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Institución:** Instituto Tecnológico de La Piedad-ITLP  
**Empresa:** PluriOne S.A. de C.V. (Develop Talent & Technology)

---

## 📋 Descripción del Proyecto

Es una aplicación web full-stack diseñada para gestionar, monitorear y consultar la trazabilidad de materiales y envíos en procesos logísticos en tiempo real. 

Permite relacionar paquetes con clientes, conductores y rutas de transporte, registrar actualizaciones de ubicación (*checkpoints*) y generar guías de seguimiento en formato PDF. Además, integra un asistente conversacional alimentado con la API de **Google Gemini** que responde consultas operativas utilizando el contexto en tiempo real de la base de datos.

---

## 🛠️ Stack Tecnológico y Puertos

- **Backend (Puerto 8000):** Python, FastAPI, SQLAlchemy (ORM), Uvicorn, Passlib (Bcrypt).
- **Frontend (Puerto 5173):** JavaScript / JSX, React.js, Vite, Tailwind CSS, html2pdf.js.
- **Base de Datos:** SQLite (`trazabilidad.db`, relacional, auto-generada).
- **Inteligencia Artificial:** API de Google Gemini (`google-genai`).
---

## 🚀 Guía de Instalación y Ejecución

### Requisitos Previos
- Python 3.10 o posterior.
- Node.js y NPM.
- Clave de API de Google AI Studio (Gemini).

---

### 1. Configuración del Backend (FastAPI)

1. Abre una terminal y navega a la carpeta del backend:
   ```powershell
   cd trazabilidad-backend



   ## Acceso al Sistema

Al clonar y ejecutar el proyecto por primera vez, la base de datos iniciará vacía (`trazabilidad.db` se genera automáticamente). 

Para ingresar al sistema:
1. Abre `http://localhost:5173` en el navegador.
2. Haz clic en **"Registrarse"** para crear una nueva cuenta con cualquier correo y contraseña.
3. Inicia sesión con la cuenta creada.