<?php
// Portfolio Database Configuration
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'portfolio_db';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Portfolio Data Functions
class PortfolioData {
    private $pdo;
    
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    
    // Get Personal Information
    public function getPersonalInfo() {
        $stmt = $this->pdo->query("SELECT * FROM personal_info ORDER BY id DESC LIMIT 1");
        return $stmt->fetch();
    }
    
    // Get All Skills
    public function getSkills() {
        $stmt = $this->pdo->query("SELECT * FROM skills ORDER BY proficiency_level DESC, years_experience DESC");
        return $stmt->fetchAll();
    }
    
    // Get Featured Projects
    public function getProjects($featured_only = false) {
        $sql = "SELECT * FROM projects";
        if ($featured_only) {
            $sql .= " WHERE featured = 1";
        }
        $sql .= " ORDER BY created_at DESC";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }
    
    // Save Contact Message
    public function saveContactMessage($name, $email, $subject, $message) {
        $sql = "INSERT INTO contact_messages (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$name, $email, $subject, $message, $_SERVER['REMOTE_ADDR'] ?? 'unknown']);
    }
    
    // Get Contact Messages
    public function getContactMessages($limit = 10) {
        $stmt = $this->pdo->prepare("SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT ?");
        $stmt->execute([$limit]);
        return $stmt->fetchAll();
    }
    
    // Update Personal Info
    public function updatePersonalInfo($data) {
        $sql = "UPDATE personal_info SET name=?, title=?, email=?, phone=?, location=?, bio=?, updated_at=CURRENT_TIMESTAMP WHERE id=1";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            $data['name'],
            $data['title'], 
            $data['email'],
            $data['phone'],
            $data['location'],
            $data['bio']
        ]);
    }
    
    // Add New Skill
    public function addSkill($skill_name, $category, $proficiency, $icon_class, $description, $years) {
        $sql = "INSERT INTO skills (skill_name, category, proficiency_level, icon_class, description, years_experience) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$skill_name, $category, $proficiency, $icon_class, $description, $years]);
    }
    
    // Add New Project
    public function addProject($title, $description, $tech_stack, $live_url, $github_url, $type, $featured = false) {
        $sql = "INSERT INTO projects (title, description, tech_stack, live_demo_url, github_url, project_type, featured) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$title, $description, json_encode($tech_stack), $live_url, $github_url, $type, $featured]);
    }
    
    // Get Portfolio Statistics
    public function getStats() {
        $stats = [];
        
        // Projects count
        $stmt = $this->pdo->query("SELECT COUNT(*) as total FROM projects WHERE status = 'completed'");
        $stats['projects'] = $stmt->fetch()['total'];
        
        // Skills count
        $stmt = $this->pdo->query("SELECT COUNT(*) as total FROM skills");
        $stats['skills'] = $stmt->fetch()['total'];
        
        // Experience years (max from skills)
        $stmt = $this->pdo->query("SELECT MAX(years_experience) as max_exp FROM skills");
        $stats['experience'] = $stmt->fetch()['max_exp'];
        
        // Messages count
        $stmt = $this->pdo->query("SELECT COUNT(*) as total FROM contact_messages");
        $stats['messages'] = $stmt->fetch()['total'];
        
        return $stats;
    }
    
    // Log page visit
    public function logVisit($page, $user_agent) {
        $sql = "INSERT INTO portfolio_analytics (page_view, visitor_ip, user_agent) VALUES (?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$page, $_SERVER['REMOTE_ADDR'] ?? 'unknown', $user_agent]);
    }
}

// Initialize Portfolio Data Class
$portfolio = new PortfolioData($pdo);

// Handle Contact Form Submission
if ($_POST && isset($_POST['action']) && $_POST['action'] === 'contact') {
    header('Content-Type: application/json');
    
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'सभी fields भरना जरूरी है!']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Valid email address डालें!']);
        exit;
    }
    
    if ($portfolio->saveContactMessage($name, $email, $subject, $message)) {
        echo json_encode(['success' => true, 'message' => 'आपका message successfully save हो गया है!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Message send करने में error आई है!']);
    }
    exit;
}

// Get Data for Portfolio
$personalInfo = $portfolio->getPersonalInfo();
$skills = $portfolio->getSkills();
$projects = $portfolio->getProjects(true); // Featured projects only
$stats = $portfolio->getStats();

// Log page visit
$portfolio->logVisit('portfolio', $_SERVER['HTTP_USER_AGENT'] ?? 'unknown');

// Default data if database is empty
if (!$personalInfo) {
    $personalInfo = [
        'name' => 'Your Name',
        'title' => 'Full Stack Web Developer',
        'email' => 'your.email@example.com',
        'phone' => '+91 XXXXX XXXXX',
        'location' => 'Your City, India',
        'bio' => 'Passionate web developer with experience in creating modern, responsive websites and applications.'
    ];
}
?>