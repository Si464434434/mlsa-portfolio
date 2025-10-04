# 🚀 Azure में Portfolio LIVE करने की Complete Guide

## 📋 Step 1: Azure Static Web App Create करें

### Azure Portal में जाएं:
1. **Azure Portal खोलें**: https://portal.azure.com
2. अपने MLSA account से login करें ($150 credit के साथ)

### Static Web App बनाएं:
1. **"Create a resource"** button पर click करें
2. Search box में **"Static Web App"** type करें
3. **"Static Web App"** select करें और **"Create"** पर click करें

## ⚙️ Step 2: Configuration Settings

### Basic Settings:
```
Subscription: आपका MLSA subscription
Resource Group: "portfolio-rg" (create new)
Name: "sarthak-portfolio-static"
Hosting plan: Free (No cost)
Azure Functions: Disable (Static hosting only)
Source: GitHub
```

### GitHub Integration:
```
Organization: Si464434434
Repository: mlsa-portfolio
Branch: main
Build Details:
  - App location: /
  - Output location: /
```

## 🔑 Step 3: Get Deployment Token

**Static Web App create होने के बाद:**
1. Azure Portal में अपना Static Web App खोलें
2. Left menu में **"Deployment tokens"** पर click करें
3. Token को **copy** करें

## 🔐 Step 4: GitHub Secrets Setup

1. **GitHub Repository** खोलें: https://github.com/Si464434434/mlsa-portfolio
2. **Settings** > **Secrets and variables** > **Actions**
3. **"New repository secret"** पर click करें
4. **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. **Value**: आपका copied token paste करें
6. **"Add secret"** पर click करें

## 🚀 Step 5: Automatic Deployment

**Secret add करने के बाद:**
- GitHub Actions automatically trigger होगा
- Code Azure में deploy हो जाएगा
- कुछ minutes में live हो जाएगा

## 📱 Step 6: Live URL मिलेगा

**Azure Portal में:**
1. अपना Static Web App खोलें
2. **"Overview"** page पर **URL** मिलेगा
3. Format: `https://[app-name].azurestaticapps.net`

## 💰 Cost Information

- **Static Web App**: FREE tier (No charges)
- **Bandwidth**: FREE (100GB/month)
- **Custom Domain**: FREE
- **SSL Certificate**: FREE
- **Total Cost**: ₹0 (आपका $150 credit safe रहेगा)

## 🎯 Quick Commands for Repository

```bash
# Check current status
git status

# Push any changes to trigger deployment
git add .
git commit -m "Update for Azure deployment"
git push origin main
```

## ✅ Success Verification

**Deployment successful होने के indicators:**
1. ✅ GitHub Actions में green checkmark
2. ✅ Azure Portal में "Ready" status
3. ✅ Live URL working
4. ✅ Portfolio accessible worldwide

## 🔧 Troubleshooting

**अगर deployment fail हो:**
1. GitHub Actions logs check करें
2. Azure Portal में deployment status देखें  
3. Static Web App configuration verify करें
4. API token correct है confirm करें

**Timeline: 10-15 minutes में complete setup हो जाएगा!**