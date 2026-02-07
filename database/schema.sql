-- SQL Database Schema

-- Table creation for 'casos'
CREATE TABLE casos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) NOT NULL
);

-- Table creation for 'seguimiento'
CREATE TABLE seguimiento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_caso INT,
    comentario TEXT NOT NULL,
    fecha_seguimiento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_caso) REFERENCES casos(id)
);

-- Table creation for 'historial_cambios'
CREATE TABLE historial_cambios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_caso INT,
    cambio TEXT NOT NULL,
    fecha_cambio DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_caso) REFERENCES casos(id)
);

-- Table creation for 'clientes'
CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(15) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);