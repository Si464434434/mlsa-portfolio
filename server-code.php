<?php
// Server-side PHP code for index.php
// Include this at the top of your index.php file

// Start session for user management
session_start();

// Database configuration
$servername = "localhost";
$username = "root";        // XAMPP default
$password = "";            // XAMPP default (empty)
$dbname = "sih_project";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If database connection fails, use default values
    $dbConnected = false;
    error_log("Database connection failed: " . $conn->connect_error);
} else {
    $dbConnected = true;
    $conn->set_charset("utf8");
}

// Initialize variables with default values
$totalIssues = 0;
$resolvedIssues = 0;
$pendingIssues = 0;
$inProgressIssues = 0;
$avgResolutionTime = "N/A";
$citizenSatisfaction = "N/A";
$recentIssues = [];
$emergencyContacts = [];

// If database is connected, fetch real data
if ($dbConnected) {
    try {
        // Get total issues count
        $result = $conn->query("SELECT COUNT(*) as total FROM issues");
        if ($result && $row = $result->fetch_assoc()) {
            $totalIssues = $row['total'];
        }

        // Get resolved issues count
        $result = $conn->query("SELECT COUNT(*) as resolved FROM issues WHERE status = 'resolved'");
        if ($result && $row = $result->fetch_assoc()) {
            $resolvedIssues = $row['resolved'];
        }

        // Get pending issues count
        $result = $conn->query("SELECT COUNT(*) as pending FROM issues WHERE status = 'pending'");
        if ($result && $row = $result->fetch_assoc()) {
            $pendingIssues = $row['pending'];
        }

        // Get in-progress issues count
        $result = $conn->query("SELECT COUNT(*) as inprogress FROM issues WHERE status = 'in-progress'");
        if ($result && $row = $result->fetch_assoc()) {
            $inProgressIssues = $row['inprogress'];
        }

        // Calculate average resolution time
        $result = $conn->query("
            SELECT AVG(DATEDIFF(updated_at, created_at)) as avg_days 
            FROM issues 
            WHERE status = 'resolved' AND updated_at > created_at
        ");
        if ($result && $row = $result->fetch_assoc() && $row['avg_days']) {
            $avgResolutionTime = round($row['avg_days'], 1) . " days";
        }

        // Get recent issues for display
        $result = $conn->query("
            SELECT id, title, category, location, status, created_at, priority 
            FROM issues 
            ORDER BY created_at DESC 
            LIMIT 5
        ");
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $recentIssues[] = $row;
            }
        }

        // Calculate citizen satisfaction (based on feedback ratings)
        $result = $conn->query("SELECT AVG(rating) as avg_rating FROM feedback WHERE rating > 0");
        if ($result && $row = $result->fetch_assoc() && $row['avg_rating']) {
            $citizenSatisfaction = round($row['avg_rating'], 1) . "★";
        }

    } catch (Exception $e) {
        error_log("Database query error: " . $e->getMessage());
        // Use default values if queries fail
        $totalIssues = 1247;
        $resolvedIssues = 1089;
        $pendingIssues = 158;
        $inProgressIssues = 89;
        $avgResolutionTime = "2.8 days";
        $citizenSatisfaction = "4.2★";
    }
} else {
    // Use sample data when database is not connected
    $totalIssues = 1247;
    $resolvedIssues = 1089;
    $pendingIssues = 158;
    $inProgressIssues = 89;
    $avgResolutionTime = "2.8 days";
    $citizenSatisfaction = "4.2★";
    
    // Sample recent issues
    $recentIssues = [
        [
            'id' => 1,
            'title' => 'Road Repair Needed',
            'category' => 'roads',
            'location' => 'MG Road, Ranchi',
            'status' => 'pending',
            'created_at' => date('Y-m-d H:i:s', strtotime('-2 days')),
            'priority' => 'high'
        ],
        [
            'id' => 2,
            'title' => 'Street Light Not Working',
            'category' => 'electricity',
            'location' => 'Kanke Road, Ranchi',
            'status' => 'in-progress',
            'created_at' => date('Y-m-d H:i:s', strtotime('-1 day')),
            'priority' => 'medium'
        ]
    ];
}

// Page configuration
$pageTitle = "SIH 25031 - Civic Issues Reporting System";
$metaDescription = "Digital platform for reporting and tracking civic issues in Jharkhand";
$currentYear = date('Y');
$currentDate = date('d-m-Y');
$currentTime = date('g:i A');

// User session management
$isLoggedIn = isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
$userName = $isLoggedIn ? $_SESSION['user_name'] : '';
$userRole = $isLoggedIn ? $_SESSION['user_role'] : 'guest';

// Get current page for navigation
$currentPage = isset($_GET['page']) ? $_GET['page'] : 'home';

// Emergency contacts data
$emergencyContacts = [
    [
        'name' => 'Police Emergency',
        'number' => '100',
        'icon' => '👮',
        'description' => 'For reporting crimes, emergencies, and law enforcement assistance',
        'category' => 'police'
    ],
    [
        'name' => 'Fire Emergency',
        'number' => '101',
        'icon' => '🚒',
        'description' => 'For fire emergencies and rescue operations',
        'category' => 'fire'
    ],
    [
        'name' => 'Ambulance',
        'number' => '108',
        'icon' => '🚑',
        'description' => 'Medical emergency and ambulance services',
        'category' => 'medical'
    ],
    [
        'name' => 'Women Helpline',
        'number' => '1091',
        'icon' => '🚺',
        'description' => '24x7 emergency assistance for women in distress',
        'category' => 'helpline'
    ],
    [
        'name' => 'Child Helpline',
        'number' => '1098',
        'icon' => '👶',
        'description' => 'For children in need of aid and assistance',
        'category' => 'helpline'
    ],
    [
        'name' => 'Disaster Management',
        'number' => '1070',
        'icon' => '🌪️',
        'description' => 'For natural disasters and emergency situations',
        'category' => 'disaster'
    ]
];

// Government facilities data
$govFacilities = [
    [
        'name' => 'District Collectorate',
        'location' => 'Kutchery Road, Ranchi',
        'services' => ['Revenue Services', 'Land Records', 'Certificates'],
        'timings' => '10:00 AM - 5:00 PM',
        'contact' => '0651-2490123'
    ],
    [
        'name' => 'RTO Office',
        'location' => 'Hinoo, Ranchi',
        'services' => ['Driving License', 'Vehicle Registration', 'NOC'],
        'timings' => '10:00 AM - 4:00 PM',
        'contact' => '0651-2361234'
    ],
    [
        'name' => 'Municipal Corporation',
        'location' => 'Municipal Road, Ranchi',
        'services' => ['Birth Certificate', 'Death Certificate', 'Trade License'],
        'timings' => '10:00 AM - 6:00 PM',
        'contact' => '0651-2561111'
    ]
];

// Function to get category icon
function getCategoryIcon($category) {
    $icons = [
        'roads' => '🚧',
        'water' => '🚰',
        'electricity' => '💡',
        'health' => '🏥',
        'education' => '🎓',
        'farming' => '🧑‍🌾',
        'ration' => '🍚',
        'environment' => '🌳',
        'safety' => '🚨',
        'transport' => '🚌',
        'potholes' => '🕳️',
        'streetlights' => '💡',
        'garbage' => '🗑️'
    ];
    return isset($icons[$category]) ? $icons[$category] : '📝';
}

// Function to get priority color
function getPriorityColor($priority) {
    $colors = [
        'low' => '#28a745',
        'medium' => '#ffc107',
        'high' => '#fd7e14',
        'urgent' => '#dc3545'
    ];
    return isset($colors[$priority]) ? $colors[$priority] : '#6c757d';
}

// Function to get status color
function getStatusColor($status) {
    $colors = [
        'pending' => '#ffc107',
        'in-progress' => '#17a2b8',
        'resolved' => '#28a745',
        'closed' => '#6c757d'
    ];
    return isset($colors[$status]) ? $colors[$status] : '#6c757d';
}

// Function to format time ago
function timeAgo($datetime) {
    $time = time() - strtotime($datetime);
    
    if ($time < 60) return 'just now';
    if ($time < 3600) return floor($time/60) . ' minutes ago';
    if ($time < 86400) return floor($time/3600) . ' hours ago';
    if ($time < 2592000) return floor($time/86400) . ' days ago';
    if ($time < 31536000) return floor($time/2592000) . ' months ago';
    return floor($time/31536000) . ' years ago';
}

// Handle AJAX requests
if (isset($_POST['ajax']) && $_POST['ajax'] == 'true') {
    header('Content-Type: application/json');
    
    switch ($_POST['action']) {
        case 'get_stats':
            echo json_encode([
                'status' => 'success',
                'data' => [
                    'totalIssues' => $totalIssues,
                    'resolvedIssues' => $resolvedIssues,
                    'pendingIssues' => $pendingIssues,
                    'inProgressIssues' => $inProgressIssues,
                    'avgResolutionTime' => $avgResolutionTime,
                    'citizenSatisfaction' => $citizenSatisfaction
                ]
            ]);
            exit();
            
        case 'get_recent_issues':
            echo json_encode([
                'status' => 'success',
                'data' => $recentIssues
            ]);
            exit();
            
        default:
            echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
            exit();
    }
}

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_POST['ajax'])) {
    // Redirect POST requests to api.php for processing
    $postData = json_encode($_POST);
    header('Location: api.php/submit-issue');
    exit();
}

// Close database connection at the end of script
if ($dbConnected) {
    // Don't close here, we might need it later in the script
    // $conn->close();
}

// Helper function to safely output data
function safe_echo($data) {
    return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
}

// Generate CSRF token for forms
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrfToken = $_SESSION['csrf_token'];

// Add debugging information (remove in production)
$debugInfo = [
    'db_connected' => $dbConnected,
    'total_issues' => $totalIssues,
    'resolved_issues' => $resolvedIssues,
    'session_active' => session_status() === PHP_SESSION_ACTIVE,
    'current_time' => $currentTime
];

?>

<!-- Add this JavaScript to your index.php for real-time updates -->
<script>
// Pass PHP data to JavaScript
window.serverData = {
    totalIssues: <?php echo $totalIssues; ?>,
    resolvedIssues: <?php echo $resolvedIssues; ?>,
    pendingIssues: <?php echo $pendingIssues; ?>,
    inProgressIssues: <?php echo $inProgressIssues; ?>,
    avgResolutionTime: '<?php echo $avgResolutionTime; ?>',
    citizenSatisfaction: '<?php echo $citizenSatisfaction; ?>',
    currentPage: '<?php echo $currentPage; ?>',
    isLoggedIn: <?php echo $isLoggedIn ? 'true' : 'false'; ?>,
    userName: '<?php echo safe_echo($userName); ?>',
    userRole: '<?php echo safe_echo($userRole); ?>',
    csrfToken: '<?php echo $csrfToken; ?>',
    dbConnected: <?php echo $dbConnected ? 'true' : 'false'; ?>,
    recentIssues: <?php echo json_encode($recentIssues); ?>,
    emergencyContacts: <?php echo json_encode($emergencyContacts); ?>,
    govFacilities: <?php echo json_encode($govFacilities); ?>
};

// Function to update statistics in real-time
function updateStats() {
    if (window.serverData.dbConnected) {
        fetch('index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'ajax=true&action=get_stats'
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Update DOM elements with new data
                const totalElement = document.getElementById('totalIssuesValue');
                const resolvedElement = document.getElementById('resolvedIssuesValue');
                const pendingElement = document.getElementById('pendingIssuesValue');
                const inProgressElement = document.getElementById('inProgressIssuesValue');
                
                if (totalElement) totalElement.textContent = data.data.totalIssues;
                if (resolvedElement) resolvedElement.textContent = data.data.resolvedIssues;
                if (pendingElement) pendingElement.textContent = data.data.pendingIssues;
                if (inProgressElement) inProgressElement.textContent = data.data.inProgressIssues;
                
                // Update stats overview
                const statNumbers = document.querySelectorAll('.stat-number');
                if (statNumbers.length >= 4) {
                    statNumbers[0].textContent = data.data.totalIssues.toLocaleString();
                    statNumbers[1].textContent = data.data.resolvedIssues.toLocaleString();
                    statNumbers[2].textContent = data.data.avgResolutionTime;
                    statNumbers[3].textContent = data.data.citizenSatisfaction;
                }
            }
        })
        .catch(error => console.error('Error updating stats:', error));
    }
}

// Update stats every 30 seconds
setInterval(updateStats, 30000);

// Show database connection status
document.addEventListener('DOMContentLoaded', function() {
    if (!window.serverData.dbConnected) {
        console.warn('Database not connected. Using sample data.');
        
        // Show notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: #ff9800;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            z-index: 10000;
            font-size: 14px;
            max-width: 300px;
        `;
        notification.innerHTML = '⚠️ Database offline. Using sample data. Install XAMPP and import database.sql';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 8000);
    } else {
        console.log('✅ Database connected successfully');
    }
});
</script>