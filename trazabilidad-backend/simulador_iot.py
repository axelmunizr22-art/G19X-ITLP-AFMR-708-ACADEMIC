import time
import requests
import sys

API_URL = "http://localhost:8000"

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
            response = requests.put(url, json=payload)
            
            if response.status_code == 200:
                print(f"✅ [SENSOR RFID] {paso['ubicacion']} | Estado: {paso['estado']}")
            else:
                detalle = response.json().get('detail', 'Error desconocido')
                print(f"⚠️ [ALERTA] No se pudo actualizar {material_id}: {detalle}")
                break
                
        except Exception as e:
            print(f"❌ [ERROR CONEXIÓN] No se pudo conectar a FastAPI: {e}")
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


  