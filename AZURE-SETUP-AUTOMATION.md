# 🚀 Azure Static Web App - Quick Setup Script

## Step 1: Create Azure Static Web App (Browser में)

```bash
# Azure Portal URL
https://portal.azure.com/#create/Microsoft.StaticApp
```

## Step 2: Configuration Values

```yaml
Subscription: Your MLSA Subscription
Resource Group: portfolio-rg (create new)
Static Web App name: sarthak-portfolio-app
Plan type: Free
Deployment source: GitHub

GitHub Details:
Organization: Si464434434
Repository: mlsa-portfolio
Branch: main
Build Details:
  App location: /
  Output location: /
```

## Step 3: Get API Token After Creation

```bash
# After Static Web App is created:
1. Go to Static Web App in Azure Portal
2. Click "Deployment tokens" in left menu
3. Copy the token value
```

## Step 4: Add GitHub Secret

```bash
# GitHub Repository Settings:
1. Go to: https://github.com/Si464434434/mlsa-portfolio/settings/secrets/actions
2. Click "New repository secret"
3. Name: AZURE_STATIC_WEB_APPS_API_TOKEN
4. Value: [Paste your token here]
5. Click "Add secret"
```

## Step 5: Trigger Deployment

```bash
# Push changes to trigger deployment
git add .
git commit -m "Add Azure Static Web App workflow"
git push origin main
```

## ✅ Expected Results

After setup:
- ✅ Azure Static Web App created
- ✅ GitHub Actions workflow runs
- ✅ Portfolio deployed to Azure
- ✅ Live URL: https://sarthak-portfolio-app.azurestaticapps.net

## 🔧 Quick Links

- Azure Portal: https://portal.azure.com
- GitHub Repo: https://github.com/Si464434434/mlsa-portfolio
- GitHub Secrets: https://github.com/Si464434434/mlsa-portfolio/settings/secrets/actions