<?php include 'portfolio-backend.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($personalInfo['name']); ?> - Portfolio</title>
    <link rel="stylesheet" href="portfolio-style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>Portfolio</h2>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#home" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#skills" class="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">Hi, I'm <span class="highlight"><?php echo htmlspecialchars($personalInfo['name']); ?></span></h1>
                <h2 class="hero-subtitle"><?php echo htmlspecialchars($personalInfo['title']); ?></h2>
                <p class="hero-description">
                    <?php echo htmlspecialchars($personalInfo['bio']); ?>
                </p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                    <a href="Profile.pdf" class="btn btn-resume" download="Resume.pdf" target="_blank">
                        <i class="fas fa-download"></i> Download Resume
                    </a>
                </div>
            </div>
            <div class="hero-image">
                <div class="profile-img">
                    <i class="fas fa-user-circle"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p><?php echo nl2br(htmlspecialchars($personalInfo['bio'])); ?></p>
                    
                    <div class="about-stats">
                        <div class="stat">
                            <h3><?php echo $stats['projects']; ?>+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div class="stat">
                            <h3><?php echo $stats['experience']; ?>+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div class="stat">
                            <h3><?php echo $stats['skills']; ?>+</h3>
                            <p>Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                <?php foreach ($skills as $skill): ?>
                <div class="skill-item">
                    <i class="<?php echo htmlspecialchars($skill['icon_class']); ?>"></i>
                    <h3><?php echo htmlspecialchars($skill['skill_name']); ?></h3>
                    <p><?php echo htmlspecialchars($skill['description']); ?></p>
                    <div class="skill-experience">
                        <small><?php echo $skill['years_experience']; ?> years experience</small>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                <?php foreach ($projects as $project): 
                    $techStack = json_decode($project['tech_stack'], true) ?: [];
                ?>
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-globe"></i>
                    </div>
                    <div class="project-content">
                        <h3><?php echo htmlspecialchars($project['title']); ?></h3>
                        <p><?php echo htmlspecialchars($project['description']); ?></p>
                        <div class="project-tech">
                            <?php foreach ($techStack as $tech): ?>
                                <span><?php echo htmlspecialchars($tech); ?></span>
                            <?php endforeach; ?>
                        </div>
                        <div class="project-links">
                            <?php if ($project['live_demo_url'] && $project['live_demo_url'] !== '#'): ?>
                            <a href="<?php echo htmlspecialchars($project['live_demo_url']); ?>" class="project-link" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                            <?php endif; ?>
                            <?php if ($project['github_url'] && $project['github_url'] !== '#'): ?>
                            <a href="<?php echo htmlspecialchars($project['github_url']); ?>" class="project-link" target="_blank">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Let's Work Together</h3>
                    <p>I'm always interested in new opportunities and exciting projects. 
                       Feel free to reach out if you'd like to collaborate!</p>
                    
                    <div class="contact-items">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p><?php echo htmlspecialchars($personalInfo['email']); ?></p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Phone</h4>
                                <p><?php echo htmlspecialchars($personalInfo['phone']); ?></p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p><?php echo htmlspecialchars($personalInfo['location']); ?></p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-file-pdf"></i>
                            <div>
                                <h4>Resume</h4>
                                <p><a href="Profile.pdf" download="Resume.pdf" style="color: var(--primary-color); text-decoration: none;">Download PDF</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="subject" name="subject" placeholder="Subject" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 <?php echo htmlspecialchars($personalInfo['name']); ?>. All rights reserved.</p>
            <p><small>Total Messages: <?php echo $stats['messages']; ?> | Visits logged in database</small></p>
        </div>
    </footer>

    <script>
    // Updated Contact Form with Database Integration
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        formData.append('action', 'contact');
        
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        fetch('', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                this.reset();
            }
        })
        .catch(error => {
            alert('Error sending message!');
            console.error('Error:', error);
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
    </script>
    <script src="portfolio-script.js"></script>
</body>
</html>