 class CivicConnectApp {
  constructor() {
    this.currentRole = null;
    
    // Emergency Services Data
    this.emergencyServices = [
      {
        id: 1,
        name: "Police Emergency",
        number: "100",
        icon: "👮",
        description: "For reporting crimes, emergencies, and law enforcement assistance",
        category: "police"
      },
      {
        id: 2,
        name: "Fire Emergency",
        number: "101",
        icon: "🚒",
        description: "For fire emergencies and rescue operations",
        category: "fire"
      },
      {
        id: 3,
        name: "Ambulance",
        number: "108",
        icon: "🚑",
        description: "Medical emergency and ambulance services",
        category: "medical"
      },
      {
        id: 4,
        name: "Women Helpline",
        number: "1091",
        icon: "🚺",
        description: "24x7 emergency assistance for women in distress",
        category: "helpline"
      },
      {
        id: 5,
        name: "Child Helpline",
        number: "1098",
        icon: "👶",
        description: "For children in need of aid and assistance",
        category: "helpline"
      },
      {
        id: 6,
        name: "Disaster Management",
        number: "1070",
        icon: "⚠️",
        description: "For natural disasters and emergency relief",
        category: "disaster"
      },
      {
        id: 7,
        name: "Traffic Police",
        number: "1073",
        icon: "🚦",
        description: "For reporting traffic issues and emergencies",
        category: "police"
      },
      {
        id: 8,
        name: "Anti-Poison",
        number: "1066",
        icon: "☠️",
        description: "Emergency assistance for poison cases",
        category: "medical"
      },
      {
        id: 9,
        name: "Railway Police",
        number: "1512",
        icon: "🚂",
        description: "For emergencies in railways and stations",
        category: "police"
      },
      {
        id: 10,
        name: "COVID-19 Helpline",
        number: "104",
        icon: "🦠",
        description: "For COVID-19 related emergencies and information",
        category: "medical"
      }
    ];
    
    // Add government facilities for Jharkhand
    this.governmentFacilities = [
      {
        id: 1,
        name: "Rajendra Institute of Medical Sciences (RIMS)",
        type: "hospital",
        address: "Bariatu Road, Bariatu, Ranchi, Jharkhand 834009",
        contact: "0651-2546222",
        services: ["Emergency Care", "Surgery", "Cardiology", "Orthopedics", "Neurology"],
        timings: "24 hours (Emergency), 9 AM - 5 PM (OPD)",
        website: "http://www.rimsranchi.org",
        coordinates: {lat: 23.3716, lng: 85.3093}
      },
      {
        id: 2,
        name: "Central University of Jharkhand",
        type: "education",
        address: "Brambe, Ranchi, Jharkhand 835205",
        contact: "0651-2274045",
        services: ["Higher Education", "Research", "Library", "Laboratory", "Sports Facilities"],
        timings: "10 AM - 5 PM (Monday-Saturday)",
        website: "http://www.cuj.ac.in",
        coordinates: {lat: 23.3907, lng: 85.2327}
      },
      {
        id: 3,
        name: "Jharkhand High Court",
        type: "judiciary",
        address: "Near AG Office, Doranda, Ranchi, Jharkhand 834002",
        contact: "0651-2481520",
        services: ["Legal Services", "Court Hearings", "Case Filing"],
        timings: "10 AM - 5 PM (Monday-Friday)",
        website: "https://jharkhandhighcourt.nic.in",
        coordinates: {lat: 23.3446, lng: 85.3249}
      },
      {
        id: 4,
        name: "Jharkhand Secretariat",
        type: "government",
        address: "Project Building, Dhurwa, Ranchi, Jharkhand 834004",
        contact: "0651-2400001",
        services: ["Administrative Services", "Public Grievances", "Certificate Issuance"],
        timings: "10 AM - 5 PM (Monday-Saturday)",
        website: "https://jharkhand.gov.in",
        coordinates: {lat: 23.3822, lng: 85.3149}
      },
      {
        id: 5,
        name: "Sadar Hospital Hazaribagh",
        type: "hospital",
        address: "Hazaribagh, Jharkhand 825301",
        contact: "06546-222038",
        services: ["Emergency Care", "General Medicine", "Surgery", "Pediatrics"],
        timings: "24 hours (Emergency), 9 AM - 4 PM (OPD)",
        website: "https://hazaribag.nic.in",
        coordinates: {lat: 24.0044, lng: 85.3696}
      },
      {
        id: 6,
        name: "Birsa Agriculture University",
        type: "education",
        address: "Kanke, Ranchi, Jharkhand 834006",
        contact: "0651-2450832",
        services: ["Agricultural Education", "Research", "Extension Activities"],
        timings: "10 AM - 5 PM (Monday-Saturday)",
        website: "https://www.bauranchi.org",
        coordinates: {lat: 23.3631, lng: 85.3013}
      },
      {
        id: 7,
        name: "Jharkhand Electricity Board (JBVNL)",
        type: "utility",
        address: "Engineering Building, Dhurwa, Ranchi, Jharkhand 834004",
        contact: "0651-2400967",
        services: ["Electricity Bill Payment", "New Connection", "Service Complaints"],
        timings: "10 AM - 5 PM (Monday-Saturday)",
        website: "https://jbvnl.co.in",
        coordinates: {lat: 23.3813, lng: 85.3091}
      },
      {
        id: 8,
        name: "District Collectorate, Dhanbad",
        type: "government",
        address: "Dhanbad, Jharkhand 826001",
        contact: "0326-2312401",
        services: ["Administrative Services", "Land Records", "Certificate Issuance"],
        timings: "10 AM - 5 PM (Monday-Saturday)",
        website: "https://dhanbad.nic.in",
        coordinates: {lat: 23.7957, lng: 86.4358}
      },
      {
        id: 9,
        name: "MGM Medical College and Hospital",
        type: "hospital",
        address: "Dimna Road, Mango, Jamshedpur, Jharkhand 831020",
        contact: "0657-2360614",
        services: ["Emergency Care", "Surgery", "Gynecology", "Pediatrics"],
        timings: "24 hours (Emergency), 9 AM - 5 PM (OPD)",
        website: "https://mgmmchjsr.org",
        coordinates: {lat: 22.8489, lng: 86.2456}
      },
      {
        id: 10,
        name: "Drinking Water and Sanitation Department",
        type: "utility",
        address: "Nepal House, Doranda, Ranchi, Jharkhand 834002",
        contact: "0651-2490846",
        services: ["Water Supply", "Sanitation", "Pipeline Repairs"],
        timings: "10 AM - 5 PM (Monday-Friday)",
        website: "https://drinking-water.jharkhand.gov.in",
        coordinates: {lat: 23.3452, lng: 85.3164}
      },
      {
        id: 11,
        name: "District Transport Office",
        type: "transport",
        address: "Kutchery Road, Ranchi, Jharkhand 834001",
        contact: "0651-2217042",
        services: ["Vehicle Registration", "Driving License", "Permit Issuance"],
        timings: "10 AM - 5 PM (Monday-Saturday)",
        website: "https://transport.jharkhand.gov.in",
        coordinates: {lat: 23.3608, lng: 85.3295}
      },
      {
        id: 12,
        name: "Jharkhand Tourism Office",
        type: "tourism",
        address: "Tourist Information Center, Morabadi Ground, Ranchi, Jharkhand 834008",
        contact: "0651-2331828",
        services: ["Tourist Information", "Tour Packages", "Accommodation Booking"],
        timings: "10 AM - 6 PM (Daily)",
        website: "https://jharkhandtourism.gov.in",
        coordinates: {lat: 23.3779, lng: 85.3217}
      }
    ];
    
    // Add some sample issues for testing
    this.issues = [
      { 
        id: 1, 
        title: "Large pothole on Main Street", 
        category: "potholes", 
        description: "There's a large pothole near the intersection with Oak Avenue that's causing traffic issues",
        location: "Main Street & Oak Avenue",
        priority: "High",
        status: "Pending",
        upvotes: 12,
        date: "2025-09-10"
      },
      { 
        id: 2, 
        title: "Broken streetlight", 
        category: "streetlights", 
        description: "Streetlight has been out for over a week causing safety concerns at night",
        location: "Park Road near Community Center",
        priority: "Medium",
        status: "In Progress",
        upvotes: 8,
        date: "2025-09-12"
      },
      { 
        id: 3, 
        title: "Overflowing garbage bin", 
        category: "garbage", 
        description: "Garbage bin near bus stop is overflowing and causing bad smell",
        location: "Central Bus Terminal",
        priority: "Urgent",
        status: "Resolved",
        upvotes: 15,
        date: "2025-09-05"
      },
      {
        id: 4,
        title: "Water pipe leakage",
        category: "water",
        description: "Water is leaking from a broken pipe on Green Street causing water wastage and road damage",
        location: "Green Street near Market Square",
        priority: "High",
        status: "In Progress",
        upvotes: 7,
        date: "2025-09-14"
      },
      {
        id: 5,
        title: "Traffic signal malfunction",
        category: "traffic",
        description: "Traffic signal at the main intersection is not working properly, causing congestion",
        location: "Broadway & Main Street Intersection",
        priority: "Urgent",
        status: "Pending",
        upvotes: 23,
        date: "2025-09-15"
      }
    ];
    
    this.userReports = [this.issues[0], this.issues[1], this.issues[3]];
    this.departments = [
      { id: 1, name: "Sanitation", performance: 85, issuesHandled: 427, avgResponseTime: "1.2 days", icon: "🧹", category: "garbage" },
      { id: 2, name: "Roads & Mining", performance: 78, issuesHandled: 312, avgResponseTime: "2.8 days", icon: "🚧", category: "roads" },
      { id: 3, name: "Water Supply", performance: 92, issuesHandled: 214, avgResponseTime: "0.9 days", icon: "🚰", category: "water" },
      { id: 4, name: "Electricity", performance: 81, issuesHandled: 198, avgResponseTime: "1.5 days", icon: "💡", category: "electricity" },
      { id: 5, name: "Traffic", performance: 73, issuesHandled: 256, avgResponseTime: "2.1 days", icon: "🚦", category: "traffic" },
      { id: 6, name: "Parks", performance: 88, issuesHandled: 143, avgResponseTime: "1.8 days", icon: "🌳", category: "environment" },
      { id: 7, name: "Health Services", performance: 89, issuesHandled: 276, avgResponseTime: "1.1 days", icon: "🏥", category: "health" },
      { id: 8, name: "Education", performance: 76, issuesHandled: 187, avgResponseTime: "3.4 days", icon: "🎓", category: "education" },
      { id: 9, name: "Agriculture", performance: 82, issuesHandled: 205, avgResponseTime: "2.5 days", icon: "🧑‍🌾", category: "farming" },
      { id: 10, name: "Public Distribution", performance: 75, issuesHandled: 324, avgResponseTime: "2.2 days", icon: "🍚", category: "ration" },
      { id: 11, name: "Environment & Forest", performance: 87, issuesHandled: 156, avgResponseTime: "3.0 days", icon: "🌳", category: "environment" },
      { id: 12, name: "Women & Child Welfare", performance: 91, issuesHandled: 210, avgResponseTime: "1.0 days", icon: "🚨", category: "safety" },
      { id: 13, name: "Transport", performance: 79, issuesHandled: 245, avgResponseTime: "2.3 days", icon: "🚌", category: "transport" }
    ];
    this.currentLanguage = "en";
    this.translations = {
      en: {
        localeName: 'English',
        "select_role": "Select Your Role",
        "citizen": "Citizen",
        "admin": "Administrator",
        "report_issue": "Report an Issue",
        "my_reports": "My Reports",
        "map": "Map",
        "community": "Community",
        "submit": "Submit",
        "notification_issue_reported": "✅ Issue reported successfully!",
        "notification_language_toggled": "🌐 Language toggled",
        "notification_status_updated": "ℹ️ Issue status updated",
        "government_facilities": "Government Facilities",
        "filter_by_type": "Filter by type",
        "all_types": "All Types",
        "hospitals": "Hospitals",
        "education": "Educational Institutions",
        "government_offices": "Government Offices",
        "judiciary": "Judiciary",
        "utility_services": "Utility Services",
        "transport_services": "Transport Services",
        "tourism_services": "Tourism Services",
        "search_facilities": "Search facilities...",
        "search": "Search",
        "contact": "Contact",
  "contact_us": "Contact Us",
        "timings": "Timings",
        "services": "Services",
  "help": "Help",
        "view_on_map": "View on Map",
        "visit_website": "Visit Website",
        "close_map": "Close Map",
        "emergency": "Emergency",
        "emergency_services": "Emergency Services",
        "important": "Important",
        "emergency_disclaimer": "In case of a real emergency, please dial the appropriate emergency number directly from your phone.",
        "call_now": "Call Now",
        "police": "Police",
        "fire": "Fire",
        "medical": "Medical",
        "helplines": "Helplines",
        "disaster": "Disaster",

  // Footer and misc
  "contact_jharkhand": "Contact Jharkhand Government",
  "email": "Email",
  "helpline": "Helpline",
  "secretariat": "Secretariat",
  "jharkhand_heading": "Progress & Promise — Jharkhand: Improvement & Respect",
        
        // New service categories translations
        "roads_category": "Roads & Mining",
        "water_category": "Water & Sanitation",
        "electricity_category": "Electricity & Streetlights",
        "health_category": "Health & Ambulance",
        "education_category": "Education (Schools)",
        "farming_category": "Farmer Support",
        "ration_category": "PDS / Ration Issues",
        "environment_category": "Environment & Forest",
        "safety_category": "Women & Child Safety",
        "transport_category": "Transport",
        
        // Dynamic form field translations
        "road_type": "Road Type",
        "issue_type": "Issue Type",
        "issue_duration": "How long has this issue been present?",
        "water_issue_type": "Water Issue Type",
        "area_affected": "Area Affected",
        "electricity_issue": "Electricity Issue",
        "duration": "Duration",
        "facility_type": "Facility Type",
        "urgency_level": "Urgency Level",
        "school_type": "School Type",
        "school_name": "School Name",
        "farming_issue": "Farming Issue",
        "crop_type": "Crop Type",
        "land_area": "Land Area Affected",
        "pds_issue_type": "PDS Issue Type",
        "shop_id": "Fair Price Shop ID",
        "environmental_issue": "Environmental Issue",
        "scale_of_impact": "Scale of Impact",
        "safety_concern": "Safety Concern",
        "time_of_day": "Time of Day",
        "anonymous_report": "Submit Anonymously",
        "transport_issue": "Transport Issue",
        "route_number": "Route/Vehicle Number"
      },
      hi: {
        localeName: 'हिन्दी',
        "select_role": "अपनी भूमिका चुनें",
        "citizen": "नागरिक",
        "admin": "प्रशासक",
        "report_issue": "समस्या की रिपोर्ट करें",
        "my_reports": "मेरी रिपोर्ट",
        "map": "नक्शा",
        "community": "समुदाय",
        "submit": "प्रस्तुत",
        "notification_issue_reported": "✅ समस्या सफलतापूर्वक रिपोर्ट हो गई!",
        "notification_language_toggled": "🌐 भाषा बदली गई",
        "notification_status_updated": "ℹ️ समस्या की स्थिति अपडेट की गई",
        "government_facilities": "सरकारी सुविधाएँ",
        "filter_by_type": "प्रकार से फ़िल्टर करें",
        "all_types": "सभी प्रकार",
        "hospitals": "अस्पताल",
        "education": "शैक्षिक संस्थान",
        "government_offices": "सरकारी कार्यालय",
        "judiciary": "न्यायपालिका",
        "utility_services": "उपयोगिता सेवाएँ",
        "transport_services": "परिवहन सेवाएँ",
        "tourism_services": "पर्यटन सेवाएँ",
        "search_facilities": "सुविधाएँ खोजें...",
        "search": "खोज",
        "contact": "संपर्क",
  "contact_us": "संपर्क करें",
        "timings": "समय",
        "services": "सेवाएँ",
  "help": "मदद",
        "view_on_map": "मानचित्र पर देखें",
        "visit_website": "वेबसाइट देखें",
        "close_map": "बंद करें",
        "emergency": "आपातकालीन",
        "emergency_services": "आपातकालीन सेवाएँ",
        "important": "महत्वपूर्ण",
        "emergency_disclaimer": "वास्तविक आपात स्थिति में, कृपया सीधे अपने फोन से उचित आपातकालीन नंबर डायल करें।",
        "call_now": "अभी कॉल करें",
        "police": "पुलिस",
        "fire": "अग्निशमन",
        "medical": "चिकित्सा",
        "helplines": "हेल्पलाइन",
        "disaster": "आपदा",
        
        // New service categories translations
        "roads_category": "सड़क और खनन",
        "water_category": "जल और स्वच्छता",
        "electricity_category": "बिजली और स्ट्रीटलाइट्स",
        "health_category": "स्वास्थ्य और एम्बुलेंस",
        "education_category": "शिक्षा (स्कूल)",
        "farming_category": "किसान समर्थन",
        "ration_category": "पीडीएस / राशन मुद्दे",
        "environment_category": "पर्यावरण और वन",
        "safety_category": "महिला और बाल सुरक्षा",
        "transport_category": "परिवहन",
        
        // Dynamic form field translations
        "road_type": "सड़क प्रकार",
        "issue_type": "समस्या प्रकार",
        "issue_duration": "यह समस्या कब से है?",
        "water_issue_type": "पानी की समस्या प्रकार",
        "area_affected": "प्रभावित क्षेत्र",
        "electricity_issue": "बिजली की समस्या",
        "duration": "अवधि",
        "facility_type": "सुविधा प्रकार",
        "urgency_level": "आवश्यकता स्तर",
        "school_type": "स्कूल प्रकार",
        "school_name": "स्कूल का नाम",
        "farming_issue": "कृषि संबंधी समस्या",
        "crop_type": "फसल प्रकार",
        "land_area": "प्रभावित भूमि क्षेत्र",
        "pds_issue_type": "पीडीएस समस्या प्रकार",
        "shop_id": "उचित मूल्य की दुकान का आईडी",
        "environmental_issue": "पर्यावरण संबंधी समस्या",
        "scale_of_impact": "प्रभाव का पैमाना",
        "safety_concern": "सुरक्षा संबंधी चिंता",
        "time_of_day": "दिन का समय",
        "anonymous_report": "गुमनाम रूप से सबमिट करें",
        "transport_issue": "परिवहन संबंधी समस्या",
        "route_number": "मार्ग/वाहन संख्या",
        
  // Footer and contact translations
  "contact_jharkhand": "झारखण्ड सरकार से संपर्क करें",
  "email": "ईमेल",
  "helpline": "हेल्पलाइन",
  "secretariat": "सचिवालय",
  "jharkhand_heading": "प्रगति और वादा — झारखंड: सुधार और सम्मान",
        "department_contacts": "विभाग संपर्क",
        "social_media": "सोशल मीडिया",
        "privacy_policy": "गोपनीयता नीति",
        "terms_of_service": "सेवा की शर्तें",
        "accessibility": "पहुंच",
        "rti": "सूचना का अधिकार",
        "copyright": "© 2025 झारखण्ड सरकार। सर्वाधिकार सुरक्षित।"
      }
    };
    this.init();
  }

  init() {
    this.bindRoleSelection();
    this.bindNavigation();
    this.initTabs();
    this.initForm();
    this.initCharts();
    this.initMapViews();
    this.initThemeAndLanguage();
    this.initRealTimeUpdates();
    this.updateDashboardSummary();
    this.initBackgroundEffects();
    this.initMainNavigation();
    this.initGovernmentFacilities();
    this.initEmergencyServices();
  // Waste management storage
  this.wasteReports = JSON.parse(localStorage.getItem('wasteReports') || '[]');
  this.wasteVehicles = JSON.parse(localStorage.getItem('wasteVehicles') || '[]');
  this.bindWasteForm();
  // Utility monitor storage
  this.utilityMeters = JSON.parse(localStorage.getItem('utilityMeters') || '[]');
  this.utilityReports = JSON.parse(localStorage.getItem('utilityReports') || '[]');
  this.bindUtilityForms();
  // MRT operations storage
  this.mrtReports = JSON.parse(localStorage.getItem('mrtReports') || '[]');
  this.mrtVehicles = JSON.parse(localStorage.getItem('mrtVehicles') || '[]');
  this.bindMRTForms();
    // wire government docs button if present
    document.addEventListener('DOMContentLoaded', () => {
      const govBtn = document.getElementById('openGovDocs');
      if (govBtn) govBtn.addEventListener('click', () => this.showGovernmentDocs());
    });
  }
  
  // Initialize government facilities
  initGovernmentFacilities() {
    const facilitiesTab = document.querySelector('[data-tab="facilities"]');
    if (facilitiesTab) {
      facilitiesTab.addEventListener("click", () => {
        this.renderGovernmentFacilities();
      });
    }
  }
  
  // Initialize emergency services
  initEmergencyServices() {
    const emergencyBtn = document.getElementById("emergencyBtn");
    const closeEmergencyBtn = document.getElementById("closeEmergencyPanel");
    const emergencyPanel = document.getElementById("emergencyPanel");
    
    if (emergencyBtn && emergencyPanel) {
        this.renderEmergencyServices();
        emergencyBtn.addEventListener("click", () => {
          emergencyPanel.classList.toggle("hidden");
          // Animate entrance
          if (!emergencyPanel.classList.contains("hidden")) {
            emergencyPanel.classList.add("panel-slide-in");
            // Add pulsating effect to emergency numbers
            setTimeout(() => {
              document.querySelectorAll(".emergency-number").forEach(el => {
                el.classList.add("pulse-animation");
              });
            }, 500);
          }
        });
      
      // Toggle emergency panel
      emergencyBtn.addEventListener("click", () => {
        emergencyPanel.classList.toggle("hidden");
        // Animate entrance
        if (!emergencyPanel.classList.contains("hidden")) {
          emergencyPanel.classList.add("panel-slide-in");
          // Add pulsating effect to emergency numbers
          setTimeout(() => {
            document.querySelectorAll(".emergency-number").forEach(el => {
              el.classList.add("pulse-animation");
            });
          }, 500);
        }
      });
      
      // Close emergency panel
      if (closeEmergencyBtn) {
        closeEmergencyBtn.addEventListener("click", () => {
          emergencyPanel.classList.add("panel-slide-out");
          setTimeout(() => {
            emergencyPanel.classList.add("hidden");
            emergencyPanel.classList.remove("panel-slide-in", "panel-slide-out");
          }, 300);
        });
      }
      
      // Filter emergency services by category
      const categoryBtns = document.querySelectorAll(".emergency-category-btn");
      categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          categoryBtns.forEach(b => b.classList.remove("active"));
          // Add active class to clicked button
          btn.classList.add("active");
          // Filter services
          const category = btn.getAttribute("data-category");
          this.filterEmergencyServices(category);
        });
      });
    }
  }
  
  // Render emergency services
  renderEmergencyServices() {
    const container = document.getElementById("emergencyServicesContainer");
    if (!container) return;
    
    let html = '<div class="emergency-services-grid">';
    
    this.emergencyServices.forEach(service => {
      html += `
        <div class="emergency-service-card" data-category="${service.category}">
          <div class="emergency-icon">${service.icon}</div>
          <div class="emergency-info">
            <h4 class="emergency-name">${service.name}</h4>
            <div class="emergency-number" data-number="${service.number}">${service.number}</div>
            <p class="emergency-description">${service.description}</p>
          </div>
          <div class="emergency-actions">
            <button class="btn btn--sm btn--danger call-btn" data-number="${service.number}">Call Now</button>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Add click event to "Call Now" buttons
    document.querySelectorAll(".call-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const number = btn.getAttribute("data-number");
        this.handleEmergencyCall(number);
      });
    });
    
    // Add click event to phone numbers (make numbers clickable)
    document.querySelectorAll('.emergency-number').forEach(el => {
      el.addEventListener('click', () => {
        const number = el.getAttribute('data-number');
        this.handleEmergencyCall(number);
      });
    });
  }
  
  // Handle emergency call
  handleEmergencyCall(number) {
    // In a real application, this would use the Web Telephony API if available
    // For this demo, we'll show a confirmation dialog
    const confirmation = confirm(`This is a simulation. In a real application, this would initiate a call to emergency number: ${number}. Would you like to proceed?`);
    
    if (confirmation) {
      // Log the call attempt
      console.log(`Emergency call attempted to: ${number}`);
      
      // Show notification
      this.showNotification(`Emergency number ${number} dialed. In a real app, this would place the call.`);
      
      // In a real app with proper permissions:
      // window.location.href = `tel:${number}`;
    }
  }
  
  // Filter emergency services by category
  filterEmergencyServices(category) {
    const services = document.querySelectorAll(".emergency-service-card");
    
    services.forEach(service => {
      if (category === "all" || service.getAttribute("data-category") === category) {
        service.style.display = "flex";
      } else {
        service.style.display = "none";
      }
    });
  }
  
  initBackgroundEffects() {
    // Add parallax effect to background images
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const landingPage = document.querySelector('.landing-page');
      if (landingPage) {
        landingPage.style.backgroundPosition = `center ${scrollY * 0.5}px`;
      }
    });
    
    // Random particles effect for landing page
    this.createParticlesEffect();
  }
  
  createParticlesEffect() {
    const landingPage = document.querySelector('.landing-page');
    if (!landingPage) return;
    
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '1';
    
    // Add particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 10 + 3}px`;
      particle.style.height = particle.style.width;
      particle.style.background = 'rgba(255, 255, 255, 0.5)';
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      particle.style.opacity = Math.random() * 0.7;
      particlesContainer.appendChild(particle);
    }
    
    landingPage.insertBefore(particlesContainer, landingPage.firstChild);
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // -------------------- ROLE SWITCH --------------------
  bindRoleSelection() {
  // Safely attach button handlers inside role cards (elements may be absent in some pages)
  const citizenBtn = document.querySelector("#citizenRole button");
  if (citizenBtn) citizenBtn.addEventListener("click", () => this.switchRole("citizen"));

  const adminBtn = document.querySelector("#adminRole button");
  if (adminBtn) adminBtn.addEventListener("click", () => this.switchRole("admin"));

  const tourismBtn = document.querySelector("#tourismRole button");
  if (tourismBtn) tourismBtn.addEventListener("click", () => this.switchRole("tourism"));

  const wasteBtn = document.querySelector("#wasteManagementRole button");
  if (wasteBtn) wasteBtn.addEventListener("click", () => this.switchRole("waste"));

  const utilityBtn = document.querySelector("#utilityRole button");
  if (utilityBtn) utilityBtn.addEventListener("click", () => this.switchRole("utility"));

  const transportBtn = document.querySelector("#transportRole button");
  if (transportBtn) transportBtn.addEventListener("click", () => this.switchRole("mrt"));

  const advertisingBtn = document.querySelector("#advertisingRole button");
  if (advertisingBtn) advertisingBtn.addEventListener("click", () => this.showSpecializedRoleMessage("LED Billboard Manager"));

  const backBtn = document.getElementById("backToHome");
  if (backBtn) backBtn.addEventListener("click", () => this.switchRole("home"));
    
    // Also make the entire role cards clickable (guard existence)
    const citizenCard = document.getElementById("citizenRole");
    if (citizenCard) citizenCard.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") this.switchRole("citizen");
    });

    const adminCard = document.getElementById("adminRole");
    if (adminCard) adminCard.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") this.switchRole("admin");
    });

    const tourismCard = document.getElementById("tourismRole");
    if (tourismCard) tourismCard.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") this.switchRole("tourism");
    });
  }
  
  showSpecializedRoleMessage(roleName) {
    // Show a notification that this specialized role module is coming soon
    this.showNotification(`${roleName} module coming soon. Try Citizen or Admin role for now.`);
  }

  switchRole(role) {
    this.currentRole = role;
    document.getElementById("landingPage").classList.add("hidden");
    document.getElementById("citizenInterface").classList.add("hidden");
    document.getElementById("adminInterface").classList.add("hidden");
    document.getElementById("backToHome").classList.toggle("hidden", role === "home");

    if (role === "citizen") {
      document.getElementById("citizenInterface").classList.remove("hidden");
    } else if (role === "tourism") {
      // Show a lightweight tourism interface; create container if it doesn't exist
      let tourismEl = document.getElementById("tourismInterface");
      if (!tourismEl) {
        tourismEl = document.createElement('div');
        tourismEl.id = 'tourismInterface';
        tourismEl.className = 'section tourism-interface';
        tourismEl.innerHTML = `
          <div class="container">
            <h2>Tourism Reporter</h2>
            <p>Report tourism-related issues, share visitor feedback, and view local attractions.</p>
            <button class="btn btn--primary" id="tourismBack">Back</button>
          </div>
        `;
        document.body.appendChild(tourismEl);
        document.getElementById('tourismBack').addEventListener('click', () => this.switchRole('home'));
      }
  tourismEl.classList.remove('hidden');
  // Render citizen/community lists only if their containers exist
  if (document.getElementById('trackTab')) this.renderCitizenReports();
  if (document.getElementById('communityIssues')) this.renderCommunityIssues();
      this.setupMap("communityMap");
    } else if (role === "waste") {
      const wasteEl = document.getElementById('wasteInterface');
      if (wasteEl) {
        wasteEl.classList.remove('hidden');
        // Render waste lists
        this.renderWasteFeed();
        this.renderWasteVehicles();
      }
    } else if (role === "utility") {
      const utilEl = document.getElementById('utilityInterface');
      if (utilEl) {
        utilEl.classList.remove('hidden');
        this.renderMeterReadings();
        this.renderUtilityReports();
      }
    } else if (role === "mrt") {
      const m = document.getElementById('mrtInterface');
      if (m) {
        m.classList.remove('hidden');
        this.renderMRTReports();
        this.renderMRTVehicles();
      }
    } else if (role === "govdocs") {
      const g = document.getElementById('govDocsInterface');
      if (g) {
        g.classList.remove('hidden');
        this.renderGovDocs();
      }
    } else if (role === "admin") {
      document.getElementById("adminInterface").classList.remove("hidden");
      // Render admin-specific content
      this.renderAdminIssues();
      this.renderDepartmentsList();
      this.renderDashboardCharts();
      this.updateDashboardSummary();
      this.setupMap("adminMap");
    } else {
      document.getElementById("landingPage").classList.remove("hidden");
    }
    
    // Show notification for role switch
    if (role !== "home") {
      this.showNotification(`Switched to ${role === "citizen" ? "Citizen" : "Administrator"} interface`);
    }
  }

  // -------------------- NAVIGATION --------------------
  bindNavigation() {
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.onclick = () => {
        const parent = btn.closest(".interface");
        parent.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        parent.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
        btn.classList.add("active");
        parent.querySelector(`#${btn.dataset.tab}Tab`).classList.add("active");
        // If the activated tab contains a Leaflet map, re-init/invalidate its size
        const activeTabId = btn.dataset.tab;
        if (activeTabId === 'map') {
          // community map
          this.setupMap('communityMap');
          setTimeout(() => { try { if (window.L && window.app) { const mapEl = document.getElementById('communityMap'); if (mapEl && mapEl._leaflet_map) mapEl._leaflet_map.invalidateSize(); } } catch(e){} }, 250);
        } else if (activeTabId === 'admin-map') {
          this.setupMap('adminMap');
          setTimeout(() => { try { if (window.L && window.app) { const mapEl = document.getElementById('adminMap'); if (mapEl && mapEl._leaflet_map) mapEl._leaflet_map.invalidateSize(); } } catch(e){} }, 250);
        }
      };
    });
  }

  // -------------------- TABS --------------------
  initTabs() {
    document.querySelectorAll(".tab-content").forEach(tc => {
      if (tc.id === "reportTab") tc.classList.add("active");
    });
  }

  // -------------------- FORMS --------------------
  initForm() {
    const form = document.getElementById("issueReportForm");
    const categorySelect = document.getElementById("issueCategory");
    
    // Set up dynamic form fields based on category
    // Initialize tourism reports storage and handlers
    this.tourismReports = JSON.parse(localStorage.getItem('tourismReports') || '[]');
    this.bindTourismForm();
    if (categorySelect) {
      // Create container for dynamic fields if it doesn't exist
      let dynamicFieldsContainer = document.getElementById("dynamicFields");
      if (!dynamicFieldsContainer) {
        dynamicFieldsContainer = document.createElement("div");
        dynamicFieldsContainer.id = "dynamicFields";
        dynamicFieldsContainer.className = "dynamic-fields";
        
        // Insert after issue location
        const locationField = document.getElementById("issueLocation");
        if (locationField && locationField.parentNode) {
          locationField.parentNode.insertBefore(dynamicFieldsContainer, 
            document.getElementById("useGPSLocation").nextSibling);
        }
      }
      
      // Handle category change
      categorySelect.addEventListener("change", () => {
        this.updateDynamicFormFields(categorySelect.value);
      });
      
      // Initialize with default value
      this.updateDynamicFormFields(categorySelect.value);
    }
    
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Validate the form
        let isValid = true;
        const title = document.getElementById("issueTitle").value;
        const description = document.getElementById("issueDescription").value;
        const location = document.getElementById("issueLocation").value;
        
        if (title.trim().length < 5) {
          this.showNotification("Issue title should be at least 5 characters long");
          isValid = false;
        }
        
        if (description.trim().length < 20) {
          this.showNotification("Please provide a more detailed description (at least 20 characters)");
          isValid = false;
        }
        
        if (location.trim().length < 3) {
          this.showNotification("Please provide a valid location");
          isValid = false;
        }
        
        if (!isValid) return;
        
        // Create and save the issue
        const now = new Date();
        const issue = {
          id: this.issues.length + 1,
          title: title,
          category: document.getElementById("issueCategory").value,
          description: description,
          location: location,
          priority: document.getElementById("issuePriority").value,
          status: "Pending",
          upvotes: 0,
          date: now.toISOString().split('T')[0]
        };
        
        this.issues.push(issue);
        this.userReports.push(issue);
        
        // Update all UI elements
        this.renderCitizenReports();
        this.renderCommunityIssues();
        this.renderAdminIssues();
        this.renderDashboardCharts();
        this.updateDashboardSummary();
        
        // Add to real-time updates
        this.addUpdate({
          content: `New ${issue.category} issue reported at ${issue.location}`,
          type: 'New Issue',
          icon: '🔴',
          time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        
        // Show notification and reset form
        this.showNotification(this.t("notification_issue_reported"));
        e.target.reset();
      });
    }

    document.getElementById("useGPSLocation").onclick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          document.getElementById("issueLocation").value =
            `Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`;
        });
      }
    };
  }
  
  // Get category icon
  // -------------------- TOURISM REPORTS --------------------
  bindTourismForm() {
    const form = document.getElementById('tourismForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('tourTitle').value.trim();
      const location = document.getElementById('tourLocation').value.trim();
      const type = document.getElementById('tourType').value;
      const description = document.getElementById('tourDesc').value.trim();
      const contact = document.getElementById('tourContact').value.trim();

      if (title.length < 5) return this.showNotification('Title should be at least 5 characters');
      if (description.length < 10) return this.showNotification('Please provide a more detailed description');

      const report = {
        id: Date.now(),
        title, location, type, description, contact,
        createdAt: new Date().toISOString()
      };

      this.tourismReports.unshift(report);
      localStorage.setItem('tourismReports', JSON.stringify(this.tourismReports));
      this.showNotification('Tourism report submitted');
      form.reset();
      this.renderTourismFeed();
    });

    // Back button (if present in this form variant)
    const back = document.getElementById('tourismBack');
    if (back) back.addEventListener('click', () => this.switchRole('home'));
    // Render existing reports on load
    this.renderTourismFeed();
  }

  renderTourismFeed() {
    const list = document.getElementById('tourismFeedList');
    if (!list) return;
    if (!this.tourismReports || this.tourismReports.length === 0) {
      list.innerHTML = '<div class="empty-state"><p>No reports yet.</p></div>';
      return;
    }

    list.innerHTML = this.tourismReports.map(r => `
      <div class="tour-report-card">
        <h4>${r.title}</h4>
        <small>${new Date(r.createdAt).toLocaleString()} • ${r.location} • ${r.type}</small>
        <p>${r.description}</p>
        ${r.contact ? `<div class="contact">Contact: ${r.contact}</div>` : ''}
        <div class="tour-report-actions">
          <button class="btn btn--sm" data-id="${r.id}" onclick="app.openTourReport(${r.id})">View</button>
        </div>
      </div>
    `).join('');
  }

  openTourReport(id) {
    const r = this.tourismReports.find(x => x.id === id);
    if (!r) return this.showNotification('Report not found');
    const html = `
      <div class="modal">
        <h3>${r.title}</h3>
        <small>${new Date(r.createdAt).toLocaleString()} • ${r.location}</small>
        <p>${r.description}</p>
        ${r.contact ? `<p>Contact: ${r.contact}</p>` : ''}
        <button class="btn" id="closeTourModal">Close</button>
      </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.className = 'modal-wrapper';
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);
    document.getElementById('closeTourModal').addEventListener('click', () => wrapper.remove());
  }
  getCategoryIcon(category) {
    const icons = {
      "roads": "🚧",
      "water": "🚰",
      "electricity": "💡",
      "health": "🏥",
      "education": "🎓",
      "farming": "🧑‍🌾",
      "ration": "🍚",
      "environment": "🌳",
      "safety": "🚨",
      "transport": "🚌",
      "potholes": "🕳️",
      "streetlights": "🚦",
      "garbage": "🗑️",
      "traffic": "🚦"
    };
    
    return icons[category] || "📋";
  }
  
  // Get category name
  getCategoryName(category) {
    const names = {
      "roads": "Roads & Mining",
      "water": "Water & Sanitation",
      "electricity": "Electricity & Streetlights",
      "health": "Health & Ambulance",
      "education": "Education (Schools)",
      "farming": "Farmer Support",
      "ration": "PDS / Ration Issues",
      "environment": "Environment & Forest",
      "safety": "Women & Child Safety",
      "transport": "Transport",
      "potholes": "Potholes",
      "streetlights": "Streetlights",
      "garbage": "Garbage Collection",
      "traffic": "Traffic Management"
    };
    
    return names[category] || category.charAt(0).toUpperCase() + category.slice(1);
  }
  
  // Update dynamic form fields based on selected category
  updateDynamicFormFields(category) {
    const container = document.getElementById("dynamicFields");
    if (!container) return;
    
    // Clear previous fields
    container.innerHTML = "";
    
    // Set category-specific styling
    container.setAttribute("data-category", category);
    
    // Add category-specific fields
    switch(category) {
      case "roads":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Road Type:</label>
            <select id="roadType" class="category-field">
              <option value="highway">Highway</option>
              <option value="main-road">Main Road</option>
              <option value="street">Street/Lane</option>
              <option value="bridge">Bridge</option>
              <option value="mining">Mining Area</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Issue Type:</label>
            <select id="roadIssueType" class="category-field">
              <option value="pothole">Potholes</option>
              <option value="damage">Road Damage</option>
              <option value="flooding">Flooding</option>
              <option value="construction">Incomplete Construction</option>
              <option value="mining-hazard">Mining Hazard</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>How long has this issue been present?</label>
            <select id="issueDuration" class="category-field">
              <option value="recent">Recent (< 1 week)</option>
              <option value="month">Weeks (< 1 month)</option>
              <option value="long">Long term (1+ months)</option>
            </select>
          </div>
        `;
        break;
        
      case "water":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Water Issue Type:</label>
            <select id="waterIssueType" class="category-field">
              <option value="supply">No Water Supply</option>
              <option value="quality">Poor Water Quality</option>
              <option value="pressure">Low Water Pressure</option>
              <option value="leakage">Water Leakage</option>
              <option value="drainage">Drainage Issues</option>
              <option value="sewage">Sewage Problems</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Area Affected:</label>
            <select id="areaAffected" class="category-field">
              <option value="household">Single Household</option>
              <option value="building">Building/Complex</option>
              <option value="street">Street/Lane</option>
              <option value="neighborhood">Neighborhood</option>
            </select>
          </div>
        `;
        break;
        
      case "electricity":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Electricity Issue:</label>
            <select id="electricityIssueType" class="category-field">
              <option value="outage">Power Outage</option>
              <option value="fluctuation">Voltage Fluctuation</option>
              <option value="streetlight">Streetlight Not Working</option>
              <option value="pole">Damaged Pole/Wire</option>
              <option value="billing">Billing Issue</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Duration:</label>
            <input type="text" id="outageTime" class="category-field" placeholder="How long (hours/days)">
          </div>
        `;
        break;
        
      case "health":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Facility Type:</label>
            <select id="healthFacilityType" class="category-field">
              <option value="hospital">Hospital</option>
              <option value="phc">Primary Health Center</option>
              <option value="substation">Health Sub-station</option>
              <option value="ambulance">Ambulance Service</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Issue Type:</label>
            <select id="healthIssueType" class="category-field">
              <option value="availability">Staff Unavailable</option>
              <option value="medicine">Medicine Shortage</option>
              <option value="equipment">Equipment Not Working</option>
              <option value="ambulance">Ambulance Delay/Issue</option>
              <option value="sanitation">Sanitation Problems</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Urgency Level:</label>
            <select id="healthUrgency" class="category-field">
              <option value="routine">Routine</option>
              <option value="important">Important</option>
              <option value="urgent">Urgent</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>
        `;
        break;
        
      case "education":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>School Type:</label>
            <select id="schoolType" class="category-field">
              <option value="primary">Primary School</option>
              <option value="middle">Middle School</option>
              <option value="high">High School</option>
              <option value="college">College</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Issue Type:</label>
            <select id="educationIssueType" class="category-field">
              <option value="infrastructure">Infrastructure</option>
              <option value="staff">Teacher/Staff</option>
              <option value="resources">Books/Resources</option>
              <option value="sanitation">Sanitation</option>
              <option value="midday">Mid-day Meal</option>
              <option value="scholarship">Scholarship</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>School Name:</label>
            <input type="text" id="schoolName" class="category-field" placeholder="Name of school">
          </div>
        `;
        break;
        
      case "farming":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Farming Issue:</label>
            <select id="farmingIssueType" class="category-field">
              <option value="irrigation">Irrigation Issues</option>
              <option value="subsidy">Subsidy Problems</option>
              <option value="seed">Seed/Fertilizer Quality</option>
              <option value="msp">MSP/Procurement</option>
              <option value="equipment">Equipment/Technology</option>
              <option value="storage">Storage Facilities</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Crop Type:</label>
            <input type="text" id="cropType" class="category-field" placeholder="What crop is affected?">
          </div>
          <div class="dynamic-field">
            <label>Land Area Affected:</label>
            <input type="text" id="landArea" class="category-field" placeholder="Area in acres/hectares">
          </div>
        `;
        break;
        
      case "ration":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>PDS Issue Type:</label>
            <select id="rationIssueType" class="category-field">
              <option value="card">Ration Card Issues</option>
              <option value="availability">Ration Not Available</option>
              <option value="quality">Poor Quality Supplies</option>
              <option value="behavior">Shop Owner Behavior</option>
              <option value="overcharging">Overcharging</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Fair Price Shop ID:</label>
            <input type="text" id="shopId" class="category-field" placeholder="Fair Price Shop Number/ID">
          </div>
        `;
        break;
        
      case "environment":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Environmental Issue:</label>
            <select id="environmentIssueType" class="category-field">
              <option value="pollution">Pollution</option>
              <option value="waste">Waste Dumping</option>
              <option value="deforestation">Deforestation</option>
              <option value="mining">Illegal Mining</option>
              <option value="water-body">Water Body Encroachment</option>
              <option value="wildlife">Wildlife Concerns</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Scale of Impact:</label>
            <select id="environmentalImpact" class="category-field">
              <option value="local">Localized</option>
              <option value="community">Community-wide</option>
              <option value="district">District-level</option>
              <option value="state">State-level</option>
            </select>
          </div>
        `;
        break;
        
      case "safety":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Safety Concern:</label>
            <select id="safetyIssueType" class="category-field">
              <option value="harassment">Harassment</option>
              <option value="unsafe-area">Unsafe Area</option>
              <option value="child-safety">Child Safety</option>
              <option value="poor-lighting">Poor Lighting</option>
              <option value="trafficking">Trafficking Concerns</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Time of Day:</label>
            <select id="safetyTimeOfDay" class="category-field">
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
              <option value="all-times">All Times</option>
            </select>
          </div>
          <div class="dynamic-field">
            <div class="checkbox-field">
              <input type="checkbox" id="anonymousReport">
              <label for="anonymousReport">Submit Anonymously</label>
            </div>
          </div>
        `;
        break;
        
      case "transport":
        container.innerHTML = `
          <div class="dynamic-field">
            <label>Transport Issue:</label>
            <select id="transportIssueType" class="category-field">
              <option value="bus">Bus Service</option>
              <option value="auto">Auto/Taxi Service</option>
              <option value="routes">Route Problems</option>
              <option value="overcharging">Overcharging</option>
              <option value="schedule">Schedule Not Followed</option>
              <option value="condition">Vehicle Condition</option>
            </select>
          </div>
          <div class="dynamic-field">
            <label>Route/Vehicle Number:</label>
            <input type="text" id="routeNumber" class="category-field" placeholder="Route or vehicle number">
          </div>
        `;
        break;
        
      // Default case for original categories
      default:
        // No additional fields needed
        break;
    }
    
    // Add animation to show fields
    if (container.innerHTML !== "") {
      container.style.display = "block";
      setTimeout(() => {
        container.classList.add("fields-visible");
      }, 50);
    } else {
      container.classList.remove("fields-visible");
      setTimeout(() => {
        container.style.display = "none";
      }, 300);
    }
  }

  // -------------------- WASTE MANAGEMENT --------------------
  bindWasteForm() {
    const form = document.getElementById('wasteForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('wasteTitle').value.trim();
      const location = document.getElementById('wasteLocation').value.trim();
      const type = document.getElementById('wasteType').value;
      const description = document.getElementById('wasteDesc').value.trim();
      const vehicle = document.getElementById('wasteVehicle').value.trim();

      if (title.length < 5) return this.showNotification('Title should be at least 5 characters');
      if (description.length < 10) return this.showNotification('Please provide a more detailed description');

      const report = { id: Date.now(), title, location, type, description, vehicle, createdAt: new Date().toISOString(), status: 'Pending' };
      this.wasteReports.unshift(report);
      localStorage.setItem('wasteReports', JSON.stringify(this.wasteReports));
      this.showNotification('Waste report submitted');
      form.reset();
      if (vehicle) this.trackVehicle(vehicle);
      this.renderWasteFeed();
    });

    const back = document.getElementById('wasteBack');
    if (back) back.addEventListener('click', () => this.switchRole('home'));
    this.renderWasteFeed();
    this.renderWasteVehicles();
  }

  // -------------------- UTILITY MONITOR --------------------
  bindUtilityForms() {
    const meterForm = document.getElementById('meterForm');
    if (meterForm) {
      meterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('meterId').value.trim();
        const value = parseFloat(document.getElementById('meterValue').value);
        const location = document.getElementById('meterLocation').value.trim();
        if (!id || isNaN(value)) return this.showNotification('Invalid meter entry');
        const reading = { id, value, location, time: new Date().toISOString() };
        this.utilityMeters.unshift(reading);
        localStorage.setItem('utilityMeters', JSON.stringify(this.utilityMeters));
        this.showNotification('Meter reading recorded');
        meterForm.reset();
        this.renderMeterReadings();
      });
    }

    const issueForm = document.getElementById('utilityIssueForm');
    if (issueForm) {
      issueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('utilityTitle').value.trim();
        const location = document.getElementById('utilityIssueLocation').value.trim();
        const severity = document.getElementById('utilitySeverity').value;
        const desc = document.getElementById('utilityDesc').value.trim();
        if (title.length < 5 || desc.length < 10) return this.showNotification('Provide valid details');
        const rep = { id: Date.now(), title, location, severity, desc, status: 'Pending', createdAt: new Date().toISOString() };
        this.utilityReports.unshift(rep);
        localStorage.setItem('utilityReports', JSON.stringify(this.utilityReports));
        this.showNotification('Maintenance issue reported');
        issueForm.reset();
        this.renderUtilityReports();
      });
    }

    const back = document.getElementById('utilityBack');
    if (back) back.addEventListener('click', () => this.switchRole('home'));
    this.renderMeterReadings();
    this.renderUtilityReports();
  }

  // -------------------- MRT OPERATIONS --------------------
  bindMRTForms() {
    const form = document.getElementById('mrtReportForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('mrtTitle').value.trim();
      const vehicle = document.getElementById('mrtVehicle').value.trim();
      const location = document.getElementById('mrtLocation').value.trim();
      const severity = document.getElementById('mrtSeverity').value;
      const desc = document.getElementById('mrtDesc').value.trim();
      if (title.length < 5 || desc.length < 10) return this.showNotification('Provide valid details');
      const rep = { id: Date.now(), title, vehicle, location, severity, desc, status: 'Open', createdAt: new Date().toISOString() };
      this.mrtReports.unshift(rep);
      localStorage.setItem('mrtReports', JSON.stringify(this.mrtReports));
      this.showNotification('MRT report submitted');
      form.reset();
      if (vehicle) this.trackMRTVehicle(vehicle);
      this.renderMRTReports();
      this.renderMRTVehicles();
    });

    const back = document.getElementById('mrtBack');
    if (back) back.addEventListener('click', () => this.switchRole('home'));
    this.renderMRTReports();
    this.renderMRTVehicles();
  }

  renderMRTReports() {
    const el = document.getElementById('mrtReportsList');
    if (!el) return;
    if (!this.mrtReports || this.mrtReports.length === 0) { el.innerHTML = '<div class="empty-state"><p>No reports yet.</p></div>'; return; }
    el.innerHTML = this.mrtReports.map(r => `<div class="mrt-report-card"><h4>${r.title}</h4><small>${new Date(r.createdAt).toLocaleString()} • ${r.location} • ${r.severity}</small><p>${r.desc}</p>${r.vehicle ? `<div>Vehicle: ${r.vehicle}</div>` : ''}</div>`).join('');
  }

  renderMRTVehicles() {
    const el = document.getElementById('mrtVehiclesList');
    if (!el) return;
    if (!this.mrtVehicles || this.mrtVehicles.length === 0) { el.innerHTML = '<div class="empty-state"><p>No vehicles tracked.</p></div>'; return; }
    el.innerHTML = this.mrtVehicles.map(v => `<div class="mrt-vehicle-card"><strong>${v.number}</strong><div>Last seen: ${new Date(v.lastSeen).toLocaleString()}</div><div>Sightings: ${v.sightings}</div><div><button class="btn btn--sm" onclick="app.assignMRTMaintenance('${v.number}')">Assign Maintenance</button></div></div>`).join('');
  }

  trackMRTVehicle(number) {
    let v = this.mrtVehicles.find(x => x.number === number);
    if (!v) { v = { number, sightings: 1, lastSeen: new Date().toISOString() }; this.mrtVehicles.unshift(v); }
    else { v.sightings += 1; v.lastSeen = new Date().toISOString(); }
    localStorage.setItem('mrtVehicles', JSON.stringify(this.mrtVehicles));
    this.renderMRTVehicles();
  }

  assignMRTMaintenance(number) {
    this.showNotification(`Maintenance assigned for vehicle ${number} (simulation)`);
  }

  renderMeterReadings() {
    const el = document.getElementById('meterReadingsList');
    if (!el) return;
    if (!this.utilityMeters || this.utilityMeters.length === 0) { el.innerHTML = '<div class="empty-state"><p>No readings yet.</p></div>'; return; }
    el.innerHTML = this.utilityMeters.map(r => `<div class="meter-card"><strong>${r.id}</strong><div>${r.value} units</div><div>${r.location}</div><small>${new Date(r.time).toLocaleString()}</small></div>`).join('');
  }

  renderUtilityReports() {
    const el = document.getElementById('utilityReportsList');
    if (!el) return;
    if (!this.utilityReports || this.utilityReports.length === 0) { el.innerHTML = '<div class="empty-state"><p>No reports yet.</p></div>'; return; }
    el.innerHTML = this.utilityReports.map(r => `<div class="utility-report-card"><h4>${r.title}</h4><small>${new Date(r.createdAt).toLocaleString()} • ${r.location} • ${r.severity}</small><p>${r.desc}</p></div>`).join('');
  }

  // -------------------- MRT OPERATIONS --------------------
  bindMRTForms() {
    const form = document.getElementById('mrtIssueForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const line = document.getElementById('mrtLine').value.trim();
        const vehicle = document.getElementById('mrtVehicle').value.trim();
        const location = document.getElementById('mrtLocation').value.trim();
        const severity = document.getElementById('mrtSeverity').value;
        const desc = document.getElementById('mrtDesc').value.trim();
        if (line.length < 2 || desc.length < 10) return this.showNotification('Provide valid MRT issue details');
        const report = { id: Date.now(), line, vehicle, location, severity, desc, status: 'Pending', createdAt: new Date().toISOString() };
        this.mrtReports.unshift(report);
        localStorage.setItem('mrtReports', JSON.stringify(this.mrtReports));
        this.showNotification('MRT maintenance issue reported');
        form.reset();
        this.renderMRTStatus();
      });
    }

    const back = document.getElementById('mrtBack');
    if (back) back.addEventListener('click', () => this.switchRole('home'));
    this.renderMRTStatus();
  }

  renderMRTStatus() {
    const statusEl = document.getElementById('mrtStatus');
    const trainsEl = document.getElementById('mrtTrainsList');
    if (statusEl) {
      statusEl.textContent = this.mrtReports.length === 0 ? 'All systems nominal' : `${this.mrtReports.length} issue(s) reported`;
    }
    if (trainsEl) {
      if (!this.mrtTrains || this.mrtTrains.length === 0) {
        trainsEl.innerHTML = '<div class="empty-state"><p>No active trains.</p></div>';
      } else {
        trainsEl.innerHTML = this.mrtTrains.map(t => `<div class="train-card"><strong>${t.id}</strong><div>Route: ${t.route}</div><div>Status: ${t.status}</div></div>`).join('');
      }
    }
  }

  renderWasteFeed() {
    const list = document.getElementById('wasteFeedList');
    if (!list) return;
    if (!this.wasteReports || this.wasteReports.length === 0) {
      list.innerHTML = '<div class="empty-state"><p>No reports yet.</p></div>';
      return;
    }
    list.innerHTML = this.wasteReports.map(r => `
      <div class="waste-report-card">
        <h4>${r.title}</h4>
        <small>${new Date(r.createdAt).toLocaleString()} • ${r.location} • ${r.type}</small>
        <p>${r.description}</p>
        ${r.vehicle ? `<div>Vehicle: ${r.vehicle} <button class="btn btn--sm" onclick="app.flagVehicle('${r.vehicle}')">Flag/Fine</button></div>` : ''}
      </div>
    `).join('');
  }

  trackVehicle(vehicleNumber) {
    // Add/update vehicle entry
    let v = this.wasteVehicles.find(x => x.number === vehicleNumber);
    if (!v) {
      v = { number: vehicleNumber, sightings: 1, lastSeen: new Date().toISOString() };
      this.wasteVehicles.unshift(v);
    } else {
      v.sightings += 1;
      v.lastSeen = new Date().toISOString();
    }
    localStorage.setItem('wasteVehicles', JSON.stringify(this.wasteVehicles));
    this.renderWasteVehicles();
  }

  renderWasteVehicles() {
    const list = document.getElementById('wasteVehiclesList');
    if (!list) return;
    if (!this.wasteVehicles || this.wasteVehicles.length === 0) {
      list.innerHTML = '<div class="empty-state"><p>No vehicles tracked.</p></div>';
      return;
    }
    list.innerHTML = this.wasteVehicles.map(v => `
      <div class="vehicle-card">
        <strong>${v.number}</strong>
        <div>Spotted: ${v.sightings} times</div>
        <div>Last: ${new Date(v.lastSeen).toLocaleString()}</div>
        <div><button class="btn btn--sm" onclick="app.flagVehicle('${v.number}')">Flag / Issue Fine</button></div>
      </div>
    `).join('');
  }

  flagVehicle(number) {
    // Simulate issuing a fine/report against the vehicle
    this.showNotification(`Vehicle ${number} flagged for investigation. (Simulation)`);
    // In a real app, this would create an enforcement record and notify authorities
  }

  // -------------------- RENDER --------------------
  renderCitizenReports() {
    const container = document.getElementById("trackTab");
    
    if (this.userReports.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📝</div>
          <h3>No Reports Yet</h3>
          <p>You haven't submitted any reports yet. Go to the Report tab to report an issue.</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = `
      <div class="report-filters">
        <select id="statusFilter">
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <select id="priorityFilter">
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div class="reports-list">
        ${this.userReports.map(issue => `
          <div class="report-card">
            <div class="report-header">
              <h3>${issue.title}</h3>
              <span class="status-badge status-${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span>
            </div>
            <div class="report-details">
              <p>${issue.description}</p>
              <div class="report-meta">
                <span class="report-category">${issue.category || 'General'}</span>
                <span class="report-priority priority-${issue.priority}">${issue.priority}</span>
                <span class="report-location">📍 ${issue.location}</span>
              </div>
            </div>
            <div class="report-actions">
              <button class="btn btn--outline btn--sm" onclick="app.showReportDetails(${issue.id})">View Details</button>
              ${issue.status !== "Resolved" ? 
                `<button class="btn btn--outline btn--sm" onclick="app.showUpdateForm(${issue.id})">Add Update</button>` : 
                ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    // Add filter functionality
    document.getElementById('statusFilter')?.addEventListener('change', this.filterUserReports.bind(this));
    document.getElementById('priorityFilter')?.addEventListener('change', this.filterUserReports.bind(this));
  }
  
  filterUserReports() {
    const statusFilter = document.getElementById('statusFilter')?.value;
    const priorityFilter = document.getElementById('priorityFilter')?.value;
    
    const filteredReports = document.querySelectorAll('.report-card');
    filteredReports.forEach(card => {
      const statusMatch = !statusFilter || card.querySelector('.status-badge').textContent === statusFilter;
      const priorityMatch = !priorityFilter || card.querySelector('.report-priority').textContent.toLowerCase() === priorityFilter;
      
      card.style.display = statusMatch && priorityMatch ? 'block' : 'none';
    });
  }
  
  showReportDetails(id) {
    const issue = this.userReports.find(i => i.id === id);
    if (!issue) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>${issue.title}</h2>
        <div class="issue-status">Status: <span class="status-badge status-${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span></div>
        <p class="issue-description">${issue.description}</p>
        <div class="issue-details">
          <div><strong>Category:</strong> ${issue.category || 'General'}</div>
          <div><strong>Priority:</strong> <span class="priority-${issue.priority}">${issue.priority}</span></div>
          <div><strong>Location:</strong> ${issue.location}</div>
          <div><strong>Reported:</strong> ${new Date().toLocaleDateString()}</div>
        </div>
        <div class="issue-updates">
          <h3>Updates</h3>
          <div class="update-timeline">
            <div class="timeline-item">
              <div class="timeline-icon">📝</div>
              <div class="timeline-content">
                <p><strong>Report Submitted</strong></p>
                <p>Your report has been received and is being reviewed.</p>
                <small>${new Date().toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    modal.querySelector('.close-modal').onclick = () => modal.remove();
  }
  
  showUpdateForm(id) {
    // This would open a form to add updates to an issue
    this.showNotification("Feature coming soon: Add updates to your reports");
  }

  renderCommunityIssues() {
    const container = document.getElementById("communityIssues");
    container.innerHTML = this.issues
      .map(issue => `
        <div class="issue-card">
          <strong>${issue.title}</strong>
          <p>${issue.description}</p>
          <span>Priority: ${issue.priority}</span>
          <button onclick="app.upvoteIssue(${issue.id})">👍 ${issue.upvotes}</button>
        </div>
      `)
      .join("");
  }

  renderAdminIssues() {
    const container = document.getElementById("issuesTable");
    
    if (this.issues.length === 0) {
      container.innerHTML = `<div class="empty-state"><p>No issues reported yet.</p></div>`;
      return;
    }
    
    container.innerHTML = `
      <div class="admin-controls">
        <div class="filters">
          <select id="adminStatusFilter">
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <select id="adminPriorityFilter">
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
          <select id="adminCategoryFilter">
            <option value="">All Categories</option>
            <option value="potholes">Potholes</option>
            <option value="streetlights">Streetlights</option>
            <option value="garbage">Garbage</option>
          </select>
        </div>
        <button class="btn btn--primary btn--sm" id="exportReportBtn">Export Report</button>
      </div>
      
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.issues.map(issue => `
            <tr>
              <td>${issue.id}</td>
              <td>${issue.title}</td>
              <td>${issue.category || 'General'}</td>
              <td><span class="priority-${issue.priority}">${issue.priority}</span></td>
              <td>${issue.location}</td>
              <td>
                <select onchange="app.updateIssueStatus(${issue.id}, this.value)">
                  <option ${issue.status==="Pending"?"selected":""}>Pending</option>
                  <option ${issue.status==="In Progress"?"selected":""}>In Progress</option>
                  <option ${issue.status==="Resolved"?"selected":""}>Resolved</option>
                </select>
              </td>
              <td>
                <button class="btn btn--outline btn--sm" onclick="app.viewIssueDetails(${issue.id})">View</button>
                <button class="btn btn--outline btn--sm" onclick="app.assignIssue(${issue.id})">Assign</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    
    document.getElementById('exportReportBtn')?.addEventListener('click', this.exportReport.bind(this));
    document.getElementById('adminStatusFilter')?.addEventListener('change', this.filterAdminIssues.bind(this));
    document.getElementById('adminPriorityFilter')?.addEventListener('change', this.filterAdminIssues.bind(this));
    document.getElementById('adminCategoryFilter')?.addEventListener('change', this.filterAdminIssues.bind(this));
  }
  
  viewIssueDetails(id) {
    const issue = this.issues.find(i => i.id === id);
    if (!issue) return;
    
    this.showNotification(`Viewing issue: ${issue.title}`);
    // We would show a modal with details here in a full implementation
  }
  
  assignIssue(id) {
    this.showNotification("Assignment feature coming soon");
    // This would open a modal to assign the issue to a department
  }
  
  exportReport() {
    this.showNotification("Report exported (simulation)");
    // This would generate a CSV or PDF report in a full implementation
  }
  
  filterAdminIssues() {
    const statusFilter = document.getElementById('adminStatusFilter')?.value;
    const priorityFilter = document.getElementById('adminPriorityFilter')?.value;
    const categoryFilter = document.getElementById('adminCategoryFilter')?.value;
    
    const rows = document.querySelectorAll('.admin-table tbody tr');
    rows.forEach(row => {
      const status = row.querySelector('select').value;
      const priority = row.querySelector('.priority-low, .priority-medium, .priority-high, .priority-urgent')?.textContent;
      const category = row.children[2].textContent;
      
      const statusMatch = !statusFilter || status === statusFilter;
      const priorityMatch = !priorityFilter || priority.toLowerCase() === priorityFilter;
      const categoryMatch = !categoryFilter || category === categoryFilter;
      
      row.style.display = statusMatch && priorityMatch && categoryMatch ? '' : 'none';
    });
  }

  upvoteIssue(id) {
    const issue = this.issues.find(i => i.id === id);
    if (issue) {
      issue.upvotes++;
      this.renderCommunityIssues();
    }
  }

  updateIssueStatus(id, status) {
    const issue = this.issues.find(i => i.id === id);
    if (issue) {
      issue.status = status;
      
      // Update the user reports as well if it's in there
      const userIssue = this.userReports.find(i => i.id === id);
      if (userIssue) {
        userIssue.status = status;
      }
      
      this.renderCitizenReports();
      this.renderAdminIssues();
      this.renderDashboardCharts();
      this.updateDashboardSummary();
      this.showNotification(`${this.t("notification_status_updated")}: "${issue.title}" -> ${status}`);
    }
  }
  
  updateDashboardSummary() {
    const totalElement = document.getElementById('totalIssuesValue');
    const pendingElement = document.getElementById('pendingIssuesValue');
    const inProgressElement = document.getElementById('inProgressIssuesValue');
    const resolvedElement = document.getElementById('resolvedIssuesValue');
    
    if (totalElement) totalElement.textContent = this.issues.length;
    
    const pendingCount = this.issues.filter(i => i.status === "Pending").length;
    const inProgressCount = this.issues.filter(i => i.status === "In Progress").length;
    const resolvedCount = this.issues.filter(i => i.status === "Resolved").length;
    
    if (pendingElement) pendingElement.textContent = pendingCount;
    if (inProgressElement) inProgressElement.textContent = inProgressCount;
    if (resolvedElement) resolvedElement.textContent = resolvedCount;
  }

  // -------------------- MAPS --------------------
  initMapViews() {
    // Citizen map
    this.map = L.map("communityMap").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);

    // Admin map
    this.adminMap = L.map("adminMap").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.adminMap);
  }

  // -------------------- CHARTS --------------------
  initCharts() {
    // In a real implementation, this would use actual Chart.js
    // Using placeholder visualization for demo purposes
    this.renderDashboardCharts();
  }
  
  renderDashboardCharts() {
    // Sample chart that would use Chart.js in a real implementation
    const ctx = document.getElementById('issuesChart');
    if (ctx) {
      const pendingCount = this.issues.filter(i => i.status === "Pending").length;
      const inProgressCount = this.issues.filter(i => i.status === "In Progress").length;
      const resolvedCount = this.issues.filter(i => i.status === "Resolved").length;
      
      const categoryCounts = {
        potholes: this.issues.filter(i => i.category === "potholes").length,
        streetlights: this.issues.filter(i => i.category === "streetlights").length,
        garbage: this.issues.filter(i => i.category === "garbage").length,
        other: this.issues.filter(i => !i.category || !["potholes", "streetlights", "garbage"].includes(i.category)).length
      };
      
      const priorityCounts = {
        low: this.issues.filter(i => i.priority === "low").length,
        medium: this.issues.filter(i => i.priority === "medium").length,
        high: this.issues.filter(i => i.priority === "high").length,
        urgent: this.issues.filter(i => i.priority === "urgent").length
      };
      
      ctx.innerHTML = `
        <div class="dashboard-charts">
          <div class="chart">
            <h3>Issues by Status</h3>
            <div class="chart-visual">
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${pendingCount * 20 || 5}px; background-color: #FFA500;">
                  <span class="chart-value">${pendingCount}</span>
                </div>
                <div class="chart-label">Pending</div>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${inProgressCount * 20 || 5}px; background-color: #3498DB;">
                  <span class="chart-value">${inProgressCount}</span>
                </div>
                <div class="chart-label">In Progress</div>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${resolvedCount * 20 || 5}px; background-color: #2ECC71;">
                  <span class="chart-value">${resolvedCount}</span>
                </div>
                <div class="chart-label">Resolved</div>
              </div>
            </div>
          </div>
          
          <div class="chart">
            <h3>Issues by Category</h3>
            <div class="chart-visual">
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${categoryCounts.potholes * 20 || 5}px; background-color: #E74C3C;">
                  <span class="chart-value">${categoryCounts.potholes}</span>
                </div>
                <div class="chart-label">Potholes</div>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${categoryCounts.streetlights * 20 || 5}px; background-color: #F39C12;">
                  <span class="chart-value">${categoryCounts.streetlights}</span>
                </div>
                <div class="chart-label">Streetlights</div>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${categoryCounts.garbage * 20 || 5}px; background-color: #9B59B6;">
                  <span class="chart-value">${categoryCounts.garbage}</span>
                </div>
                <div class="chart-label">Garbage</div>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${categoryCounts.other * 20 || 5}px; background-color: #7F8C8D;">
                  <span class="chart-value">${categoryCounts.other}</span>
                </div>
                <div class="chart-label">Other</div>
              </div>
            </div>
          </div>
          
          <div class="chart">
            <h3>Issues by Priority</h3>
            <div class="donut-chart">
              <div class="donut-placeholder">
                <div class="donut-segment" style="--percent: ${priorityCounts.urgent * 100 / Math.max(1, this.issues.length)}; --color: #FF0000;">Urgent</div>
                <div class="donut-segment" style="--percent: ${priorityCounts.high * 100 / Math.max(1, this.issues.length)}; --color: #FF7F00;">High</div>
                <div class="donut-segment" style="--percent: ${priorityCounts.medium * 100 / Math.max(1, this.issues.length)}; --color: #FFFF00;">Medium</div>
                <div class="donut-segment" style="--percent: ${priorityCounts.low * 100 / Math.max(1, this.issues.length)}; --color: #00FF00;">Low</div>
              </div>
              <div class="donut-legend">
                <div class="legend-item"><span class="legend-color" style="background-color: #FF0000;"></span>Urgent (${priorityCounts.urgent})</div>
                <div class="legend-item"><span class="legend-color" style="background-color: #FF7F00;"></span>High (${priorityCounts.high})</div>
                <div class="legend-item"><span class="legend-color" style="background-color: #FFFF00;"></span>Medium (${priorityCounts.medium})</div>
                <div class="legend-item"><span class="legend-color" style="background-color: #00FF00;"></span>Low (${priorityCounts.low})</div>
              </div>
            </div>
          </div>
          
          <div class="chart">
            <h3>Monthly Trend</h3>
            <div class="line-chart-placeholder">
              <div class="line-chart">
                <div class="line-point" style="bottom: 20%; left: 10%;" title="January: 8"></div>
                <div class="line-point" style="bottom: 40%; left: 25%;" title="February: 12"></div>
                <div class="line-point" style="bottom: 30%; left: 40%;" title="March: 10"></div>
                <div class="line-point" style="bottom: 60%; left: 55%;" title="April: 16"></div>
                <div class="line-point" style="bottom: 50%; left: 70%;" title="May: 14"></div>
                <div class="line-point" style="bottom: 80%; left: 85%;" title="June: 22"></div>
                <div class="line-connector"></div>
              </div>
              <div class="chart-axis-x">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  // -------------------- THEME + LANG --------------------
  initThemeAndLanguage() {
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      
      // Update button text based on theme
      if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";  // Sun icon for light mode
        themeToggle.setAttribute("title", "Switch to light mode");
      } else {
        themeToggle.textContent = "🌙";  // Moon icon for dark mode
        themeToggle.setAttribute("title", "Switch to dark mode");
      }
      
      // Show notification
      this.showNotification("Theme changed successfully!");
    });

    const languageToggle = document.getElementById("languageToggle");
    if (languageToggle) {
      languageToggle.addEventListener("click", (e) => {
        this.currentLanguage = this.currentLanguage === "en" ? "hi" : "en";
        e.target.textContent = this.currentLanguage === "en" ? "🌐 HI" : "🌐 EN";
        this.translateUI();
        this.showNotification(this.t("notification_language_toggled"));
      });
    }

    // Language select dropdown (for multiple languages)
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
      // Populate options dynamically if translations added later
      languageSelect.innerHTML = Object.keys(this.translations).map(code => {
        const name = (this.translations[code] && this.translations[code].localeName) || code;
        return `<option value="${code}" ${code === this.currentLanguage ? 'selected' : ''}>${name}</option>`;
      }).join('');

      languageSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (this.translations[val]) {
          this.currentLanguage = val;
          // Update toggle button text for quick switch awareness
          if (languageToggle) languageToggle.textContent = this.currentLanguage === 'en' ? '🌐 HI' : '🌐 EN';
          this.translateUI();
          this.showNotification(this.t('notification_language_toggled'));
        }
      });
    }

    // Background picker for gallery viewport
    const bgPicker = document.getElementById('bgPicker');
    const gallery = document.getElementById('gallery');
    if (bgPicker && gallery) {
      const options = bgPicker.querySelectorAll('.bg-option');
      const clearBtn = document.getElementById('bgClear');

      function setActiveButton(imgSrc) {
        options.forEach(b => b.classList.toggle('active', b.dataset.img === imgSrc));
      }

      // Load saved background
      const saved = localStorage.getItem('galleryBackground');
      if (saved) {
        gallery.style.backgroundImage = `url('${saved}')`;
        setActiveButton(saved);
      }

      options.forEach(btn => {
        btn.addEventListener('click', () => {
          const img = btn.dataset.img;
          gallery.style.backgroundImage = `url('${img}')`;
          setActiveButton(img);
          localStorage.setItem('galleryBackground', img);
        });
      });

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          gallery.style.backgroundImage = '';
          options.forEach(b => b.classList.remove('active'));
          localStorage.removeItem('galleryBackground');
        });
      }
    }
  }

  showGovernmentDocs() {
    // Open the Government Documents interface
    this.switchRole('govdocs');
    // Render gov docs content and wire back button
    this.renderGovDocs();
  }

  renderGovDocs() {
    const container = document.getElementById('govDocsInterface');
    if (!container) return;
    // Wire back button
    const back = document.getElementById('govDocsBack');
    if (back) back.addEventListener('click', () => this.switchRole('home'));
    // Optionally, we could dynamically build the cards; static HTML exists so no further action needed
  }

  // -------------------- i18n --------------------
  t(key) {
    return this.translations[this.currentLanguage][key] || key;
  }

  translateUI() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });
  }

  // -------------------- MAIN NAVIGATION --------------------
  initMainNavigation() {
    // Handle navigation links highlighting
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Handle specific navigation actions
        const id = link.id;
        if (id === 'nav-home') {
          this.switchRole('home');
        } else if (id === 'nav-services') {
          this.showNotification('Services page coming soon');
        } else if (id === 'nav-about') {
          this.showNotification('About Us page coming soon');
        } else if (id === 'nav-contact') {
          this.showNotification('Contact page coming soon');
        }
      });
    });
    
    // Handle dropdown items
    document.getElementById('nav-report-issue').addEventListener('click', (e) => {
      e.preventDefault();
      this.switchRole('citizen');
      document.querySelector('[data-tab="report"]').click();
    });
    
    document.getElementById('nav-track-issue').addEventListener('click', (e) => {
      e.preventDefault();
      this.switchRole('citizen');
      document.querySelector('[data-tab="track"]').click();
    });
    
    document.getElementById('nav-emergency').addEventListener('click', (e) => {
      e.preventDefault();
      this.showNotification('Emergency contact: 100 (Police), 101 (Fire), 102 (Ambulance)');
    });
    
    // Handle search
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    searchBtn.addEventListener('click', () => {
      if (searchInput.value.trim()) {
        this.performSearch(searchInput.value.trim());
      }
    });
    
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        this.performSearch(searchInput.value.trim());
      }
    });
  }
  
  performSearch(query) {
    this.showNotification(`Searching for: "${query}"`);
    // In a real application, this would connect to a search API
    setTimeout(() => {
      this.showNotification(`Found 3 results for "${query}". Feature coming soon.`);
    }, 1000);
  }

  // -------------------- NOTIFICATION --------------------
  showNotification(msg) {
    const container = document.getElementById("notificationContainer");
    if (!container) {
      console.error("Notification container not found");
      return;
    }
    
    const note = document.createElement("div");
    note.className = "notification";
    note.textContent = msg;
    
    // Add animation classes
    note.classList.add("notification-slide-in");
    
    // Add to container
    container.appendChild(note);
    
    // Remove after animation completes
    setTimeout(() => {
      note.classList.add("notification-fade-out");
      setTimeout(() => note.remove(), 500);
    }, 4000);
    
    // Log for debugging
    console.log("Notification:", msg);
  }
  
  // -------------------- REAL-TIME UPDATES --------------------
  initRealTimeUpdates() {
    this.realTimeContainer = document.getElementById('realTimeUpdatesContainer');
    this.realTimeList = document.getElementById('realTimeUpdatesList');
    this.lastUpdatedElement = document.getElementById('lastUpdatedTime');
    
    if (!this.realTimeContainer || !this.realTimeList || !this.lastUpdatedElement) {
      console.error('Real-time updates elements not found in the DOM');
      return;
    }
    
    // Add active class to make it visible initially
    this.realTimeContainer.classList.add('active');
    
    // Setup close button
    const closeButton = document.getElementById('closeRealTimeUpdates');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.realTimeContainer.classList.remove('active');
      });
    }
    
    // Initialize updates array
    this.updates = [];
    
    // Start simulation of real-time updates
    this.simulateRealTimeUpdates();
  }
  
  simulateRealTimeUpdates() {
    // Show container initially with a small delay
    setTimeout(() => {
      this.realTimeContainer.classList.add('active');
    }, 2000);
    
    // Generate random updates periodically
    this.updateInterval = setInterval(() => {
      this.generateRandomUpdate();
    }, Math.random() * 15000 + 10000); // Random interval between 10-25 seconds
    
    // Initial update
    this.generateRandomUpdate();
  }
  
  generateRandomUpdate() {
    const updateTypes = [
      { type: 'New Issue', icon: '🔴' },
      { type: 'Status Change', icon: '🔄' },
      { type: 'Resolution', icon: '✅' },
      { type: 'Comment', icon: '💬' },
      { type: 'Assignment', icon: '👤' }
    ];
    
    const locations = [
      'Main Street', 'Park Avenue', 'City Center', 'Riverside Drive', 
      'Metro Station', 'Central Park', 'School Zone', 'Market Area'
    ];
    
    const issues = [
      'Pothole', 'Streetlight', 'Garbage Collection', 'Water Leak', 
      'Fallen Tree', 'Graffiti', 'Road Sign', 'Traffic Signal'
    ];
    
    const statuses = ['Reported', 'Assigned', 'In Progress', 'Completed', 'Verified'];
    
    const randomUpdate = updateTypes[Math.floor(Math.random() * updateTypes.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomIssue = issues[Math.floor(Math.random() * issues.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    let updateContent = '';
    
    switch(randomUpdate.type) {
      case 'New Issue':
        updateContent = `${randomIssue} reported at ${randomLocation}`;
        break;
      case 'Status Change':
        updateContent = `${randomIssue} at ${randomLocation} is now ${randomStatus}`;
        break;
      case 'Resolution':
        updateContent = `${randomIssue} at ${randomLocation} has been resolved`;
        break;
      case 'Comment':
        updateContent = `New comment on ${randomIssue} at ${randomLocation}`;
        break;
      case 'Assignment':
        updateContent = `${randomIssue} at ${randomLocation} assigned to dept.`;
        break;
    }
    
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    this.addUpdate({
      content: updateContent,
      type: randomUpdate.type,
      icon: randomUpdate.icon,
      time: time
    });
  }
  
  addUpdate(update) {
    // Add to internal array
    this.updates.unshift(update);
    
    // Limit to 50 updates
    if (this.updates.length > 50) {
      this.updates.pop();
    }
    
    // Create DOM element
    const updateElement = document.createElement('div');
    updateElement.className = 'update-item update-item-new';
    
    // Add content
    updateElement.innerHTML = `
      <div class="update-content">${update.icon} ${update.content}</div>
      <div class="update-meta">
        <span class="update-type">${update.type}</span>
        <span class="update-time">${update.time}</span>
      </div>
    `;
    
    // Add to container
    this.realTimeList.prepend(updateElement);
    
    // Remove new class after animation
    setTimeout(() => {
      updateElement.classList.remove('update-item-new');
    }, 3000);
    
    // Update timestamp
    this.updateTimestamp();
    
    // Show container if hidden
    if (!this.realTimeContainer.classList.contains('active')) {
      this.realTimeContainer.classList.add('active');
    }
    
    // Limit DOM elements
    while (this.realTimeList.children.length > 10) {
      this.realTimeList.removeChild(this.realTimeList.lastChild);
    }
  }
  
  updateTimestamp() {
    const now = new Date();
    this.lastUpdatedElement.textContent = `Last updated: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  // Render citizen reports in the tracking tab
  renderCitizenReports() {
    const trackTab = document.getElementById("trackTab");
    if (!trackTab) return;
    
    if (this.userReports.length === 0) {
      trackTab.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <h3>No Reports Yet</h3>
          <p>You haven't submitted any reports yet. Go to the Report tab to report an issue.</p>
        </div>
      `;
      return;
    }
    
    // Show notification for demonstration
    this.showNotification("Your reports have been updated!");
    
    let html = `
      <div class="reports-list">
        <h3>Your Submitted Reports</h3>
        <div class="reports-grid">
    `;
    
    this.userReports.forEach(report => {
      let statusClass = "";
      let statusEmoji = "";
      
      switch(report.status.toLowerCase()) {
        case "pending":
          statusClass = "status-pending";
          statusEmoji = "⏳";
          break;
        case "in progress":
          statusClass = "status-in-progress";
          statusEmoji = "🔄";
          break;
        case "resolved":
          statusClass = "status-resolved";
          statusEmoji = "✅";
          break;
        default:
          statusClass = "status-other";
          statusEmoji = "❓";
      }
      
      // Get category icon
      let categoryIcon = this.getCategoryIcon(report.category);
      let categoryClass = `category-badge-${report.category}`;
      
      html += `
        <div class="report-card">
          <div class="report-header">
            <h4>${report.title}</h4>
            <span class="report-status ${statusClass}">${statusEmoji} ${report.status}</span>
          </div>
          <div class="report-details">
            <p>${report.description}</p>
            <div class="report-meta">
              <span class="category-badge ${categoryClass}">${categoryIcon} ${this.getCategoryName(report.category)}</span>
              <span class="report-location">📍 ${report.location}</span>
              <span class="report-date">📅 ${report.date || "Recent"}</span>
            </div>
          </div>
          <div class="report-actions">
            <button class="btn btn--sm">👍 ${report.upvotes || 0}</button>
            <button class="btn btn--sm">Check Status</button>
          </div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
    
    trackTab.innerHTML = html;
  }
  
  // Render community issues in the engage tab
  renderCommunityIssues() {
    const communityIssues = document.getElementById("communityIssues");
    if (!communityIssues) return;
    
    let html = `
      <h3>Community Issues</h3>
      <div class="filter-bar">
        <div class="filter-group">
          <label>Filter by:</label>
          <select class="filter-select">
            <option value="all">All Categories</option>
            <option value="potholes">Potholes</option>
            <option value="streetlights">Streetlights</option>
            <option value="garbage">Garbage</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Sort by:</label>
          <select class="filter-select">
            <option value="date">Newest</option>
            <option value="upvotes">Most Upvotes</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
      <div class="community-issues-list">
    `;
    
    this.issues.forEach(issue => {
      html += `
        <div class="community-issue-card">
          <div class="issue-header">
            <h4>${issue.title}</h4>
            <span class="issue-priority priority-${issue.priority.toLowerCase()}">${issue.priority}</span>
          </div>
          <p class="issue-description">${issue.description.substring(0, 100)}${issue.description.length > 100 ? '...' : ''}</p>
          <div class="issue-meta">
            <span class="issue-location">📍 ${issue.location}</span>
            <span class="issue-status status-${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span>
            <span class="issue-upvotes">👍 ${issue.upvotes || 0}</span>
          </div>
        </div>
      `;
    });
    
    html += `</div>`;
    communityIssues.innerHTML = html;
  }
  
  // Render admin issues in the manage tab
  renderAdminIssues() {
    const issuesTable = document.getElementById("issuesTable");
    if (!issuesTable) return;
    
    let html = `
      <h3>Manage Issues</h3>
      <div class="admin-tools">
        <div class="search-box">
          <input type="text" placeholder="Search issues..." class="admin-search">
          <button class="btn btn--primary btn--sm">Search</button>
        </div>
        <div class="filter-controls">
          <select class="filter-select">
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    this.issues.forEach(issue => {
      html += `
        <tr>
          <td>#${issue.id}</td>
          <td>${issue.title}</td>
          <td>${issue.category}</td>
          <td>${issue.location}</td>
          <td><span class="priority-badge priority-${issue.priority.toLowerCase()}">${issue.priority}</span></td>
          <td><span class="status-badge status-${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span></td>
          <td>${issue.date || "Recent"}</td>
          <td>
            <button class="btn btn--sm">View</button>
            <button class="btn btn--sm">Update</button>
          </td>
        </tr>
      `;
    });
    
    html += `
        </tbody>
      </table>
    `;
    
    issuesTable.innerHTML = html;
  }
  
  // Render department list
  renderDepartmentsList() {
    const departmentsList = document.getElementById("departmentsList");
    if (!departmentsList) return;
    
    let html = `
      <h3>Departments</h3>
      <div class="departments-grid">
    `;
    
    this.departments.forEach(dept => {
      html += `
        <div class="department-card">
          <h4>${dept.name}</h4>
          <div class="department-stats">
            <div class="department-stat">
              <span class="stat-value">${dept.performance}%</span>
              <span class="stat-label">Performance</span>
            </div>
            <div class="department-stat">
              <span class="stat-value">${dept.issuesHandled}</span>
              <span class="stat-label">Issues Handled</span>
            </div>
            <div class="department-stat">
              <span class="stat-value">${dept.avgResponseTime}</span>
              <span class="stat-label">Avg. Response</span>
            </div>
          </div>
          <div class="department-performance-bar">
            <div class="performance-fill" style="width: ${dept.performance}%"></div>
          </div>
          <button class="btn btn--outline btn--sm">View Details</button>
        </div>
      `;
    });
    
    html += `</div>`;
    departmentsList.innerHTML = html;
  }
  
  // Update dashboard summary values
  updateDashboardSummary() {
    const totalIssues = document.getElementById("totalIssuesValue");
    const pendingIssues = document.getElementById("pendingIssuesValue");
    const inProgressIssues = document.getElementById("inProgressIssuesValue");
    const resolvedIssues = document.getElementById("resolvedIssuesValue");
    
    if (totalIssues) totalIssues.textContent = this.issues.length;
    
    if (pendingIssues) {
      const pending = this.issues.filter(i => i.status.toLowerCase() === "pending").length;
      pendingIssues.textContent = pending;
    }
    
    if (inProgressIssues) {
      const inProgress = this.issues.filter(i => i.status.toLowerCase() === "in progress").length;
      inProgressIssues.textContent = inProgress;
    }
    
    if (resolvedIssues) {
      const resolved = this.issues.filter(i => i.status.toLowerCase() === "resolved").length;
      resolvedIssues.textContent = resolved;
    }
  }
  
  // Setup map view
  // Render government facilities
  renderGovernmentFacilities() {
    const facilitiesContainer = document.getElementById("facilitiesContainer");
    if (!facilitiesContainer) return;
    
    // Show notification for demonstration
    this.showNotification("Government facilities loaded successfully!");
    
    let html = `
      <h3>Government Facilities in Jharkhand</h3>
      <div class="facilities-filter">
        <div class="filter-group">
          <label>Filter by type:</label>
          <select id="facilityTypeFilter" class="facility-filter">
            <option value="all">All Types</option>
            <option value="hospital">Hospitals</option>
            <option value="education">Educational Institutions</option>
            <option value="government">Government Offices</option>
            <option value="judiciary">Judiciary</option>
            <option value="utility">Utility Services</option>
            <option value="transport">Transport Services</option>
            <option value="tourism">Tourism Services</option>
          </select>
        </div>
        <div class="search-box">
          <input type="text" id="facilitySearch" placeholder="Search facilities..." class="facility-search">
          <button id="searchFacilityBtn" class="btn btn--primary btn--sm">Search</button>
        </div>
      </div>
      
      <div class="facilities-grid" id="facilitiesGrid">
    `;
    
    this.governmentFacilities.forEach(facility => {
      // Generate icon based on facility type
      let icon = "🏢"; // Default icon
      switch(facility.type) {
        case "hospital":
          icon = "🏥";
          break;
        case "education":
          icon = "🏫";
          break;
        case "judiciary":
          icon = "⚖️";
          break;
        case "government":
          icon = "🏛️";
          break;
        case "utility":
          icon = "⚡";
          break;
        case "transport":
          icon = "🚌";
          break;
        case "tourism":
          icon = "🏞️";
          break;
      }
      
      // Create facility card
      html += `
        <div class="facility-card" data-type="${facility.type}">
          <div class="facility-icon">${icon}</div>
          <h4 class="facility-name">${facility.name}</h4>
          <p class="facility-address">${facility.address}</p>
          <div class="facility-details">
            <div class="facility-contact">
              <strong>Contact:</strong> ${facility.contact}
            </div>
            <div class="facility-timings">
              <strong>Timings:</strong> ${facility.timings}
            </div>
          </div>
          <div class="facility-services">
            <strong>Services:</strong>
            <ul>
              ${facility.services.slice(0, 3).map(service => `<li>${service}</li>`).join('')}
              ${facility.services.length > 3 ? `<li>+${facility.services.length - 3} more...</li>` : ''}
            </ul>
          </div>
          <div class="facility-actions">
            <button class="btn btn--sm btn--outline facility-map-btn" data-lat="${facility.coordinates.lat}" data-lng="${facility.coordinates.lng}">View on Map</button>
            <a href="${facility.website}" target="_blank" class="btn btn--sm btn--outline">Visit Website</a>
          </div>
        </div>
      `;
    });
    
    html += `
      </div>
      <div id="facilityMapContainer" class="facility-map-container">
        <div id="facilityMap" class="facility-map"></div>
        <button id="closeFacilityMap" class="btn btn--sm btn--primary map-close-btn">Close Map</button>
      </div>
    `;
    
    facilitiesContainer.innerHTML = html;
    
    // Add event listeners for filtering
    const typeFilter = document.getElementById("facilityTypeFilter");
    const searchInput = document.getElementById("facilitySearch");
    const searchBtn = document.getElementById("searchFacilityBtn");
    const facilitiesGrid = document.getElementById("facilitiesGrid");
    const closeFacilityMapBtn = document.getElementById("closeFacilityMap");
    const facilityMapContainer = document.getElementById("facilityMapContainer");
    
    if (typeFilter && searchBtn && searchInput && facilitiesGrid) {
      // Filter by type
      typeFilter.addEventListener("change", () => {
        this.filterFacilities(typeFilter.value, searchInput.value);
      });
      
      // Search functionality
      searchBtn.addEventListener("click", () => {
        this.filterFacilities(typeFilter.value, searchInput.value);
      });
      
      searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.filterFacilities(typeFilter.value, searchInput.value);
        }
      });
      
      // Map view functionality
      document.querySelectorAll(".facility-map-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const lat = parseFloat(btn.getAttribute("data-lat"));
          const lng = parseFloat(btn.getAttribute("data-lng"));
          this.showFacilityOnMap(lat, lng);
          if (facilityMapContainer) facilityMapContainer.style.display = "flex";
        });
      });
      
      // Close map button
      if (closeFacilityMapBtn && facilityMapContainer) {
        closeFacilityMapBtn.addEventListener("click", () => {
          facilityMapContainer.style.display = "none";
        });
      }
    }
  }
  
  // Filter facilities by type and search query
  filterFacilities(type, query) {
    const facilitiesGrid = document.getElementById("facilitiesGrid");
    if (!facilitiesGrid) return;
    
    const facilities = facilitiesGrid.querySelectorAll(".facility-card");
    const searchLower = query.toLowerCase();
    
    facilities.forEach(facility => {
      const facilityType = facility.getAttribute("data-type");
      const facilityName = facility.querySelector(".facility-name").textContent.toLowerCase();
      const facilityAddress = facility.querySelector(".facility-address").textContent.toLowerCase();
      
      const typeMatch = type === "all" || facilityType === type;
      const searchMatch = searchLower === "" || 
                         facilityName.includes(searchLower) || 
                         facilityAddress.includes(searchLower);
      
      if (typeMatch && searchMatch) {
        facility.style.display = "flex";
      } else {
        facility.style.display = "none";
      }
    });
  }
  
  // Show facility on map
  showFacilityOnMap(lat, lng) {
    const mapContainer = document.getElementById("facilityMap");
    if (!mapContainer) return;
    
    // Initialize map if Leaflet is available
    if (window.L) {
      // Clear existing map
      mapContainer.innerHTML = '';
      
      // Create map centered on facility location
      const map = L.map(mapContainer).setView([lat, lng], 15);
      
      // Add tile layer (OpenStreetMap)
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // If tile loading fails, show a small overlay and retry
      tileLayer.on('tileerror', function(err) {
        try {
          const overlay = document.createElement('div');
          overlay.className = 'map-tile-error';
          overlay.innerHTML = 'Map tiles failed to load. Retrying...';
          if (!mapContainer.querySelector('.map-tile-error')) mapContainer.appendChild(overlay);
          setTimeout(() => { try { tileLayer.redraw(); } catch(e){} }, 1500);
        } catch(e) {}
      });
      
      // Add marker for facility
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup("Government Facility")
        .openPopup();
    } else {
      mapContainer.innerHTML = '<div class="map-error">Map could not be loaded. Please check your connection.</div>';
    }
  }
  
  setupMap(mapId) {
    const mapContainer = document.getElementById(mapId);
    if (!mapContainer) return;
    
    // Initialize map if Leaflet is available
    if (window.L) {
      // Clear existing map
      mapContainer.innerHTML = '';
      
      // Create map centered on a default location (Jharkhand)
  const map = L.map(mapContainer).setView([23.6102, 85.2799], 8);
  // keep a reference to the map instance on the DOM container for later invalidateSize calls
  try { mapContainer._leaflet_map = map; } catch (e) { /* ignore */ }
      
      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      // Add markers for each issue (use saved coordinates when available)
      this.issues.forEach(issue => {
        let lat, lng;
        if (issue.coordinates && issue.coordinates.lat && issue.coordinates.lng) {
          lat = issue.coordinates.lat;
          lng = issue.coordinates.lng;
        } else {
          // generate demo coords near Ranchi and persist in-memory so clicks work consistently
          lat = 23.6102 + (Math.random() - 0.5) * 0.5;
          lng = 85.2799 + (Math.random() - 0.5) * 0.5;
          issue.coordinates = { lat, lng };
        }

        // Create marker with popup including a View link
        const marker = L.marker([lat, lng]).addTo(map);
        const popupHtml = `
          <div class="popup-issue">
            <strong>${issue.title}</strong><br>
            Status: ${issue.status}<br>
            Priority: ${issue.priority}<br>
            Category: ${issue.category}<br>
            <a href="#" class="view-report" data-id="${issue.id}">View Details</a>
          </div>`;
        marker.bindPopup(popupHtml);
      });

      // When any popup opens, wire its View link to call the app's showReportDetails
      map.on('popupopen', (e) => {
        const node = e.popup.getElement ? e.popup.getElement() : null;
        if (!node) return;
        const link = node.querySelector('.view-report');
        if (link) {
          link.addEventListener('click', (ev) => {
            ev.preventDefault();
            const id = parseInt(link.getAttribute('data-id'));
            // ensure global app exists
            if (window.app && typeof window.app.showReportDetails === 'function') {
              window.app.showReportDetails(id);
            }
          });
        }
      });

      // Invalidate size after a short delay to ensure Leaflet renders correctly
      setTimeout(() => {
        try { map.invalidateSize(); } catch (err) { /* ignore */ }
      }, 200);
      
      // Also add markers for government facilities
      this.governmentFacilities.forEach(facility => {
        // Create marker with popup
        L.marker([facility.coordinates.lat, facility.coordinates.lng])
          .addTo(map)
          .bindPopup(`
            <b>${facility.name}</b><br>
            Type: ${facility.type}<br>
            Address: ${facility.address}<br>
            Contact: ${facility.contact}
          `);
      });

      // Map click handler: prefill report form location and open report tab
      const self = this;
      map.on('click', function(evt) {
        const lat = evt.latlng.lat.toFixed(5);
        const lng = evt.latlng.lng.toFixed(5);
        const locInput = document.getElementById('issueLocation');
        if (locInput) locInput.value = `${lat}, ${lng}`;

        // Switch to citizen report form
        self.switchRole('citizen');
        // open Report tab
        const reportTabBtn = document.querySelector('.tab-btn[data-tab="report"]');
        if (reportTabBtn) reportTabBtn.click();
      });
    } else {
      mapContainer.innerHTML = '<div class="map-error">Map could not be loaded. Please check your connection.</div>';
    }
  }
  
  // Render dashboard charts using Chart.js
  renderDashboardCharts() {
    const issuesChart = document.getElementById("issuesChart");
    if (!issuesChart) return;
    
    // Clear previous chart if any
    issuesChart.innerHTML = `<canvas id="issuesStatusChart"></canvas>`;
    
    const ctx = document.getElementById('issuesStatusChart').getContext('2d');
    
    // Count issues by status
    const pending = this.issues.filter(i => i.status.toLowerCase() === "pending").length;
    const inProgress = this.issues.filter(i => i.status.toLowerCase() === "in progress").length;
    const resolved = this.issues.filter(i => i.status.toLowerCase() === "resolved").length;
    
    // Create the chart if Chart.js is available
    if (window.Chart) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Pending', 'In Progress', 'Resolved'],
          datasets: [{
            data: [pending, inProgress, resolved],
            backgroundColor: ['#fbbc05', '#4285f4', '#34a853'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Issues by Status'
          }
        }
      });
      
      // Create department performance chart
      const deptChartEl = document.getElementById('departmentPerformanceChart');
      if (deptChartEl) {
        const deptCtx = deptChartEl.getContext('2d');
        new Chart(deptCtx, {
          type: 'bar',
          data: {
            labels: this.departments.map(d => d.name),
            datasets: [{
              label: 'Performance Score',
              data: this.departments.map(d => d.performance),
              backgroundColor: '#1a73e8',
              borderColor: '#1a73e8',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            },
            title: {
              display: true,
              text: 'Department Performance'
            }
          }
        });
      }
    } else {
      issuesChart.innerHTML = '<div class="chart-error">Charts could not be loaded. Please check your connection.</div>';
    }
  }
}

// Initialize app
const app = new CivicConnectApp();

// NEW Jharkhand Promotion Slideshow Implementation
let slideInterval;

// Initialize simple slideshow for `#jharkhandPromotion`
function initSimpleSlideshow() {
  const wrapper = document.querySelector('#jharkhandPromotion .slide-wrapper');
  const items = wrapper ? wrapper.querySelectorAll('.slide-item') : null;
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  const indicatorsContainer = document.getElementById('slideIndicators');

  if (!wrapper || !items || items.length === 0) {
    console.warn('Simple slideshow: elements not found or no slides');
    return;
  }

  let current = 0;
  const total = items.length;

  // Build indicators
  indicatorsContainer.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active-dot');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goTo(i));
    indicatorsContainer.appendChild(dot);
  }

  function update() {
    // move by one slide width (100 / total) percent per index
    const shiftPer = 100 / total;
    wrapper.style.transform = `translateX(-${current * shiftPer}%)`;
    // update active indicator
    const dots = indicatorsContainer.querySelectorAll('.dot');
    dots.forEach((d, idx) => d.classList.toggle('active-dot', idx === current));
  }

  function goTo(index) {
    current = (index + total) % total;
    update();
    restart();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // Buttons (guard against missing elements)
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });

  // Auto slide
  function start() {
    slideInterval = setInterval(next, 3500);
  }

  function stop() { clearInterval(slideInterval); }

  function restart() { stop(); start(); }

  // Pause on hover
  const container = document.querySelector('#jharkhandPromotion .simple-slideshow');
  if (container) {
    container.addEventListener('mouseenter', stop);
    container.addEventListener('mouseleave', start);
  }

  // Ensure wrapper width uses number of slides (helps CSS calc)
  wrapper.style.width = `${total * 100}%`;
  items.forEach(item => item.style.width = `${100 / total}%`);

  // Start
  update();
  start();
}

// Initialize slideshow when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, initializing new slideshow");
  
  // Initialize the new simple slideshow
  initSimpleSlideshow();
  
  // Initialize AI Chatbot
  initChatbot();
  
  // Initialize the gallery slider
  initGallerySlider();
});

// Start automatic slideshow
function startSlideInterval() {
  // Clear any existing interval first
  clearInterval(slideInterval);
  
  // Set new interval to advance slides every 3 seconds
  slideInterval = setInterval(function() {
    advanceSlide(1);
  }, 3000);
}

// Pause slideshow on hover
function pauseSlideshow() {
  clearInterval(slideInterval);
}

// Resume slideshow after hover
function resumeSlideshow() {
  startSlideInterval();
}

// Reset all slides and dots to initial state
function resetSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  // Reset all slides to hidden
  slides.forEach(slide => {
    slide.style.display = 'none';
    slide.style.opacity = '0';
    slide.classList.remove('active');
  });
  
  // Reset all dots to inactive
  dots.forEach(dot => {
    dot.classList.remove('active-dot');
  });
  
  console.log(`Slideshow reset: ${slides.length} slides, ${dots.length} dots`);
}

// Show a specific slide by index (1-based index)
function showSlide(n) {
  // Get all slides and dots
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (!slides.length || !dots.length) {
    console.error("Slideshow elements not found");
    return;
  }
  
  // Reset slideIndex if out of bounds
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  
  // Hide all slides first
  resetSlideshow();
  
  // Show the current slide
  const currentSlide = slides[slideIndex - 1];
  if (currentSlide) {
    currentSlide.style.display = 'block';
    currentSlide.style.opacity = '1';
    currentSlide.classList.add('active');
    
    // Make sure image is visible
    const img = currentSlide.querySelector('img');
    if (img) {
      img.style.display = 'block';
      img.style.visibility = 'visible';
    }
    
    // Add active class to current dot
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add('active-dot');
    }
    
    console.log(`Showing slide ${slideIndex} of ${slides.length}`);
  }
}

// Next/previous controls
function advanceSlide(n) {
  showSlide(slideIndex += n);
}

// Public functions for HTML onclick handlers
// These need to be defined in the global scope so HTML onclick can access them
window.plusSlides = function(n) {
  console.log(`Navigation button clicked: ${n > 0 ? 'next' : 'prev'}`);
  
  // Clear interval to prevent quick changes
  clearInterval(slideInterval);
  
  // Show the requested slide
  advanceSlide(n);
  
  // Restart the timer
  startSlideInterval();
};

// For direct slide navigation from dots
window.currentSlide = function(n) {
  console.log(`Dot navigation clicked: showing slide ${n}`);
  
  // Clear interval to prevent quick changes
  clearInterval(slideInterval);
  
  // Show the requested slide
  showSlide(n);
  
  // Restart the timer
  startSlideInterval();
};

// AI Chatbot Implementation
function initChatbot() {
  if (window.__chatbotInitialized) return;
  window.__chatbotInitialized = true;

  const chatbotToggle = document.getElementById('chatbotToggle') || document.querySelector('.chatbot-button');
  const chatbotContainer = document.getElementById('chatbotContainer') || document.querySelector('.chatbot-container');
  const closeChatbot = document.getElementById('closeChatbot') || null;
  const chatbotInput = document.getElementById('chatbotInput') || null;
  const sendMessageBtn = document.getElementById('sendMessage') || null;
  const chatbotMessages = document.getElementById('chatbotMessages') || null;
  const suggestionChips = document.querySelectorAll('.suggestion-chip') || [];
  
  // Knowledge base for the chatbot
  const knowledgeBase = [
    {
      keywords: ['hello', 'hi', 'hey', 'namaste', 'नमस्ते'],
      responses: [
        "Hello! How can I assist you today?",
        "Hi there! What can I help you with?",
        "नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?"
      ]
    },
    {
      keywords: ['report', 'issue', 'complaint', 'problem', 'शिकायत', 'समस्या'],
      responses: [
        "To report an issue, please select the 'I'm a Citizen' option on the homepage, then click on 'Get Started'. From there, you can fill out the report form with details about your issue.",
        "समस्या की रिपोर्ट करने के लिए, होमपेज पर 'मैं नागरिक हूँ' विकल्प चुनें, फिर 'आरंभ करें' पर क्लिक करें। वहां से, आप अपनी समस्या के बारे में विवरण के साथ रिपोर्ट फॉर्म भर सकते हैं।"
      ]
    },
    {
      keywords: ['track', 'status', 'follow', 'update', 'ट्रैक', 'स्थिति'],
      responses: [
        "To track an existing complaint, go to the 'My Reports' tab after logging in as a citizen. You can search for your complaint using the ID number that was provided when you submitted it.",
        "मौजूदा शिकायत को ट्रैक करने के लिए, नागरिक के रूप में लॉग इन करने के बाद 'मेरी रिपोर्ट' टैब पर जाएं। आप उस आईडी नंबर का उपयोग करके अपनी शिकायत खोज सकते हैं जो आपने इसे जमा करते समय प्रदान किया था।"
      ]
    },
    {
      keywords: ['emergency', 'urgent', 'help', 'आपातकालीन', 'मदद'],
      responses: [
        "For emergencies, click the red 'Emergency' button at the top of the page. This will show you all emergency contact numbers including police, fire, and medical services.",
        "आपात स्थिति के लिए, पेज के शीर्ष पर लाल 'आपातकालीन' बटन पर क्लिक करें। यह आपको पुलिस, अग्निशमन और चिकित्सा सेवाओं सहित सभी आपातकालीन संपर्क नंबर दिखाएगा।"
      ]
    },
    {
      keywords: ['contact', 'email', 'phone', 'call', 'संपर्क', 'ईमेल', 'फ़ोन'],
      responses: [
        "You can find contact information for all Jharkhand government departments at the bottom of the page in our footer section. You can also email us directly at jharkhandcm@gov.in or call our helpline at 1800-345-6789.",
        "आप पेज के नीचे हमारे फुटर अनुभाग में सभी झारखंड सरकार विभागों के लिए संपर्क जानकारी पा सकते हैं। आप हमें सीधे jharkhandcm@gov.in पर ईमेल भी कर सकते हैं या हमारी हेल्पलाइन 1800-345-6789 पर कॉल कर सकते हैं।"
      ]
    },
    {
      keywords: ['road', 'pothole', 'street', 'सड़क', 'गड्ढा'],
      responses: [
        "For road and infrastructure issues, please report them using the 'Roads & Mining' category in our reporting form. Our public works department will address these concerns.",
        "सड़क और बुनियादी ढांचे की समस्याओं के लिए, कृपया उन्हें हमारे रिपोर्टिंग फॉर्म में 'सड़क और खनन' श्रेणी का उपयोग करके रिपोर्ट करें। हमारा लोक निर्माण विभाग इन चिंताओं का समाधान करेगा।"
      ]
    },
    {
      keywords: ['water', 'supply', 'leak', 'pipe', 'पानी', 'आपूर्ति'],
      responses: [
        "Water supply or sanitation issues can be reported under the 'Water & Sanitation' category. Please provide specific location details for faster resolution.",
        "जल आपूर्ति या स्वच्छता संबंधी समस्याओं को 'जल और स्वच्छता' श्रेणी के अंतर्गत रिपोर्ट किया जा सकता है। तेज़ी से समाधान के लिए कृपया विशिष्ट स्थान विवरण प्रदान करें।"
      ]
    },
    {
      keywords: ['electricity', 'power', 'outage', 'streetlight', 'बिजली', 'स्ट्रीटलाइट'],
      responses: [
        "For electricity issues or streetlight problems, use the 'Electricity & Streetlights' category. Be sure to include the pole number if available for faster service.",
        "बिजली की समस्याओं या स्ट्रीटलाइट की समस्याओं के लिए, 'बिजली और स्ट्रीटलाइट्स' श्रेणी का उपयोग करें। तेज़ सेवा के लिए यदि उपलब्ध हो तो पोल नंबर शामिल करना सुनिश्चित करें।"
      ]
    },
    {
      keywords: ['who', 'what', 'chatbot', 'you', 'कौन', 'क्या', 'चैटबोट'],
      responses: [
        "I'm CivicAI, your virtual assistant for the Jharkhand government's CivicConnect portal. I can help you report issues, track complaints, and find information about government services.",
        "मैं सिविकएआई हूं, झारखंड सरकार के सिविकनेक्ट पोर्टल के लिए आपका वर्चुअल सहायक। मैं आपको समस्याओं की रिपोर्ट करने, शिकायतों को ट्रैक करने और सरकारी सेवाओं के बारे में जानकारी खोजने में मदद कर सकता हूं।"
      ]
    },
    {
      keywords: ['thanks', 'thank you', 'helpful', 'धन्यवाद', 'शुक्रिया'],
      responses: [
        "You're welcome! Is there anything else I can help you with?",
        "My pleasure! Feel free to ask if you have any other questions.",
        "आपका स्वागत है! क्या मैं आपकी और कोई मदद कर सकता हूँ?",
        "मेरा सौभाग्य! यदि आपके पास कोई अन्य प्रश्न हैं तो पूछने में संकोच न करें।"
      ]
    }
  ];

  // Toggle chatbot visibility
  if (chatbotToggle && chatbotContainer) {
    chatbotToggle.addEventListener('click', () => {
      chatbotContainer.classList.toggle('hidden');
      try {
        if (chatbotInput && !chatbotContainer.classList.contains('hidden')) chatbotInput.focus();
      } catch (e) {
        console.warn('chatbot focus error', e);
      }
    });
  } else {
    console.warn('Chatbot toggle or container not found', {chatbotToggle, chatbotContainer});
  }

  // Close chatbot
  if (closeChatbot && chatbotContainer) {
    closeChatbot.addEventListener('click', () => {
      chatbotContainer.classList.add('hidden');
    });
  }

  // Send message function
  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === '') return;

    // Add user message to chat
    addMessage(userMessage, 'user');
    
    // Clear input
    chatbotInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process and respond after a delay to simulate thinking
    setTimeout(() => {
      const botResponse = generateResponse(userMessage);
      removeTypingIndicator();
      addMessage(botResponse, 'bot');
    }, 1200);
  }

  // Send message on button click (guarded)
  if (sendMessageBtn) sendMessageBtn.addEventListener('click', sendMessage);

  // Send message on Enter key (use keydown for better compatibility)
  if (chatbotInput) {
    chatbotInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  }
  
  // Handle suggestion chips
  if (suggestionChips && suggestionChips.length && chatbotInput) {
    suggestionChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query') || chip.textContent || '';
        chatbotInput.value = query;
        sendMessage();
      });
    });
  }

  // Add message to chat
  function addMessage(text, sender) {
    if (!chatbotMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';

    const content = document.createElement('div');
    content.className = 'message-content';

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    content.appendChild(paragraph);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    chatbotMessages.appendChild(messageDiv);

    // Scroll to the bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Show typing indicator
  function showTypingIndicator() {
    if (!chatbotMessages) return;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      typingDiv.appendChild(dot);
    }

    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Remove typing indicator
  function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) typingIndicator.remove();
  }
  
  // Generate response based on user input
  function generateResponse(userInput) {
    userInput = userInput.toLowerCase();
    
    // Check if the input matches any keywords
    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        if (userInput.includes(keyword)) {
          // Return a random response from the array
          return item.responses[Math.floor(Math.random() * item.responses.length)];
        }
      }
    }
    
    // Default responses if no match is found
    const defaultResponses = [
      "I'm sorry, I don't have specific information about that yet. Please contact our support at jharkhandcm@gov.in for assistance.",
      "I couldn't find an answer to that question. You can report your specific issue through our reporting form for more personalized help.",
      "मुझे इस बारे में अभी कोई विशिष्ट जानकारी नहीं है। कृपया सहायता के लिए हमारे सहायता टीम से jharkhandcm@gov.in पर संपर्क करें।",
      "मुझे इस प्रश्न का उत्तर नहीं मिला। आप अधिक व्यक्तिगत सहायता के लिए हमारे रिपोर्टिंग फॉर्म के माध्यम से अपनी विशिष्ट समस्या की रिपोर्ट कर सकते हैं।"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
}

// Function to initialize the Gallery Slider
function initGallerySlider() {
  console.log("Initializing gallery slider");
  
  const slider = document.querySelector('.slider');
  const slideTrack = document.querySelector('.slide-track');
  
  if (!slider || !slideTrack) {
    console.error("Gallery slider elements not found");
    return;
  }
  
  // Make sure all images are loaded
  const images = slideTrack.querySelectorAll('img');
  let loadedImages = 0;
  
  images.forEach(img => {
    if (img.complete) {
      loadedImages++;
    } else {
      img.addEventListener('load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
          console.log("All gallery images loaded");
        }
      });
      
      img.addEventListener('error', () => {
        console.error("Error loading image:", img.src);
        loadedImages++;
      });
    }
  });
  
  // Add hover effect for each slide
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
      slide.querySelector('img').style.transform = 'translateZ(10px)';
    });
    
    slide.addEventListener('mouseleave', () => {
      slide.querySelector('img').style.transform = 'translateZ(0)';
    });
  });
  
  console.log("Gallery slider initialized successfully");
}
