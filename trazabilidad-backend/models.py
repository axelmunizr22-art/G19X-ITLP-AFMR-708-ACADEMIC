from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=True, default="Usuario PluriOne")  
    correo = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    rol = Column(String, default="Operador")

class Cliente(Base):
    __tablename__ = "clientes"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    empresa = Column(String, nullable=True)  
    email = Column(String, unique=True, index=True)
    telefono = Column(String, nullable=True)
    direccion_entrega = Column(String, nullable=True)
    calificacion = Column(Float, default=5.0)

    # Relación bidireccional alineada con Material
    materiales = relationship("Material", back_populates="cliente_rel")


class Conductor(Base):
    __tablename__ = "conductores"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    licencia = Column(String, nullable=True)
    telefono = Column(String, nullable=True)
    vehiculo_asignado = Column(String, nullable=True)
    estado = Column(String, default="Disponible")
    disponible = Column(Boolean, default=True)
    calificacion = Column(Float, default=5.0)  

    materiales = relationship("Material", back_populates="conductor_rel")


class Ruta(Base):
    __tablename__ = "rutas"

    id = Column(Integer, primary_key=True, index=True)
    nombre_ruta = Column(String, nullable=True)
    origen = Column(String, index=True)
    destino = Column(String, index=True)
    tiempo_estimado = Column(String, nullable=True)
    distancia_km = Column(String, nullable=True)
    calificacion_seguridad = Column(Float, default=5.0)  

    materiales = relationship("Material", back_populates="ruta_rel")
    
class Material(Base):
    __tablename__ = "materiales"

    id = Column(String, primary_key=True, index=True)  # ej. MAT-101
    nombre = Column(String, nullable=False)
    ubicacion_actual = Column(String, default="Almacén Central")
    estado = Column(String, default="En Almacén (Pendiente de Asignación)")
    metodo_captura = Column(String, default="Código QR (Guía Digital)")
    
    # CLAVES FORÁNEAS
    cliente_id = Column(Integer, ForeignKey("clientes.id"), nullable=True)
    conductor_id = Column(Integer, ForeignKey("conductores.id"), nullable=True)
    ruta_id = Column(Integer, ForeignKey("rutas.id"), nullable=True)

    # RELACIONES ORM ALINEADAS
    cliente_rel = relationship("Cliente", back_populates="materiales")
    conductor_rel = relationship("Conductor", back_populates="materiales")
    ruta_rel = relationship("Ruta", back_populates="materiales")
    historial = relationship("HistorialTrazabilidad", back_populates="material_rel", cascade="all, delete-orphan")


class HistorialTrazabilidad(Base):
    __tablename__ = "historial_trazabilidad"

    id = Column(Integer, primary_key=True, index=True)
    material_id = Column(String, ForeignKey("materiales.id"), nullable=False)
    ubicacion = Column(String, nullable=False)
    estado = Column(String, nullable=False)
    motivo = Column(String, nullable=True)  
    fecha_hora = Column(DateTime, default=datetime.utcnow)

    material_rel = relationship("Material", back_populates="historial")