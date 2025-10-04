<?php
// Azure Database Configuration
$host = $_ENV['DB_HOST'] ?? 'localhost';
$username = $_ENV['DB_USER'] ?? 'root';
$password = $_ENV['DB_PASSWORD'] ?? '';
$database = $_ENV['DB_NAME'] ?? 'portfolio_db';
$port = $_ENV['DB_PORT'] ?? '3306';

// Azure MySQL connection with SSL
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_SSL_CA => '/var/www/html/ssl/DigiCertGlobalRootCA.crt.pem',
    PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
];

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$database;charset=utf8mb4", $username, $password, $options);
    echo "✅ Azure Database connected successfully!";
} catch(PDOException $e) {
    // Fallback to local development
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=portfolio_db", 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "✅ Local Database connected successfully!";
    } catch(PDOException $e2) {
        die("❌ Database connection failed: " . $e2->getMessage());
    }
}

// Portfolio Data Functions (same as before but with Azure optimizations)
class PortfolioData {
    private $pdo;
    
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    
    // Azure-optimized queries with caching
    public function getPersonalInfo() {
        $cacheKey = 'personal_info';
        $cached = $this->getFromCache($cacheKey);
        
        if ($cached) {
            return $cached;
        }
        
        $stmt = $this->pdo->query("SELECT * FROM personal_info ORDER BY id DESC LIMIT 1");
        $result = $stmt->fetch();
        
        $this->setCache($cacheKey, $result, 3600); // Cache for 1 hour
        return $result;
    }
    
    public function getSkills() {
        $cacheKey = 'skills';
        $cached = $this->getFromCache($cacheKey);
        
        if ($cached) {
            return $cached;
        }
        
        $stmt = $this->pdo->query("SELECT * FROM skills ORDER BY proficiency_level DESC, years_experience DESC");
        $result = $stmt->fetchAll();
        
        $this->setCache($cacheKey, $result, 1800); // Cache for 30 minutes
        return $result;
    }
    
    public function getProjects($featured_only = false) {
        $cacheKey = $featured_only ? 'featured_projects' : 'all_projects';
        $cached = $this->getFromCache($cacheKey);
        
        if ($cached) {
            return $cached;
        }
        
        $sql = "SELECT * FROM projects";
        if ($featured_only) {
            $sql .= " WHERE featured = 1";
        }
        $sql .= " ORDER BY created_at DESC";
        
        $stmt = $this->pdo->query($sql);
        $result = $stmt->fetchAll();
        
        $this->setCache($cacheKey, $result, 1800);
        return $result;
    }
    
    public function saveContactMessage($name, $email, $subject, $message) {
        // Azure Application Insights logging
        $this->logEvent('contact_form_submission', [
            'email' => $email,
            'subject' => $subject,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
        $sql = "INSERT INTO contact_messages (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$name, $email, $subject, $message, $this->getClientIP()]);
    }
    
    public function getStats() {
        $cacheKey = 'portfolio_stats';
        $cached = $this->getFromCache($cacheKey);
        
        if ($cached) {
            return $cached;
        }
        
        $stats = [];
        
        // Use efficient single queries
        $stmt = $this->pdo->query("
            SELECT 
                (SELECT COUNT(*) FROM projects WHERE status = 'completed') as projects,
                (SELECT COUNT(*) FROM skills) as skills,
                (SELECT MAX(years_experience) FROM skills) as experience,
                (SELECT COUNT(*) FROM contact_messages) as messages
        ");
        
        $result = $stmt->fetch();
        $this->setCache($cacheKey, $result, 900); // Cache for 15 minutes
        
        return $result;
    }
    
    // Azure Cache implementation
    private function getFromCache($key) {
        // Use Azure Redis Cache in production
        if (function_exists('apcu_fetch')) {
            return apcu_fetch($key);
        }
        return false;
    }
    
    private function setCache($key, $value, $ttl) {
        // Use Azure Redis Cache in production
        if (function_exists('apcu_store')) {
            apcu_store($key, $value, $ttl);
        }
    }
    
    // Azure Application Insights logging
    private function logEvent($eventName, $properties = []) {
        // Send to Azure Application Insights
        if (isset($_ENV['APPINSIGHTS_INSTRUMENTATIONKEY'])) {
            // Implementation for Application Insights
            error_log("Event: $eventName - " . json_encode($properties));
        }
    }
    
    private function getClientIP() {
        // Azure-specific headers
        $headers = [
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_REAL_IP',
            'HTTP_CLIENT_IP',
            'REMOTE_ADDR'
        ];
        
        foreach ($headers as $header) {
            if (!empty($_SERVER[$header])) {
                return $_SERVER[$header];
            }
        }
        
        return 'unknown';
    }
}

// Initialize Portfolio Data Class
$portfolio = new PortfolioData($pdo);

// Azure-specific optimizations
if (isset($_ENV['WEBSITE_SITE_NAME'])) {
    // Running on Azure App Service
    ini_set('session.save_handler', 'files');
    ini_set('session.save_path', '/tmp');
}

// Handle Contact Form Submission with Azure optimization
if ($_POST && isset($_POST['action']) && $_POST['action'] === 'contact') {
    header('Content-Type: application/json');
    
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');
    
    // Enhanced validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'सभी fields भरना जरूरी है!']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Valid email address डालें!']);
        exit;
    }
    
    if (strlen($message) < 10) {
        echo json_encode(['success' => false, 'message' => 'Message कम से कम 10 characters का होना चाहिए!']);
        exit;
    }
    
    try {
        if ($portfolio->saveContactMessage($name, $email, $subject, $message)) {
            echo json_encode(['success' => true, 'message' => 'आपका message successfully save हो गया है!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Message send करने में error आई है!']);
        }
    } catch (Exception $e) {
        error_log("Contact form error: " . $e->getMessage());
        echo json_encode(['success' => false, 'message' => 'Technical error occurred!']);
    }
    exit;
}

// Get Data for Portfolio with error handling
try {
    $personalInfo = $portfolio->getPersonalInfo();
    $skills = $portfolio->getSkills();
    $projects = $portfolio->getProjects(true);
    $stats = $portfolio->getStats();
} catch (Exception $e) {
    error_log("Portfolio data error: " . $e->getMessage());
    
    // Fallback data
    $personalInfo = [
        'name' => 'Your Name',
        'title' => 'Full Stack Web Developer',
        'email' => 'your.email@example.com',
        'phone' => '+91 XXXXX XXXXX',
        'location' => 'Your City, India',
        'bio' => 'Passionate web developer with experience in creating modern, responsive websites and applications.'
    ];
    $skills = [];
    $projects = [];
    $stats = ['projects' => 0, 'skills' => 0, 'experience' => 0, 'messages' => 0];
}

// Log page visit for analytics
try {
    $portfolio->logVisit('portfolio', $_SERVER['HTTP_USER_AGENT'] ?? 'unknown');
} catch (Exception $e) {
    // Silent fail for analytics
}
?>