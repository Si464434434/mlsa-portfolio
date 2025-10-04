// Backend Integration for SIH 25031 Project
// Add this code to your existing script.js file or create a separate api.js file

class APIClient {
    constructor() {
        this.baseURL = 'http://localhost:5000/api';
    }

    // Submit issue to backend
    async submitIssue(issueData) {
        try {
            const response = await fetch(`${this.baseURL}/submit-issue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(issueData)
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error submitting issue:', error);
            return { status: 'error', message: 'Network error. Please try again.' };
        }
    }

    // Submit feedback to backend
    async submitFeedback(feedbackData) {
        try {
            const response = await fetch(`${this.baseURL}/submit-feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData)
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error submitting feedback:', error);
            return { status: 'error', message: 'Network error. Please try again.' };
        }
    }

    // Get all issues (for admin dashboard)
    async getAllIssues() {
        try {
            const response = await fetch(`${this.baseURL}/issues`);
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

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error updating issue status:', error);
            return { status: 'error', message: 'Failed to update issue status' };
        }
    }
}

// Initialize API client
const apiClient = new APIClient();

// Form submission handlers
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
                category: formData.get('category') || formData.get('issueType'),
                priority: formData.get('priority') || 'medium',
                location: formData.get('location') || formData.get('address'),
                description: formData.get('description') || formData.get('message'),
                imageUrl: formData.get('imageUrl')
            };

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            try {
                const result = await apiClient.submitIssue(issueData);
                
                if (result.status === 'success') {
                    alert('✅ ' + result.message);
                    this.reset(); // Clear form
                } else {
                    alert('❌ ' + result.message);
                }
            } catch (error) {
                alert('❌ Error submitting issue. Please try again.');
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
                const result = await apiClient.submitFeedback(feedbackData);
                
                if (result.status === 'success') {
                    alert('✅ ' + result.message);
                    this.reset();
                } else {
                    alert('❌ ' + result.message);
                }
            } catch (error) {
                alert('❌ Error sending feedback. Please try again.');
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
                result = await apiClient.submitIssue(data);
            } else if (apiType === 'feedback') {
                result = await apiClient.submitFeedback(data);
            }

            if (result && result.status === 'success') {
                alert('✅ ' + result.message);
                this.reset();
            } else {
                alert('❌ ' + (result?.message || 'Something went wrong'));
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
            const result = await apiClient.getAllIssues();
            
            if (result.status === 'success' && result.data) {
                displayIssues(result.data);
            }
        } catch (error) {
            console.error('Error loading issues:', error);
        }
    }

    function displayIssues(issues) {
        if (!issuesContainer) return;

        issuesContainer.innerHTML = issues.map(issue => `
            <div class="issue-card" data-issue-id="${issue._id}">
                <div class="issue-header">
                    <h3>${issue.category}</h3>
                    <span class="status status-${issue.status}">${issue.status}</span>
                </div>
                <div class="issue-content">
                    <p><strong>Reporter:</strong> ${issue.name}</p>
                    <p><strong>Location:</strong> ${issue.location || 'Not specified'}</p>
                    <p><strong>Priority:</strong> ${issue.priority}</p>
                    <p><strong>Description:</strong> ${issue.description}</p>
                    <p><strong>Date:</strong> ${new Date(issue.createdAt).toLocaleDateString()}</p>
                </div>
                <div class="issue-actions">
                    <select onchange="updateStatus('${issue._id}', this.value)">
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
            const result = await apiClient.updateIssueStatus(issueId, newStatus);
            
            if (result.status === 'success') {
                alert('✅ Issue status updated successfully!');
            } else {
                alert('❌ Failed to update status: ' + result.message);
            }
        } catch (error) {
            alert('❌ Error updating status. Please try again.');
        }
    };
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APIClient, apiClient };
}