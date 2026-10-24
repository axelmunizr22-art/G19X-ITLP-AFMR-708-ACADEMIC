# Documento de Requisitos del Producto (PRD)

**Nombre del Producto:** Sistema Inteligente de Trazabilidad de Materiales  
**Empresa:** PluriOne S.A. de C.V.  
**Autor:** Axel Farid Muñiz Ramírez-ITLP 
**Estado:** Aprobado para Desarrollo  
**Fecha:** Octubre de 2026  

---

## 1. Visión y Objetivos

### 1.1. Visión del Producto
Transformar la gestión de inventarios y envíos dentro de la cadena de suministro en **PluriOne Trace** mediante la consolidación de un sistema web integral de trazabilidad. La plataforma combina el registro atómico de paquetes, la actualización inmutable de puntos de control (*checkpoints*) y la asistencia conversacional inteligente con RAG basada en **Google Gemini**, eliminando la opacidad en el tránsito de materiales y acelerando las consultas operativas.

### 1.2. Objetivos del Negocio (KPIs)
* **Eficiencia Operativa:** Reducir en un 70% el tiempo de búsqueda y consulta del estado de un paquete mediante el Chatbot RAG e interfaz en vivo.
* **Visibilidad y Trazabilidad:** Registrar el 100% de los movimientos y cambios de ubicación/estado de los paquetes (`MAT-XXX`) en la bitácora del sistema.
* **Resiliencia y Disponibilidad:** Garantizar un tiempo de respuesta medio en el backend menor a 200 ms y un sistema de tolerancia a fallos/reintentos automáticos en las consultas de Inteligencia Artificial para mitigar picos de demanda.

---

## 2. Usuarios Objetivo (User Personas)

1. **Personal de Almacén / Recepción (Operativo):**
   * **Perfil:** Operador encargado de recibir, registrar y escanear entrada y salida de mercancía.
   * **Necesidades:** Registrar paquetes rápidamente asociando cliente, nombre, ubicación inicial y generar etiquetas/códigos.
   * **Puntos de dolor:** Captura manual repetitiva en hojas de cálculo y pérdida de rastro físico de los materiales.

2. **Área de Logística / Planificación:**
   * **Perfil:** Coordinador de rutas, asignación de envíos y relación con conductores.
   * **Necesidades:** Asignar paquetes a choferes y rutas específicas, cambiar ubicaciones y actualizar estados en tiempo real.
   * **Puntos de dolor:** Desconexión entre los conductores en ruta y la visibilidad centralizada del almacén.

3. **Cliente Destinatario / Usuario Final:**
   * **Perfil:** Cliente externo o receptor del envío.
   * **Necesidades:** Consultar el estado exacto de su paquete mediante su guía e ID sin requerir llamadas de soporte.

4. **Administrador / Directivo:**
   * **Perfil:** Supervisor de operaciones de PluriOne Trace.
   * **Necesidades:** Auditar movimientos, supervisar el catálogo de clientes, conductores, materiales y apoyarse en el Asistente IA para resolver dudas teóricas o de inventario.

---

## 3. Alcance del Producto

### 3.1. En Alcance (In Scope)
* **Autenticación segura de usuarios:** Control de acceso, inicio de sesión y gestión de perfiles (`/auth/login`, `/auth/register`, `/auth/recuperar`) con persistencia en la tabla `usuarios`.
* **Registro atómico de paquetes e insumos:** Ingesta de materiales (MAT-XXX) asociando el cliente destinatario, ubicación inicial y soporte para etiquetado con Códigos QR y simulación lógica de lecturas RFID a nivel de software.
* **Asignación logística relacional (Outbound):** Vinculación dinámica entre el paquete, el cliente receptor, el conductor designado y la ruta de transporte, cambiando el estado operativo a *"En Tránsito"*.
* **Bitácora inmutable de checkpoints (Escaneo y Seguimiento):** Actualización de ubicaciones en tiempo real y estados logísticos (*En Regla/Tránsito, Retrasado, Entregado*) con registro histórico de fechas, horas y motivos de retraso.
* **Diagnóstico preventivo con IA:** Inferencia automática sobre los trayectos (`GET /materiales/{id}/analisis-ia`) para clasificar el nivel de riesgo en la entrega (*Alto, Medio, Bajo*) y detectar posibles anomalías antes de que afecten al cliente.
* **Exportación de Guías de Trazabilidad:** Generación y descarga inmediata del reporte oficial de ruta en formato PDF de alta calidad mediante `html2pdf.js` desde el navegador web.

### 3.2. Fuera de Alcance (Out of Scope)
* **Migración a PostgreSQL en la nube:** Despliegue en base de datos distribuida (previsto para la Fase 2 de escalabilidad).
* **Notificaciones Push y SMS Automatizados:** Envío automático de alertas SMS o mensajes de WhatsApp al destinatario ante cambios de estado.
* **Aplicaciones Móviles Nativas:** Módulos descargables para iOS o Android (el sistema actual opera como una aplicación web responsiva accesible desde cualquier navegador móvil).

---

## 4. Historias de Usuario y Requisitos Funcionales

- **US-01 (Registro de Paquetes - Prioridad Alta):**
  - **Historia:** Como Operador de Almacén, quiero registrar un nuevo paquete con su cliente y ubicación para asignarle una guía única.
  - **Criterios de Aceptación:** Debe guardar en la BD el ID de paquete, nombre, cliente, ubicación inicial y estado (*"En almacén"*).

- **US-02 (Escaneo de Checkpoints - Prioridad Alta):**
  - **Historia:** Como Coordinador de Logística, quiero actualizar la ubicación y estado de un paquete para reflejar su avance.
  - **Criterios de Aceptación:** Endpoint `PUT /materiales/{id}/escanear` actualiza `ubicacion_actual`, `estado` e inserta el evento en el historial.

- **US-03 (Consulta RAG de Envíos con IA - Prioridad Alta):**
  - **Historia:** Como Usuario, quiero consultar a través del Chatbot el estado en vivo de un paquete para conocer su avance en lenguaje natural.
  - **Criterios de Aceptación:** El chatbot consulta la base de datos y responde con el ID, cliente, ubicación y estado del paquete.

- **US-04 (Tolerancia a Fallos en IA - Prioridad Media):**
  - **Historia:** Como Sistema Backend, quiero manejar automáticamente errores transitorios (503) en la API de IA para garantizar disponibilidad.
  - **Criterios de Aceptación:** Implementar reintentos en el backend al detectar códigos de error del servicio antes de devolver un mensaje de respaldo.

---

## 5. Requisitos No Funcionales

- **Rendimiento:** Tiempos de respuesta de la API de FastAPI < 200 ms para operaciones CRUD.
- **Seguridad:** Almacenamiento seguro de contraseñas con hash `bcrypt` y aislamiento de credenciales en archivo `.env`.
- **Arquitectura:** Desacoplamiento entre cliente SPA (React + Vite) y servidor API REST (FastAPI + SQLAlchemy).

---

## 6. Supuestos y Dependencias

* **Dependencia:** Conexión a Internet estable en el servidor backend para realizar peticiones HTTPS a la API de Google Gemini.
* **Dependencia:** Servidor Uvicorn ejecutándose localmente o en entorno de despliegue sobre Python 3.10+.
* **Supuesto:** La base de datos SQLite `trazabilidad.db` mantiene la integridad referencial entre clientes, conductores, rutas y materiales registrados.
* **Supuesto:** Cuenta con API Key de Google AI Studio con cuota activa para llamadas al modelo `gemini-3.6-flash`. 
