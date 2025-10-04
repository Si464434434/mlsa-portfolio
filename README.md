# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript, deployed on Azure Static Web Apps.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean and professional appearance  
- **Contact Form** - Working contact form with Azure Functions backend
- **Database Integration** - Cosmos DB for storing messages
- **Fast Loading** - Optimized with Azure CDN
- **SSL Secured** - HTTPS enabled by default

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Azure Functions (Node.js)
- **Database**: Azure Cosmos DB
- **Hosting**: Azure Static Web Apps

## 🌐 Live Demo

**Production**: [yourname.azurestaticapps.net](https://yourname.azurestaticapps.net)

## 💰 Cost Optimization

**Monthly Cost: $0-8** (vs $38 for App Service)
**150$ credit duration: 18+ months**
1. Open your browser and go to `http://localhost/phpmyadmin`
2. Create a new database named `sih_project`
3. Import the `database.sql` file to create tables:
   - Click on `sih_project` database
   - Go to "Import" tab
   - Choose file: `database.sql`
   - Click "Go"

### Step 3: File Placement
1. Copy your project folder to XAMPP's `htdocs` directory
   - Example: `C:\xampp\htdocs\hello\`
2. Make sure these files are in your project folder:
   - `index.html` (your main HTML file)
   - `style.css` (your CSS file)
   - `script.js` (your original JS file)
   - `api.php` (backend API)
   - `php-integration.js` (frontend-backend connector)
   - `php-test.html` (test page)
   - `database.sql` (database schema)

### Step 4: Configuration
1. Open `php-integration.js`
2. Update the `baseURL` if needed:
   ```javascript
   this.baseURL = 'http://localhost/hello/api.php'; // Adjust 'hello' to your folder name
   ```

### Step 5: Test Your Setup
1. Open browser and go to: `http://localhost/hello/php-test.html`
2. Fill and submit the issue form
3. Check if data is saved by clicking "Refresh Issues"
4. Verify in phpMyAdmin that data appears in the `issues` table

### Step 6: Integration with Your Main Website
1. Add this line to your `index.html` before closing `</body>` tag:
   ```html
   <script src="php-integration.js"></script>
   ```
2. Make sure your forms have the correct IDs and names as expected by the integration script

## 📁 Project Structure
```
hello/
│
├── index.html              ← Your main website
├── style.css               ← Your CSS styles
├── script.js               ← Your existing JavaScript
├── php-integration.js      ← NEW: Backend integration
├── api.php                 ← NEW: PHP backend API
├── php-test.html           ← NEW: Test page
├── database.sql            ← NEW: Database schema
├── server.js               ← OLD: Node.js (not needed)
├── s.js                    ← OLD: Simple server (not needed)
└── package.json            ← OLD: Node.js (not needed)
```

## 🔗 API Endpoints

Your PHP backend provides these endpoints:

- `POST /api.php/submit-issue` - Submit civic issue
- `POST /api.php/submit-feedback` - Submit feedback
- `POST /api.php/submit-tourism` - Submit tourism report
- `GET /api.php/issues` - Get all issues
- `GET /api.php/issues/{id}` - Get specific issue
- `PUT /api.php/issues/{id}/status` - Update issue status

## 🧪 Testing

### Test Issue Submission:
```javascript
// This will work automatically with your forms
const issueData = {
    name: "Test User",
    email: "test@example.com",
    category: "roads",
    description: "Test issue description",
    location: "Test Location"
};
```

### Test Admin Dashboard:
1. Submit a few issues using the form
2. Use the admin section to view and update issue status
3. Check phpMyAdmin to see data changes

## 🔧 Troubleshooting

### Common Issues:

1. **"Connection failed" error:**
   - Make sure MySQL is running in XAMPP
   - Check database name is `sih_project`
   - Check username/password in `api.php`

2. **"404 Not Found" error:**
   - Check file path in `php-integration.js`
   - Make sure files are in `htdocs/hello/`
   - Try: `http://localhost/hello/api.php/issues`

3. **CORS errors:**
   - The `api.php` already includes CORS headers
   - Make sure you're accessing via `http://localhost`

4. **Database table errors:**
   - Re-import `database.sql`
   - Check table names match the code

### Database Connection Test:
Visit `http://localhost/hello/api.php/issues` in browser
- Success: Should show JSON with issues data
- Error: Will show connection error message

## 🎯 Next Steps

1. **Customize Forms:** Modify your existing HTML forms to work with the PHP backend
2. **Add Features:** Extend `api.php` to add more functionality
3. **Deploy:** For production, use a proper web hosting service with PHP/MySQL
4. **Security:** Add input validation, authentication, and SQL injection protection

## 📞 Support

If you encounter any issues:
1. Check XAMPP is running (Apache + MySQL)
2. Verify database setup in phpMyAdmin
3. Check browser console for JavaScript errors
4. Test the API directly by visiting the URLs

Happy coding! 🚀