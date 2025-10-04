<?php
// Simple PHP test without database connection
echo "<h1>PHP Test - Working!</h1>";
echo "<p>Current Time: " . date('Y-m-d H:i:s') . "</p>";

// Test your project files
if(file_exists('index.php')) {
    echo "<p>✅ index.php found</p>";
} else {
    echo "<p>❌ index.php not found</p>";
}

if(file_exists('database.sql')) {
    echo "<p>✅ database.sql found</p>";
} else {
    echo "<p>❌ database.sql not found</p>";
}

if(file_exists('api.php')) {
    echo "<p>✅ api.php found</p>";
} else {
    echo "<p>❌ api.php not found</p>";
}

echo "<h2>Next Steps:</h2>";
echo "<ol>";
echo "<li>Copy your project to C:\\xampp\\htdocs\\hello\\</li>";
echo "<li>Start Apache in XAMPP</li>";
echo "<li>Access: http://localhost/hello/test.php</li>";
echo "</ol>";

// Show phpinfo for debugging
echo "<h2>PHP Info:</h2>";
phpinfo();
?>