# Instalación en carpeta limpia y validación de MVP — 28 de octubre de 2026 · Commit: clean-final

| Paso | Qué hice | Resultado | Tiempo |
|---|---|---|---|
| **1** | `git clone https://github.com/axelmunizr22-art/G19X-ITLP-AFMR-708-ACADEMIC.git` en carpeta externa de prueba. | Repositorio clonado de forma exitosa sin archivos sensibles (`.env`, `venv`, `node_modules`). | 1 min |
| **2** | Creación del entorno virtual (`python -m venv venv`), activación e instalación de dependencias con `pip install -r requirements.txt`. | Dependencias del backend instaladas correctamente (incluyendo `requests`, `google-genai`, `passlib`, `fastapi`, etc.). | 3 min |
| **3** | Copiado de `.env.example` a `.env` y configuración local de credenciales (`ADMIN_CORREO`, `ADMIN_PASSWORD`, `GEMINI_API_KEY` y `SECRET_KEY`). | Variables de entorno configuradas privadamente de manera local. | 2 min |
| **4** | Inicio del backend con `uvicorn main:app --reload`. | Servidor iniciado en puerto 8000; base de datos `trazabilidad.db` generada y usuario administrador creado automáticamente mediante el seed de inicio. | 1 min |
| **5** | Instalación de dependencias del frontend (`npm install`) y ejecución con `npm run dev`. | Interfaz SPA web corriendo sin errores en `http://localhost:5173`. | 4 min |
| **6** | Inicio de sesión con el administrador, registro del material `MAT-101`, asignación de su respectivo conductor y ruta. | Material registrado y vinculado correctamente en la base de datos relacional. | 2 min |
| **7** | Registro manual de un checkpoint de avance para el material `MAT-101` mediante el formulario de escaneo. | Evento insertado exitosamente en la bitácora de trazabilidad con actualización de ubicación y estado. | 1 min |
| **8** | Ejecución de la prueba del simulador IoT: `python trazabilidad-backend/simulador_iot.py MAT-101 "Monterrey"`. | Script conectado correctamente a la API, autenticándose con las credenciales de administrador y enviando la actualización de ubicación con éxito. | 2 min |
| **9** | Apertura de la vista de guía detallada, descarga del comprobante en PDF y prueba del Chatbot con IA consultando datos del paquete. | Guía visualizada, PDF exportado correctamente mediante `html2pdf.js` y respuestas conversacionales de Gemini generadas con éxito usando el contexto de la base de datos. | 3 min |