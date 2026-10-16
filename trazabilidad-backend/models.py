from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
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
    nombre = Column(String, nullable=False)
    empresa = Column(String, nullable=True)
    
    # Relación uno a muchos con materiales
    materiales = relationship("Material", back_populates="cliente_rel")

class Conductor(Base):
    __tablename__ = "conductores"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    licencia = Column(String, nullable=True)
    
    materiales = relationship("Material", back_populates="conductor_rel")

class Ruta(Base):
    __tablename__ = "rutas"
    id = Column(Integer, primary_key=True, index=True)
    origen = Column(String, nullable=False)
    destino = Column(String, nullable=False)
    
    materiales = relationship("Material", back_populates="ruta_rel")

class Material(Base):
    __tablename__ = "materiales"

    id = Column(String, primary_key=True, index=True)  # ej. MAT-101
    nombre = Column(String, nullable=False)
    ubicacion_actual = Column(String, default="Almacén Central")
    estado = Column(String, default="En Almacén (Pendiente de Asignación)")
    metodo_captura = Column(String, default="Código QR (Guía Digital)")
    
    # CLAVES FORÁNEAS (Relaciones a tus otras tablas)
    cliente_id = Column(Integer, ForeignKey("clientes.id"), nullable=True)
    conductor_id = Column(Integer, ForeignKey("conductores.id"), nullable=True)
    ruta_id = Column(Integer, ForeignKey("rutas.id"), nullable=True)

    # RELACIONES ORM
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
    fecha_hora = Column(DateTime, default=datetime.utcnow)

    material_rel = relationship("Material", back_populates="historial")