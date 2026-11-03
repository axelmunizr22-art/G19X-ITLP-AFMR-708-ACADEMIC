import os
os.environ["SECRET_KEY"] = "solo-para-pruebas"
os.environ["DATABASE_URL"] = "sqlite:///./prueba.db"

from fastapi.testclient import TestClient
import main

# Instanciamos el cliente directamente con main.app
cliente = TestClient(main.app)

def test_minutos_estimados():
    assert main.minutos_estimados("4 horas") == 240
    assert main.minutos_estimados("90 min") == 90
    assert main.minutos_estimados("Por definir") is None

def test_materiales_sin_token():
    assert cliente.get("/materiales/").status_code == 401

def test_login_fallido():
    response = cliente.post(
        "/auth/login",
        json={
            "correo": "admin@plurionetrace.com",
            "password": "incorrecta"
        }
    )
    assert response.status_code == 401