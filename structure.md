G19X-ITLP-AFMR-708-ACADEMIC/
├── docs/                      # Especificaciones formales del producto
│   ├── PRD.md                 # Documento de Requisitos del Producto (PRD)
│   ├── MVP.md                 # Alcance y criterios de aceptación del MVP
│   └── evidencias/            # Evidencias de pruebas y validación
│       └── instalacion-limpia.md # Bitácora de instalación y pruebas en limpio
├── trazabilidad-backend/      # Servidor API REST con FastAPI
│   ├── tests/                 # Carpeta de pruebas unitarias y de integración
│   │   └── test_analisis.py # Archivo de pruebas con pytest
│   ├── .env.example           # Plantilla limpia de variables de entorno
│   ├── database.py            # Motor de conexión SQLAlchemy y sesión
│   ├── main.py                # Endpoints REST, autenticación y lógica de IA
│   ├── models.py              # Definición de tablas relacionales (3FN)
│   ├── pytest.ini             # Configuración de pytest
│   ├── requirements.txt       # Lista de dependencias de Python
│   └── simulador_iot.py       # Script de simulación de trayectos
├── trazabilidad-frontend/     # Cliente web SPA en React + Vite
│   ├── public/                # Recursos estáticos públicos
│   ├── src/
│   │   ├── assets/            # Imágenes y logos
│   │   ├── components/        # Componentes modulares
│   │   │   ├── Login.jsx        # Componente de inicio de sesión
│   │   │   └── PanelAnalisisIA.jsx # Componente de diagnóstico inteligente
│   │   ├── App.css             # Estilos globales
│   │   ├── App.jsx             # Panel de control principal
│   │   ├── index.css           # Configuración de estilos base
│   │   └── main.jsx            # Punto de entrada Vite
│   ├── package.json           # Dependencias de Node.js / NPM
│   └── vite.config.js         # Configuración del empaquetador Vite
├── .gitignore                 # Exclusión de venv, .env, dist y trazabilidad.db
└── README.md                  # Documentation principal del proyecto




