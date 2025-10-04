-- Portfolio Database Schema
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Personal Information Table
CREATE TABLE personal_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(255),
    bio TEXT,
    profile_image VARCHAR(500),
    resume_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills Table
CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    proficiency_level ENUM('beginner', 'intermediate', 'advanced', 'expert') DEFAULT 'intermediate',
    icon_class VARCHAR(100),
    description TEXT,
    years_experience INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tech_stack JSON,
    live_demo_url VARCHAR(500),
    github_url VARCHAR(500),
    image_url VARCHAR(500),
    project_type ENUM('web', 'mobile', 'desktop', 'api', 'other') DEFAULT 'web',
    status ENUM('completed', 'in-progress', 'planned') DEFAULT 'completed',
    start_date DATE,
    end_date DATE,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Portfolio Analytics Table
CREATE TABLE portfolio_analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_view VARCHAR(100),
    visitor_ip VARCHAR(45),
    user_agent TEXT,
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_duration INT DEFAULT 0
);

-- Insert Sample Data
INSERT INTO personal_info (name, title, email, phone, location, bio) VALUES
('Your Name', 'Full Stack Web Developer', 'your.email@example.com', '+91 XXXXX XXXXX', 'Your City, India', 'Passionate web developer with experience in creating modern, responsive websites and applications.');

INSERT INTO skills (skill_name, category, proficiency_level, icon_class, description, years_experience) VALUES
('HTML5', 'Frontend', 'expert', 'fab fa-html5', 'Semantic markup and modern HTML structure', 3),
('CSS3', 'Frontend', 'expert', 'fab fa-css3-alt', 'Responsive design and modern CSS features', 3),
('JavaScript', 'Frontend', 'advanced', 'fab fa-js-square', 'ES6+ and modern JavaScript development', 2),
('React', 'Frontend', 'intermediate', 'fab fa-react', 'Component-based UI development', 1),
('Node.js', 'Backend', 'intermediate', 'fab fa-node-js', 'Server-side JavaScript development', 1),
('PHP', 'Backend', 'advanced', 'fab fa-php', 'Backend development and database integration', 2),
('MySQL', 'Database', 'advanced', 'fas fa-database', 'Database design and management', 2),
('Git', 'Tools', 'advanced', 'fab fa-git-alt', 'Version control and collaboration', 2);

INSERT INTO projects (title, description, tech_stack, live_demo_url, github_url, project_type, featured) VALUES
('SIH Civic Issues Platform', 'A comprehensive platform for reporting and managing civic issues with real-time tracking and database integration.', '["PHP", "MySQL", "JavaScript"]', '#', '#', 'web', TRUE),
('Portfolio Website', 'Personal portfolio website with modern design and responsive layout.', '["HTML5", "CSS3", "JavaScript"]', '#', '#', 'web', TRUE),
('E-Commerce Platform', 'Full-featured e-commerce website with shopping cart and payment integration.', '["React", "Node.js", "MongoDB"]', '#', '#', 'web', FALSE);