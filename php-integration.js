// PHP Backend Integration for SIH 25031 Project
// This replaces the Node.js API client to work with PHP backend

class PHPAPIClient {
    constructor() {
        this.baseURL = 'http://localhost/hello/api.php'; // Adjust path as needed
    }

    // Submit issue to PHP backend
    async submitIssue(issueData) {
        try {
            const response = await fetch(`${this.baseURL}/submit-issue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(issueData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error submitting issue:', error);
            return { status: 'error', message: 'Network error. Please try again.' };
        }
    }

    // Submit feedback to PHP backend
    async submitFeedback(feedbackData) {
        try {
            const response = await fetch(`${this.baseURL}/submit-feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error submitting feedback:', error);
            return { status: 'error', message: 'Network error. Please try again.' };
        }
    }

    // Submit tourism report
    async submitTourismReport(tourismData) {
        try {
            const response = await fetch(`${this.baseURL}/submit-tourism`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tourismData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error submitting tourism report:', error);
            return { status: 'error', message: 'Network error. Please try again.' };
        }
    }

    // Get all issues (for admin dashboard)
    async getAllIssues() {
        try {
            const response = await fetch(`${this.baseURL}/issues`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching issues:', error);
            return { status: 'error', message: 'Failed to fetch issues' };
        }
    }

    // Get specific issue by ID
    async getIssueById(issueId) {
        try {
            const response = await fetch(`${this.baseURL}/issues/${issueId}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching issue:', error);
            return { status: 'error', message: 'Failed to fetch issue details' };
        }
    }

    // Update issue status (for admin)
    async updateIssueStatus(issueId, status) {
        try {
            const response = await fetch(`${this.baseURL}/issues/${issueId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error updating issue status:', error);
            return { status: 'error', message: 'Failed to update issue status' };
        }
    }

    // Get all feedback
    async getAllFeedback() {
        try {
            const response = await fetch(`${this.baseURL}/feedback`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching feedback:', error);
            return { status: 'error', message: 'Failed to fetch feedback' };
        }
    }

    // Get all tourism reports
    async getAllTourismReports() {
        try {
            const response = await fetch(`${this.baseURL}/tourism`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching tourism reports:', error);
            return { status: 'error', message: 'Failed to fetch tourism reports' };
        }
    }
}

// Initialize PHP API client
const phpApiClient = new PHPAPIClient();

// Form submission handlers - Updated for PHP backend
document.addEventListener('DOMContentLoaded', function() {
    
    // Issue reporting form handler
    const issueForm = document.getElementById('issueReportForm') || document.querySelector('form[data-type="issue"]');
    if (issueForm) {
        issueForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const issueData = {
                name: formData.get('name') || formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                category: formData.get('category') || formData.get('issueCategory'),
                priority: formData.get('priority') || formData.get('issuePriority') || 'medium',
                location: formData.get('location') || formData.get('issueLocation'),
                title: formData.get('title') || formData.get('issueTitle'),
                description: formData.get('description') || formData.get('issueDescription'),
                imageUrl: formData.get('imageUrl')
            };

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            try {
                const result = await phpApiClient.submitIssue(issueData);
                
                if (result.status === 'success') {
                    showNotification('✅ ' + result.message, 'success');
                    this.reset(); // Clear form
                } else {
                    showNotification('❌ ' + result.message, 'error');
                }
            } catch (error) {
                showNotification('❌ Error submitting issue. Please try again.', 'error');
            } finally {
                // Restore button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Feedback form handler
    const feedbackForm = document.getElementById('feedbackForm') || document.querySelector('form[data-type="feedback"]');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const feedbackData = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                rating: formData.get('rating') || 5
            };

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                const result = await phpApiClient.submitFeedback(feedbackData);
                
                if (result.status === 'success') {
                    showNotification('✅ ' + result.message, 'success');
                    this.reset();
                } else {
                    showNotification('❌ ' + result.message, 'error');
                }
            } catch (error) {
                showNotification('❌ Error sending feedback. Please try again.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Tourism form handler
    const tourismForm = document.getElementById('tourismForm');
    if (tourismForm) {
        tourismForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const tourismData = {
                title: formData.get('title') || formData.get('tourTitle'),
                location: formData.get('location') || formData.get('tourLocation'),
                type: formData.get('type') || formData.get('tourType'),
                description: formData.get('description') || formData.get('tourDesc'),
                contact: formData.get('contact') || formData.get('tourContact')
            };

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            try {
                const result = await phpApiClient.submitTourismReport(tourismData);
                
                if (result.status === 'success') {
                    showNotification('✅ ' + result.message, 'success');
                    this.reset();
                } else {
                    showNotification('❌ ' + result.message, 'error');
                }
            } catch (error) {
                showNotification('❌ Error submitting tourism report. Please try again.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Generic form handler for any form with data-api attribute
    const apiForms = document.querySelectorAll('form[data-api]');
    apiForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const apiType = this.dataset.api;
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            let result;
            if (apiType === 'issue') {
                result = await phpApiClient.submitIssue(data);
            } else if (apiType === 'feedback') {
                result = await phpApiClient.submitFeedback(data);
            } else if (apiType === 'tourism') {
                result = await phpApiClient.submitTourismReport(data);
            }

            if (result && result.status === 'success') {
                showNotification('✅ ' + result.message, 'success');
                this.reset();
            } else {
                showNotification('❌ ' + (result?.message || 'Something went wrong'), 'error');
            }
        });
    });

    // Admin dashboard - load issues
    const issuesContainer = document.getElementById('issuesContainer') || document.querySelector('.issues-list');
    if (issuesContainer) {
        loadIssuesForAdmin();
    }

    async function loadIssuesForAdmin() {
        try {
            const result = await phpApiClient.getAllIssues();
            
            if (result.status === 'success' && result.data) {
                displayIssues(result.data);
            } else {
                showNotification('Failed to load issues', 'error');
            }
        } catch (error) {
            console.error('Error loading issues:', error);
            showNotification('Error loading issues', 'error');
        }
    }

    function displayIssues(issues) {
        if (!issuesContainer) return;

        if (issues.length === 0) {
            issuesContainer.innerHTML = '<p>No issues reported yet.</p>';
            return;
        }

        issuesContainer.innerHTML = issues.map(issue => `
            <div class="issue-card" data-issue-id="${issue.id}">
                <div class="issue-header">
                    <h3>${issue.title || issue.category}</h3>
                    <span class="status status-${issue.status}">${issue.status}</span>
                </div>
                <div class="issue-content">
                    <p><strong>Reporter:</strong> ${issue.name}</p>
                    <p><strong>Email:</strong> ${issue.email}</p>
                    <p><strong>Location:</strong> ${issue.location || 'Not specified'}</p>
                    <p><strong>Priority:</strong> ${issue.priority}</p>
                    <p><strong>Category:</strong> ${issue.category}</p>
                    <p><strong>Description:</strong> ${issue.description}</p>
                    <p><strong>Date:</strong> ${new Date(issue.created_at).toLocaleDateString()}</p>
                    ${issue.phone ? `<p><strong>Phone:</strong> ${issue.phone}</p>` : ''}
                    ${issue.image_url ? `<p><strong>Image:</strong> <a href="${issue.image_url}" target="_blank">View Image</a></p>` : ''}
                </div>
                <div class="issue-actions">
                    <select onchange="updateStatus('${issue.id}', this.value)">
                        <option value="pending" ${issue.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="in-progress" ${issue.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                        <option value="resolved" ${issue.status === 'resolved' ? 'selected' : ''}>Resolved</option>
                        <option value="closed" ${issue.status === 'closed' ? 'selected' : ''}>Closed</option>
                    </select>
                </div>
            </div>
        `).join('');
    }

    // Global function for updating issue status
    window.updateStatus = async function(issueId, newStatus) {
        try {
            const result = await phpApiClient.updateIssueStatus(issueId, newStatus);
            
            if (result.status === 'success') {
                showNotification('✅ Issue status updated successfully!', 'success');
                // Reload issues to reflect changes
                setTimeout(loadIssuesForAdmin, 1000);
            } else {
                showNotification('❌ Failed to update status: ' + result.message, 'error');
            }
        } catch (error) {
            showNotification('❌ Error updating status. Please try again.', 'error');
        }
    };

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            padding: 12px 20px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            max-width: 300px;
            word-wrap: break-word;
            ${type === 'success' ? 'background-color: #28a745;' : ''}
            ${type === 'error' ? 'background-color: #dc3545;' : ''}
            ${type === 'info' ? 'background-color: #17a2b8;' : ''}
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.remove();
        });
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PHPAPIClient, phpApiClient };
}