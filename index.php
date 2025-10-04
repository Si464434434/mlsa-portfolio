<?php
// Include server-side code
include_once 'server-code.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title><?php echo $pageTitle; ?></title>
  <meta name="description" content="<?php echo $metaDescription; ?>">
  <link rel="stylesheet" href="style.css"/>
  <link rel="stylesheet" href="server-styles.css"/>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" defer></script>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <img id="siteLogo" src="WhatsApp Image 2025-09-12 at 12.24.31 PM.jpeg" alt="Civic Logo" />
        <h1 class="site-title">Civic</h1>
        <div class="logo-media">
          <span class="tagline">SIH 25031</span>
        </div>
      </div>
      <div class="header-actions">
        <button id="emergencyBtn" class="btn btn--danger btn--sm">🚨 Emergency</button>
        <button id="themeToggle" class="btn btn--outline btn--sm">🌙</button>
        <button id="languageToggle" class="btn btn--outline btn--sm">🌐 HI</button>
        <select id="languageSelect" class="btn btn--outline btn--sm" aria-label="Select language">
          <option value="en">English</option>
          <option value="en">HR</option>
          <option value="en">Spane</option>
          <option value="hi">हिन्दी</option>
        </select>
        <button id="backToHome" class="btn btn--secondary btn--sm hidden">← Home</button>
        <?php if ($isLoggedIn): ?>
          <span class="user-info">Welcome, <?php echo htmlspecialchars($userName); ?>!</span>
          <a href="logout.php" class="btn btn--outline btn--sm">Logout</a>
        <?php else: ?>
          <a href="login.php" class="btn btn--outline btn--sm">Login</a>
        <?php endif; ?>
      </div>
    </div>
    <!-- Navigation Bar -->
    <nav class="main-nav">
      <div class="container">
        <ul class="nav-links">
          <li><a href="?page=home" class="nav-link <?php echo $currentPage === 'home' ? 'active' : ''; ?>" id="nav-home">Home</a></li>
          <li><a href="?page=services" class="nav-link <?php echo $currentPage === 'services' ? 'active' : ''; ?>" id="nav-services">Services</a></li>
          <li><a href="?page=about" class="nav-link <?php echo $currentPage === 'about' ? 'active' : ''; ?>" id="nav-about">About Us</a></li>
          <li><a href="?page=contact" class="nav-link <?php echo $currentPage === 'contact' ? 'active' : ''; ?>" id="nav-contact">Contact</a></li>
          <li class="dropdown">
            <a href="#" class="nav-link dropdown-toggle">Quick Access</a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item" id="nav-report-issue">Report Issue</a>
              <a href="#" class="dropdown-item" id="nav-track-issue">Track Issue</a>
              <a href="#" class="dropdown-item" id="nav-emergency">Emergency Contact</a>
            </div>
          </li>
        </ul>
        <div class="search-container">
          <input type="text" placeholder="Search..." class="search-input">
          <button class="btn btn--primary btn--sm search-btn">🔍</button>
        </div>
      </div>
    </nav>
  </header>

  <main class="main">
    <!-- Dynamic Content based on current page -->
    <?php if ($currentPage === 'home' || !isset($_GET['page'])): ?>
    
    <!-- Jharkhand Promotion Slideshow - COMPLETE REWRITE -->
    <section id="jharkhandPromotion" class="slideshow-container">
      <h2 class="slideshow-title" data-i18n="jharkhand_heading">Progress & Promise — Jharkhand: Improvement & Respect</h2>

      <!-- New simple slideshow implementation (7 slides) -->
      <div class="simple-slideshow">
        <div class="slide-wrapper">
          <div class="slide-item">
            <img src="jharkhand-removebg-preview.png" alt="Woman observing a scenic landscape in Jharkhand">
            <div class="slide-caption">Incredible Tourism Destinations</div>
          </div>
          <div class="slide-item">
            <img src="3.webp" alt="Jharkhand Infrastructure">
            <div class="slide-caption">Modern Infrastructure Development</div>
          </div>
          <div class="slide-item">
            <img src="5.webp" alt="Jharkhand Culture">
            <div class="slide-caption">Rich Cultural Heritage</div>
          </div>
          <div class="slide-item">
            <img src="6.jpg" alt="Jharkhand Industry">
            <div class="slide-caption">Industrial Growth & Innovation</div>
          </div>
          <div class="slide-item">
            <img src="7.jpg" alt="Jharkhand Agriculture">
            <div class="slide-caption">Agricultural Advancements</div>
          </div>
          <div class="slide-item">
            <img src="darkest-black-colors.png" alt="Jharkhand Education">
            <div class="slide-caption">Educational Excellence</div>
          </div>
          <div class="slide-item">
            <img src="images.jpg" alt="Jharkhand Technology">
            <div class="slide-caption">Technological Innovations</div>
          </div>
        </div>

        <!-- Navigation controls -->
        <button class="slide-prev" id="slidePrev">&#10094;</button>
        <button class="slide-next" id="slideNext">&#10095;</button>

        <!-- Slide indicators -->
        <div class="slide-indicators" id="slideIndicators"></div>
      </div>
    </section>

    <?php endif; ?>

    <!-- Dynamic Statistics from server-code.php -->
    <?php
    // Statistics are now loaded from server-code.php
    // Real-time data from database or sample data if DB not connected
    ?>

    <!-- Waste Management Interface -->
    <section id="wasteInterface" class="interface hidden">
      <div class="container">
        <h2>Waste Management</h2>
        <p>Report illegal dumping, missed collections, or track waste collection vehicles.</p>

        <div class="waste-grid">
          <div class="waste-form">
            <form id="wasteForm" class="waste-report-form" data-api="waste">
              <label for="wasteTitle">Title</label>
              <input type="text" id="wasteTitle" name="title" placeholder="e.g., Garbage dumped near lake" required>

              <label for="wasteLocation">Location</label>
              <input type="text" id="wasteLocation" name="location" placeholder="Place name or coordinates" required>

              <label for="wasteType">Type</label>
              <select id="wasteType" name="type">
                <option value="illegal_dumping">Illegal Dumping</option>
                <option value="missed_collection">Missed Collection</option>
                <option value="overflowing_bin">Overflowing Bin</option>
                <option value="hazardous_waste">Hazardous Waste</option>
              </select>

              <label for="wasteDesc">Description</label>
              <textarea id="wasteDesc" name="description" rows="4" placeholder="Describe the issue" required></textarea>

              <label for="wasteVehicle">Vehicle (optional)</label>
              <input type="text" id="wasteVehicle" name="vehicle_number" placeholder="Vehicle number if seen (e.g., MH12AB1234)">

              <button class="btn btn--primary" type="submit">Report Waste</button>
            </form>
          </div>

          <div class="waste-feed">
            <h3>Recent Waste Reports</h3>
            <div id="wasteFeedList">No reports yet.</div>

            <h3>Tracked Vehicles</h3>
            <div id="wasteVehiclesList">No vehicles tracked.</div>
          </div>
        </div>

        <button id="wasteBack" class="btn btn--secondary">Back</button>
      </div>
    </section>

    <!-- Utility Monitor Interface -->
    <section id="utilityInterface" class="interface hidden">
      <div class="container">
        <h2>Utility Monitor</h2>
        <p>Track meter readings and report infrastructure maintenance issues.</p>

        <div class="utility-grid">
          <div class="utility-forms">
            <h3>Submit Meter Reading</h3>
            <form id="meterForm" data-api="meter">
              <label for="meterId">Meter ID</label>
              <input type="text" id="meterId" name="meter_id" placeholder="e.g., MTR-001" required>

              <label for="meterValue">Reading (units)</label>
              <input type="number" id="meterValue" name="reading_value" placeholder="e.g., 1234" required>

              <label for="meterLocation">Location</label>
              <input type="text" id="meterLocation" name="location" placeholder="Area or ward" required>

              <button class="btn btn--primary" type="submit">Submit Reading</button>
            </form>

            <h3>Report Maintenance Issue</h3>
            <form id="utilityIssueForm" data-api="utility">
              <label for="utilityTitle">Title</label>
              <input type="text" id="utilityTitle" name="title" placeholder="e.g., Transformer sparking" required>

              <label for="utilityIssueLocation">Location</label>
              <input type="text" id="utilityIssueLocation" name="location" placeholder="Place or coordinates" required>

              <label for="utilitySeverity">Severity</label>
              <select id="utilitySeverity" name="severity">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              <label for="utilityDesc">Description</label>
              <textarea id="utilityDesc" name="description" rows="3" placeholder="Describe the maintenance issue" required></textarea>

              <button class="btn btn--primary" type="submit">Report Issue</button>
            </form>
          </div>

          <div class="utility-lists">
            <h3>Recent Meter Readings</h3>
            <div id="meterReadingsList">No readings yet.</div>

            <h3>Maintenance Reports</h3>
            <div id="utilityReportsList">No reports yet.</div>
          </div>
        </div>

        <button id="utilityBack" class="btn btn--secondary">Back</button>
      </div>
    </section>

    <!-- Government Documents Interface -->
    <section id="govDocsInterface" class="interface hidden">
      <div class="container">
        <h2>Government Documents</h2>
        <p>Quick links and instructions for Driving Licence, PAN/Aadhaar, Bank KYC, and Gas Agency services.</p>

        <div class="gov-cards">
          <div class="gov-card">
            <h3>Driving Licence / RTO</h3>
            <p>Apply for learner's licence, driving licence renewal and vehicle registration at the RTO.</p>
            <a href="https://parivahan.gov.in/" target="_blank" class="btn">Visit Parivahan</a>
          </div>
          <div class="gov-card">
            <h3>PAN / Aadhaar</h3>
            <p>Find links for PAN card services and Aadhaar updates.</p>
            <a href="https://www.tin-nsdl.com/" target="_blank" class="btn">PAN Services</a>
            <a href="https://uidai.gov.in/" target="_blank" class="btn">Aadhaar</a>
          </div>
          <div class="gov-card">
            <h3>Bank Documents (KYC)</h3>
            <p>Guidance for bank KYC, updates, and dispute resolution.</p>
            <a href="#" class="btn">Bank KYC Help</a>
          </div>
          <div class="gov-card">
            <h3>Gas Agency Registrations</h3>
            <p>Find your local gas agency contact details for bookings and complaints.</p>
            <a href="#" class="btn">Find Gas Agency</a>
          </div>
        </div>

        <button id="govDocsBack" class="btn btn--secondary">Back</button>
      </div>
    </section>

    <!-- MRT Operations Interface -->
    <section id="mrtInterface" class="interface hidden">
      <div class="container">
        <h2>MRT Operations</h2>
        <p>Monitor transit operations and report maintenance issues for trains and tracks.</p>

        <div class="mrt-grid">
          <div class="mrt-dashboard">
            <h3>System Status</h3>
            <div id="mrtStatus">All systems nominal</div>
            <h4>Active Trains</h4>
            <div id="mrtTrainsList">No active trains.</div>
          </div>

          <div class="mrt-forms">
            <h3>Report Maintenance Issue</h3>
            <form id="mrtIssueForm" data-api="mrt">
              <label for="mrtLine">Line/Route</label>
              <input type="text" id="mrtLine" name="line_route" placeholder="e.g., Line 1" required>

              <label for="mrtVehicle">Train/Vehicle ID (if known)</label>
              <input type="text" id="mrtVehicle" name="vehicle_id" placeholder="e.g., Train-07">

              <label for="mrtLocation">Location</label>
              <input type="text" id="mrtLocation" name="location" placeholder="Station or coordinates" required>

              <label for="mrtSeverity">Severity</label>
              <select id="mrtSeverity" name="severity">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              <label for="mrtDesc">Description</label>
              <textarea id="mrtDesc" name="description" rows="3" placeholder="Describe the maintenance issue" required></textarea>

              <button class="btn btn--primary" type="submit">Report Issue</button>
            </form>
          </div>
        </div>

        <button id="mrtBack" class="btn btn--secondary">Back</button>
      </div>
    </section>

    <!-- Gallery Section with Automatic Sliding -->
    <section class="slider-section" id="gallery">
      <h2>Viewport</h2>
      <div class="slider">
        <div class="slide-track">
          <div class="slide"><img src="6.jpg" alt="Haircut Style" /></div>
          <div class="slide"><img src="2.jpg" alt="Beard Trim" /></div>
          <div class="slide"><img src="3.webp" alt="Studio Interior" /></div>
          <div class="slide"><img src="5.webp" alt="Shave Finish" /></div>
          <div class="slide"><img src="6.jpg" alt="Haircut Style" /></div>
          <div class="slide"><img src="7.jpg" alt="Beard Trim" /></div>
          <!-- Duplicate for infinite scroll -->
          <div class="slide"><img src="6.jpg" alt="Haircut Style" /></div>
          <div class="slide"><img src="7.jpg" alt="Beard Trim" /></div>
          <div class="slide"><img src="3.webp" alt="Studio Interior" /></div>
          <div class="slide"><img src="5.webp" alt="Shave Finish" /></div>
          <div class="slide"><img src="1.htm" alt="Haircut Style" /></div>
          <div class="slide"><img src="2.jpg" alt="Beard Trim" /></div>
        </div>
      </div>
    </section>

    <!-- Landing Page -->
    <section id="landingPage" class="landing-page">
      <div class="container hero">
        <h2 data-i18n="select_role">Select Your Role</h2>
        <p>Help improve your community by reporting civic issues and tracking their resolution.</p>
        <div class="role-selection">
          <div class="role-card" id="citizenRole">
            <div class="role-icon">👥</div>
            <h3 data-i18n="citizen">I'm a Citizen</h3>
            <p>Report issues, track progress, and engage with your community</p>
            <button class="btn btn--primary btn--full-width">Get Started</button>
          </div>
          <div class="role-card" id="adminRole">
            <div class="role-icon">🏛️</div>
            <h3 data-i18n="admin">I'm an Administrator</h3>
            <p>Manage issues, route to departments, and monitor performance</p>
            <button class="btn btn--primary btn--full-width">Access Dashboard</button>
          </div>
          <div class="role-card" id="tourismRole">
            <div class="role-icon">🏞️</div>
            <h3>Tourism Reporter</h3>
            <p>Report tourism-related issues and track visitor experiences</p>
            <button class="btn btn--primary btn--full-width">Tourism Portal</button>
          </div>
          <div class="role-card" id="wasteManagementRole">
            <div class="role-icon">🚛</div>
            <h3>Waste Management</h3>
            <p>Track garbage collection vehicles and manage waste disposal</p>
            <button class="btn btn--primary btn--full-width">Track Fleet</button>
          </div>
          <div class="role-card" id="utilityRole">
            <div class="role-icon">⚡</div>
            <h3>Utility Monitor</h3>
            <p>Track meter units and utility infrastructure maintenance</p>
            <button class="btn btn--primary btn--full-width">Monitor Utilities</button>
          </div>
          <div class="role-card" id="govDocsRole">
            <div class="role-icon">📑</div>
            <h3>Government Documents</h3>
            <p>Driving Licence, RTO, PAN/Aadhaar, Bank Documents, Gas Agency</p>
            <button class="btn btn--primary btn--full-width" id="openGovDocs">Open Documents</button>
          </div>
          <div class="role-card" id="transportRole">
            <div class="role-icon">🚊</div>
            <h3>MRT Operations</h3>
            <p>Monitor transit operations and report maintenance issues</p>
            <button class="btn btn--primary btn--full-width">Transit Dashboard</button>
          </div>
          <div class="role-card" id="advertisingRole">
            <div class="role-icon">📊</div>
            <h3>LED Billboard Manager</h3>
            <p>Monitor and maintain digital advertising infrastructure</p>
            <button class="btn btn--primary btn--full-width">Billboard Portal</button>
          </div>
        </div>
      </div>

      <div class="container stats-overview">
        <div class="stat-item">
          <span class="stat-number"><?php echo number_format($totalIssues); ?></span>
          <span class="stat-label">Issues Reported</span>
          <?php if (!$dbConnected): ?>
            <small style="color: #666;">(Sample Data)</small>
          <?php endif; ?>
        </div>
        <div class="stat-item">
          <span class="stat-number"><?php echo number_format($resolvedIssues); ?></span>
          <span class="stat-label">Issues Resolved</span>
        </div>
        <div class="stat-item">
          <span class="stat-number"><?php echo $avgResolutionTime; ?></span>
          <span class="stat-label">Avg Resolution Time</span>
        </div>
        <div class="stat-item">
          <span class="stat-number"><?php echo $citizenSatisfaction; ?></span>
          <span class="stat-label">Citizen Satisfaction</span>
        </div>
      </div>

      <!-- Recent Issues Section -->
      <?php if (!empty($recentIssues)): ?>
      <div class="container recent-issues">
        <h3>Recent Issues</h3>
        <div class="issues-grid">
          <?php foreach ($recentIssues as $issue): ?>
          <div class="issue-card">
            <div class="issue-header">
              <span class="issue-icon"><?php echo getCategoryIcon($issue['category']); ?></span>
              <h4><?php echo safe_echo($issue['title'] ?: ucfirst($issue['category']) . ' Issue'); ?></h4>
              <span class="issue-status" style="background-color: <?php echo getStatusColor($issue['status']); ?>">
                <?php echo ucfirst($issue['status']); ?>
              </span>
            </div>
            <div class="issue-content">
              <p class="issue-location">📍 <?php echo safe_echo($issue['location']); ?></p>
              <p class="issue-priority" style="color: <?php echo getPriorityColor($issue['priority']); ?>">
                Priority: <?php echo ucfirst($issue['priority']); ?>
              </p>
              <p class="issue-time"><?php echo timeAgo($issue['created_at']); ?></p>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endif; ?>
    </section>

    <!-- Citizen Interface -->
    <section id="citizenInterface" class="interface hidden">
      <div class="container">
        <h2>Citizen Dashboard</h2>
        <div class="tab-navigation">
          <button class="tab-btn active" data-tab="report" data-i18n="report_issue">Report</button>
          <button class="tab-btn" data-tab="track" data-i18n="my_reports">My Reports</button>
          <button class="tab-btn" data-tab="map" data-i18n="map">Community Map</button>
          <button class="tab-btn" data-tab="engage" data-i18n="community">Community</button>
          <button class="tab-btn" data-tab="facilities" data-i18n="government_facilities">Gov Facilities</button>
        </div>
        <div id="reportTab" class="tab-content active">
          <form id="issueReportForm" class="issue-report-form" data-api="issue">
            <input type="text" id="issueTitle" name="title" placeholder="Issue Title" required/>
            <select id="issueCategory" name="category" required>
              <option value="roads">🚧 Roads & Mining</option>
              <option value="water">🚰 Water & Sanitation</option>
              <option value="electricity">💡 Electricity & Streetlights</option>
              <option value="health">🏥 Health & Ambulance</option>
              <option value="education">🎓 Education (Schools)</option>
              <option value="farming">🧑‍🌾 Farmer Support</option>
              <option value="ration">🍚 PDS / Ration Issues</option>
              <option value="environment">🌳 Environment & Forest</option>
              <option value="safety">🚨 Women & Child Safety</option>
              <option value="transport">🚌 Transport</option>
              <option value="potholes">Potholes</option>
              <option value="streetlights">Streetlights</option>
              <option value="garbage">Garbage</option>
            </select>
            <textarea id="issueDescription" name="description" placeholder="Describe the issue..." required></textarea>
            <input type="text" id="issueLocation" name="location" placeholder="Location" required/>
            <button type="button" id="useGPSLocation" class="btn btn--outline">📍 Use My Location</button>
            <select id="issuePriority" name="priority" required>
              <option value="low">Low</option>
              <option value="medium" selected>Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
            <input type="file" id="issuePhoto" name="photo" accept="image/*"/>
            <input type="text" id="userName" name="name" placeholder="Your Name" required/>
            <input type="email" id="userEmail" name="email" placeholder="Your Email" required/>
            <input type="tel" id="userPhone" name="phone" placeholder="Your Phone (optional)"/>
            <button type="submit" class="btn btn--primary" data-i18n="submit">Submit Report</button>
          </form>
        </div>
        <div id="trackTab" class="tab-content"></div>
        <div id="mapTab" class="tab-content"><div id="communityMap" class="map-container"></div></div>
        <div id="engageTab" class="tab-content"><div id="communityIssues"></div></div>
        <div id="facilitiesTab" class="tab-content">
          <div id="facilitiesContainer" class="facilities-container">
            <!-- Government facilities will be rendered here -->
          </div>
        </div>
      </div>
    </section>

    <!-- Admin Interface -->
    <section id="adminInterface" class="interface hidden">
      <div class="container">
        <h2>Admin Dashboard</h2>
        <div class="tab-navigation">
          <button class="tab-btn active" data-tab="overview">Overview</button>
          <button class="tab-btn" data-tab="manage">Manage Issues</button>
          <button class="tab-btn" data-tab="departments">Departments</button>
          <button class="tab-btn" data-tab="analytics">Analytics</button>
          <button class="tab-btn" data-tab="admin-map">Map View</button>
        </div>
        <div id="overviewTab" class="tab-content active">
          <h3>Dashboard Overview</h3>
          <div class="dashboard-summary">
            <div class="summary-cards">
              <div class="summary-card">
                <div class="summary-icon">📊</div>
                <div class="summary-data">
                  <span class="summary-value" id="totalIssuesValue"><?php echo $totalIssues; ?></span>
                  <span class="summary-label">Total Issues</span>
                </div>
              </div>
              <div class="summary-card">
                <div class="summary-icon">⏳</div>
                <div class="summary-data">
                  <span class="summary-value" id="pendingIssuesValue"><?php echo $totalIssues - $resolvedIssues; ?></span>
                  <span class="summary-label">Pending Issues</span>
                </div>
              </div>
              <div class="summary-card">
                <div class="summary-icon">🔄</div>
                <div class="summary-data">
                  <span class="summary-value" id="inProgressIssuesValue">89</span>
                  <span class="summary-label">In Progress</span>
                </div>
              </div>
              <div class="summary-card">
                <div class="summary-icon">✅</div>
                <div class="summary-data">
                  <span class="summary-value" id="resolvedIssuesValue"><?php echo $resolvedIssues; ?></span>
                  <span class="summary-label">Resolved Issues</span>
                </div>
              </div>
            </div>
          </div>
          
          <div id="issuesChart"></div>
        </div>
        <div id="manageTab" class="tab-content"><div id="issuesTable"></div></div>
        <div id="departmentsTab" class="tab-content"><div id="departmentsList"></div></div>
        <div id="analyticsTab" class="tab-content"><canvas id="departmentPerformanceChart"></canvas></div>
        <div id="admin-mapTab" class="tab-content"><div id="adminMap" class="map-container"></div></div>
      </div>
    </section>

    <!-- Tourism Interface -->
    <section id="tourismInterface" class="interface hidden">
      <div class="container">
        <h2>Tourism Reporter</h2>
        <p>Report issues at tourist sites or leave feedback about your visit.</p>

        <div class="tourism-panel">
          <form id="tourismForm" class="tourism-form" data-api="tourism">
            <label for="tourTitle">Title</label>
            <input type="text" id="tourTitle" name="title" placeholder="Short title (e.g., Broken bench at waterfall)" required>

            <label for="tourLocation">Location</label>
            <input type="text" id="tourLocation" name="location" placeholder="Place name or coordinates" required>

            <label for="tourType">Type</label>
            <select id="tourType" name="type">
              <option value="safety">Safety Issue</option>
              <option value="cleanliness">Cleanliness</option>
              <option value="facility">Facility/Infrastructure</option>
              <option value="feedback">General Feedback</option>
            </select>

            <label for="tourDesc">Description</label>
            <textarea id="tourDesc" name="description" rows="4" placeholder="Describe the issue or your feedback" required></textarea>

            <label for="tourContact">Contact (optional)</label>
            <input type="text" id="tourContact" name="contact" placeholder="Phone or email (optional)">

            <button class="btn btn--primary" type="submit">Submit Report</button>
          </form>

          <div class="tourism-feed">
            <h3>Recent Tourism Reports & Feedback</h3>
            <div id="tourismFeedList">No reports yet.</div>
          </div>
        </div>

        <button id="tourismBack" class="btn btn--secondary">Back</button>
      </div>
    </section>
  </main>

  <!-- Notifications -->
  <div id="notificationContainer" class="notification-container"></div>
  
  <!-- Real-time Updates System -->
  <div id="realTimeUpdatesContainer" class="real-time-updates-container">
    <div class="real-time-header">
      <h4>Live Updates</h4>
      <button id="closeRealTimeUpdates" class="btn btn--sm">×</button>
    </div>
    <div id="realTimeUpdatesList" class="real-time-updates-list">
      <!-- Real-time updates will be inserted here dynamically -->
    </div>
    <div class="real-time-footer">
      <span id="lastUpdatedTime">Last updated: <?php echo date('g:i A'); ?></span>
    </div>
  </div>
  
  <!-- Jharkhand Government Contact Information and Social Media Links -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact Jharkhand Government</h3>
          <ul class="contact-list">
            <li><i class="icon">📧</i> Email: <a href="mailto:jharkhandcm@gov.in">jharkhandcm@gov.in</a></li>
            <li><i class="icon">📞</i> Helpline: 1800-345-6789</li>
            <li><i class="icon">🏢</i> Secretariat: Project Building, Dhurwa, Ranchi - 834004</li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Department Contacts</h3>
          <ul class="contact-list">
            <li><i class="icon">🚧</i> Roads & Mining: <a href="mailto:roads.jharkhand@gov.in">roads.jharkhand@gov.in</a></li>
            <li><i class="icon">🚰</i> Water & Sanitation: <a href="mailto:water.jharkhand@gov.in">water.jharkhand@gov.in</a></li>
            <li><i class="icon">💡</i> Electricity: <a href="mailto:electricity.jharkhand@gov.in">electricity.jharkhand@gov.in</a></li>
            <li><i class="icon">🏥</i> Health: <a href="mailto:health.jharkhand@gov.in">health.jharkhand@gov.in</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Social Media</h3>
          <div class="social-links">
            <a href="https://twitter.com/JharkhandCMO" class="social-link"><i class="social-icon">🐦</i> Twitter</a>
            <a href="https://www.facebook.com/JharkhandGovernment" class="social-link"><i class="social-icon">👍</i> Facebook</a>
            <a href="https://www.instagram.com/jharkhandgovernment" class="social-link"><i class="social-icon">📸</i> Instagram</a>
            <a href="https://www.linkedin.com/company/government-of-jharkhand" class="social-link"><i class="social-icon">💼</i> LinkedIn</a>
            <a href="https://www.youtube.com/channel/jharkhandgov" class="social-link"><i class="social-icon">▶️</i> YouTube</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="quick-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
          <a href="#">RTI</a>
        </div>
        <p class="copyright">© <?php echo $currentYear; ?> Government of Jharkhand. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  <!-- AI Chatbot Widget -->
  <div id="chatbotWidget" class="chatbot-widget">
    <div class="chatbot-button" id="chatbotToggle">
      <div class="chatbot-icon">🤖</div>
    </div>
    <div class="chatbot-container hidden" id="chatbotContainer">
      <div class="chatbot-header">
        <h3>CivicAI Assistant</h3>
        <button id="closeChatbot" class="btn btn--sm close-btn">×</button>
      </div>
      <div class="chatbot-messages" id="chatbotMessages">
        <div class="message bot-message">
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <p>नमस्ते! मैं सिविक असिस्टेंट हूँ। मैं आपकी कैसे सहायता कर सकता हूँ?</p>
            <p>Hello! I'm your Civic Assistant. How can I help you today?</p>
          </div>
        </div>
      </div>
      <div class="chatbot-input">
        <input type="text" id="chatbotInput" placeholder="Type your question here..." />
        <button id="sendMessage" class="btn btn--primary btn--sm">Send</button>
      </div>
      <div class="chatbot-suggestions">
        <button class="suggestion-chip" data-query="How to report an issue?">How to report an issue?</button>
        <button class="suggestion-chip" data-query="Track my complaint">Track my complaint</button>
        <button class="suggestion-chip" data-query="Emergency contacts">Emergency contacts</button>
      </div>
    </div>
  </div>

  <!-- Emergency Services Panel -->
  <div id="emergencyPanel" class="emergency-panel hidden">
    <div class="emergency-panel-header">
      <h3>Emergency Services</h3>
      <button id="closeEmergencyPanel" class="btn btn--sm close-btn">×</button>
    </div>
    <div class="emergency-panel-content">
      <div class="emergency-disclaimer">
        <p><strong>Important:</strong> In case of a real emergency, please dial the appropriate emergency number directly from your phone.</p>
      </div>
      <div id="emergencyServicesContainer" class="emergency-services-container">
        <!-- Emergency services will be rendered here -->
      </div>
      <div class="emergency-categories">
        <button class="emergency-category-btn active" data-category="all">All</button>
        <button class="emergency-category-btn" data-category="police">Police</button>
        <button class="emergency-category-btn" data-category="fire">Fire</button>
        <button class="emergency-category-btn" data-category="medical">Medical</button>
        <button class="emergency-category-btn" data-category="helpline">Helplines</button>
        <button class="emergency-category-btn" data-category="disaster">Disaster</button>
      </div>
    </div>
  </div>

  <!-- Include JavaScript files -->
  <script>
    // Add PHP variables to JavaScript
    window.phpData = {
      totalIssues: <?php echo $totalIssues; ?>,
      resolvedIssues: <?php echo $resolvedIssues; ?>,
      currentPage: '<?php echo $currentPage; ?>',
      isLoggedIn: <?php echo $isLoggedIn ? 'true' : 'false'; ?>,
      userName: '<?php echo htmlspecialchars($userName); ?>'
    };
  </script>
  <script src="script.js"></script>
  <script src="php-integration.js"></script>
</body>
</html>