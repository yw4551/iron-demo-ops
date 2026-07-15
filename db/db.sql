CREATE DATABASE IF NOT EXISTS iron_demo;

USE iron_demo;

CREATE TABLE IF NOT EXISTS operators (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    `rank` VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code_name VARCHAR(100),
    threat_level VARCHAR(50),
    status VARCHAR(50),
    operator_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (operator_id)
    REFERENCES operators(id)
);

CREATE TABLE IF NOT EXISTS logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(100),
    incident_id INT,
    operator_id INT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (incident_id)
    REFERENCES incidents(id),
    FOREIGN KEY (operator_id)
    REFERENCES operators(id)
);