
# Estructura del Repositorio - PluriOne Trace

```text
G19X-ITLP-AFMR-708-ACADEMIC/
├── docs/                      # Especificaciones formales del producto
│   ├── PRD.md                 # Documento de Requisitos del Producto (PRD)
│   └── MVP.md                 # Alcance y criterios de aceptación del MVP
├── trazabilidad-backend/      # Servidor API REST con FastAPI
│   ├── .env.example           # Plantilla limpia de variables de entorno
│   ├── database.py            # Motor de conexión SQLAlchemy y sesión
│   ├── main.py                # Endpoints REST, autenticación y lógica de IA
│   ├── models.py              # Definición de tablas relacionales (3FN)
│   ├── requirements.txt       # Lista de dependencias de Python
│   └── simulador_iot.py       # Script de simulación de trayectos
├── trazabilidad-frontend/     # Cliente web SPA en React + Vite
│   ├── public/                # Recursos estáticos públicos
│   ├── src/
│   │   ├── assets/            # Imágenes y logos
│   │   ├── App.css             # Estilos globales
│   │   ├── App.jsx             # Panel de control y vistas principales
│   │   ├── index.css           # Configuración de estilos base
│   │   └── main.jsx            # Punto de entrada Vite
│   ├── package.json           # Dependencias de Node.js / NPM
│   └── vite.config.js         # Configuración del empaquetador Vite
├── .gitignore                 # Exclusión de venv, .env, dist y trazabilidad.db
├── README.md                  # Documentación principal del proyecto
└── structure.md               # Árbol de archivos del repositorio
```
