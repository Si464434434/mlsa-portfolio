<?php
// Database configuration
$servername = "localhost";
$username = "root";        // default XAMPP username
$password = "";            // default XAMPP password (empty for XAMPP)
$dbname = "sih_project";

// Enable CORS for cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode([
        "status" => "error", 
        "message" => "Database connection failed: " . $conn->connect_error
    ]);
    exit();
}

// Set charset to UTF-8
$conn->set_charset("utf8");

// Get request method and route
$method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

// Route handling
switch ($method) {
    case 'GET':
        handleGet($conn, $path_parts);
        break;
    case 'POST':
        handlePost($conn, $path_parts);
        break;
    case 'PUT':
        handlePut($conn, $path_parts);
        break;
    default:
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}

// Handle GET requests
function handleGet($conn, $path_parts) {
    $endpoint = end($path_parts);
    
    switch ($endpoint) {
        case 'issues':
            getAllIssues($conn);
            break;
        case 'feedback':
            getAllFeedback($conn);
            break;
        case 'tourism':
            getAllTourismReports($conn);
            break;
        case 'waste':
            getAllWasteReports($conn);
            break;
        case 'mrt':
            getAllMRTReports($conn);
            break;
        default:
            // Check if it's a specific issue ID
            if (count($path_parts) >= 2 && $path_parts[count($path_parts)-2] === 'issues') {
                $issueId = intval($endpoint);
                getIssueById($conn, $issueId);
            } else {
                http_response_code(404);
                echo json_encode(["status" => "error", "message" => "Endpoint not found"]);
            }
    }
}

// Handle POST requests
function handlePost($conn, $path_parts) {
    $endpoint = end($path_parts);
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid JSON data"]);
        return;
    }
    
    switch ($endpoint) {
        case 'submit-issue':
            submitIssue($conn, $data);
            break;
        case 'submit-feedback':
            submitFeedback($conn, $data);
            break;
        case 'submit-tourism':
            submitTourismReport($conn, $data);
            break;
        case 'submit-waste':
            submitWasteReport($conn, $data);
            break;
        case 'submit-mrt':
            submitMRTReport($conn, $data);
            break;
        default:
            http_response_code(404);
            echo json_encode(["status" => "error", "message" => "Endpoint not found"]);
    }
}

// Handle PUT requests
function handlePut($conn, $path_parts) {
    if (count($path_parts) >= 3 && $path_parts[count($path_parts)-2] === 'status') {
        $issueId = intval($path_parts[count($path_parts)-3]);
        $data = json_decode(file_get_contents("php://input"), true);
        updateIssueStatus($conn, $issueId, $data);
    } else {
        http_response_code(404);
        echo json_encode(["status" => "error", "message" => "Endpoint not found"]);
    }
}

// Submit issue function
function submitIssue($conn, $data) {
    // Validate required fields
    if (empty($data['name']) || empty($data['email']) || empty($data['category']) || empty($data['description'])) {
        http_response_code(400);
        echo json_encode([
            "status" => "error", 
            "message" => "Name, email, category, and description are required!"
        ]);
        return;
    }
    
    // Sanitize input data
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $phone = isset($data['phone']) ? mysqli_real_escape_string($conn, $data['phone']) : null;
    $category = mysqli_real_escape_string($conn, $data['category']);
    $priority = isset($data['priority']) ? mysqli_real_escape_string($conn, $data['priority']) : 'medium';
    $location = isset($data['location']) ? mysqli_real_escape_string($conn, $data['location']) : null;
    $title = isset($data['title']) ? mysqli_real_escape_string($conn, $data['title']) : null;
    $description = mysqli_real_escape_string($conn, $data['description']);
    $image_url = isset($data['imageUrl']) ? mysqli_real_escape_string($conn, $data['imageUrl']) : null;
    
    $sql = "INSERT INTO issues (name, email, phone, category, priority, location, title, description, image_url) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssss", $name, $email, $phone, $category, $priority, $location, $title, $description, $image_url);
    
    if ($stmt->execute()) {
        $issueId = $conn->insert_id;
        echo json_encode([
            "status" => "success", 
            "message" => "Issue reported successfully! We will review and take action soon.",
            "issueId" => $issueId
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error", 
            "message" => "Database error: " . $conn->error
        ]);
    }
    
    $stmt->close();
}

// Submit feedback function
function submitFeedback($conn, $data) {
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        http_response_code(400);
        echo json_encode([
            "status" => "error", 
            "message" => "Name, email, and message are required!"
        ]);
        return;
    }
    
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $message = mysqli_real_escape_string($conn, $data['message']);
    $rating = isset($data['rating']) ? intval($data['rating']) : 5;
    
    $sql = "INSERT INTO feedback (name, email, message, rating) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $name, $email, $message, $rating);
    
    if ($stmt->execute()) {
        echo json_encode([
            "status" => "success", 
            "message" => "Thank you for your feedback!"
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error", 
            "message" => "Database error: " . $conn->error
        ]);
    }
    
    $stmt->close();
}

// Get all issues function
function getAllIssues($conn) {
    $sql = "SELECT * FROM issues ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    if ($result) {
        $issues = [];
        while ($row = $result->fetch_assoc()) {
            $issues[] = $row;
        }
        echo json_encode([
            "status" => "success", 
            "data" => $issues
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error", 
            "message" => "Error fetching issues: " . $conn->error
        ]);
    }
}

// Get issue by ID function
function getIssueById($conn, $issueId) {
    $sql = "SELECT * FROM issues WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $issueId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($row = $result->fetch_assoc()) {
        echo json_encode([
            "status" => "success", 
            "data" => $row
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            "status" => "error", 
            "message" => "Issue not found"
        ]);
    }
    
    $stmt->close();
}

// Update issue status function
function updateIssueStatus($conn, $issueId, $data) {
    if (empty($data['status'])) {
        http_response_code(400);
        echo json_encode([
            "status" => "error", 
            "message" => "Status is required"
        ]);
        return;
    }
    
    $status = mysqli_real_escape_string($conn, $data['status']);
    $sql = "UPDATE issues SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $status, $issueId);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo json_encode([
                "status" => "success", 
                "message" => "Issue status updated successfully"
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                "status" => "error", 
                "message" => "Issue not found"
            ]);
        }
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error", 
            "message" => "Database error: " . $conn->error
        ]);
    }
    
    $stmt->close();
}

// Additional functions for other modules
function submitTourismReport($conn, $data) {
    if (empty($data['title']) || empty($data['location']) || empty($data['description'])) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Title, location, and description are required!"]);
        return;
    }
    
    $title = mysqli_real_escape_string($conn, $data['title']);
    $location = mysqli_real_escape_string($conn, $data['location']);
    $type = isset($data['type']) ? mysqli_real_escape_string($conn, $data['type']) : 'feedback';
    $description = mysqli_real_escape_string($conn, $data['description']);
    $contact = isset($data['contact']) ? mysqli_real_escape_string($conn, $data['contact']) : null;
    
    $sql = "INSERT INTO tourism_reports (title, location, type, description, contact) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $title, $location, $type, $description, $contact);
    
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Tourism report submitted successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
    }
    
    $stmt->close();
}

function getAllFeedback($conn) {
    $sql = "SELECT * FROM feedback ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    if ($result) {
        $feedback = [];
        while ($row = $result->fetch_assoc()) {
            $feedback[] = $row;
        }
        echo json_encode(["status" => "success", "data" => $feedback]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error fetching feedback: " . $conn->error]);
    }
}

function getAllTourismReports($conn) {
    $sql = "SELECT * FROM tourism_reports ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    if ($result) {
        $reports = [];
        while ($row = $result->fetch_assoc()) {
            $reports[] = $row;
        }
        echo json_encode(["status" => "success", "data" => $reports]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error fetching tourism reports: " . $conn->error]);
    }
}

// Close connection
$conn->close();
?>