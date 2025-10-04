# Azure Static Web App Setup Guide

## 🎯 Problem: Azure showing "Not Found" error
**Solution: Proper Azure Static Web App setup with API token**

## 📋 Step-by-Step Setup

### 1. Create Azure Static Web App
```
1. Go to Azure Portal: https://portal.azure.com
2. Click "Create a resource" 
3. Search "Static Web App"
4. Click "Create"
```

### 2. Configuration Settings
```
Subscription: Your MLSA subscription
Resource Group: Create new "portfolio-rg"
Name: "sarthak-portfolio-app"
Hosting Plan: Free (Worldwide)
Deployment Source: GitHub
```

### 3. GitHub Integration
```
Organization: Si464434434
Repository: mlsa-portfolio
Branch: main
Build Details:
  - App location: /
  - Output location: /
```

### 4. Get API Token
```
1. After creation, go to your Static Web App
2. Go to "Deployment tokens" in left menu
3. Copy the deployment token
4. Go to GitHub repository settings
5. Secrets and variables > Actions
6. Add new secret: AZURE_STATIC_WEB_APPS_API_TOKEN
7. Paste the deployment token
```

## 🚀 Alternative Quick Solution

**Since GitHub Pages is already working perfectly:**

### Option 1: Use GitHub Pages (Recommended)
- ✅ Already working: https://si464434434.github.io/mlsa-portfolio/
- ✅ Free forever
- ✅ No Azure credit used
- ✅ Fast and reliable

### Option 2: Fix Azure (Optional)
- Follow the setup steps above
- Uses some Azure credit
- Provides Azure learning experience

## 💡 Recommendation
Keep using GitHub Pages as your primary deployment since it's working perfectly. Use Azure for learning and testing additional features.

**Current Status:**
- ✅ Portfolio LIVE on GitHub Pages
- ❌ Azure Static Web App needs setup
- ✅ Code ready for both platforms