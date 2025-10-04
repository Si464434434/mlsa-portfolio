-- SIH 25031 Database Schema
-- Run this in phpMyAdmin to create your database structure

CREATE DATABASE IF NOT EXISTS sih_project;
USE sih_project;

-- Issues/Reports Table
CREATE TABLE IF NOT EXISTS issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    category VARCHAR(100) NOT NULL,
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    location VARCHAR(500),
    title VARCHAR(255),
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    status ENUM('pending', 'in-progress', 'resolved', 'closed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Feedback Table
CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    rating INT DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tourism Reports Table
CREATE TABLE IF NOT EXISTS tourism_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(500) NOT NULL,
    type ENUM('safety', 'cleanliness', 'facility', 'feedback') DEFAULT 'feedback',
    description TEXT NOT NULL,
    contact VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Waste Management Reports Table
CREATE TABLE IF NOT EXISTS waste_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(500) NOT NULL,
    type ENUM('illegal_dumping', 'missed_collection', 'overflowing_bin', 'hazardous_waste') NOT NULL,
    description TEXT NOT NULL,
    vehicle_number VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MRT Reports Table
CREATE TABLE IF NOT EXISTS mrt_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    line_route VARCHAR(100),
    vehicle_id VARCHAR(50),
    location VARCHAR(500) NOT NULL,
    severity ENUM('low', 'medium', 'high') DEFAULT 'medium',
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO issues (name, email, category, priority, location, title, description) VALUES
('John Doe', 'john@example.com', 'roads', 'high', 'MG Road, Ranchi', 'Large Pothole', 'Large pothole causing traffic issues'),
('Jane Smith', 'jane@example.com', 'water', 'medium', 'Doranda, Ranchi', 'Water Supply Issue', 'No water supply since 3 days'),
('Ram Kumar', 'ram@example.com', 'electricity', 'urgent', 'Kanke Road', 'Street Light Not Working', 'Street light broken for 1 week');

INSERT INTO feedback (name, email, message, rating) VALUES
('Priya Sharma', 'priya@example.com', 'Great initiative for civic issues!', 5),
('Amit Singh', 'amit@example.com', 'Very helpful platform', 4);