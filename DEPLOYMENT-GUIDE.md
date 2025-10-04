# 🚀 Azure Portfolio Deployment - Manual Steps

## Quick Links for Manual Setup

### 1. GitHub Repository Creation
**Direct Link**: https://github.com/new

**Settings:**
- Repository name: `portfolio`
- Description: `Professional Portfolio Website - Azure Static Web App`
- Public repository
- No README, .gitignore, or license (we have them)
- Click "Create repository"

### 2. Push Code to GitHub
After creating repository, copy the commands from GitHub page:
```bash
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 3. Azure Static Web App Creation
**Direct Link**: https://portal.azure.com/#create/Microsoft.StaticApp

**Configuration:**
```
Subscription: Your Azure subscription
Resource group: Create new "portfolio-rg"
Name: "your-portfolio-static"
Hosting plan: Free
Region: East US 2
Source: GitHub
Organization: Your GitHub username
Repository: portfolio
Branch: main
Build preset: Custom
App location: /
Output location: (leave empty)
```

### 4. Cosmos DB for Contact Form (Optional)
**Direct Link**: https://portal.azure.com/#create/Microsoft.DocumentDB

**Configuration:**
```
Account name: portfolio-cosmos
API: Core (SQL)
Location: East US
Capacity mode: Serverless (or Provisioned with Free Tier)
```

## Automated PowerShell Script

Save this as `deploy.ps1` and run after Azure CLI is working:

```powershell
# Azure Portfolio Deployment Script

# Variables
$resourceGroup = "portfolio-rg"
$staticAppName = "your-portfolio-static"
$cosmosName = "portfolio-cosmos"
$location = "East US 2"
$githubRepo = "https://github.com/YOURUSERNAME/portfolio"

Write-Host "🚀 Starting Azure Portfolio Deployment..." -ForegroundColor Green

# Login to Azure
Write-Host "📋 Logging into Azure..." -ForegroundColor Yellow
az login

# Create Resource Group
Write-Host "📁 Creating Resource Group..." -ForegroundColor Yellow
az group create --name $resourceGroup --location $location

# Create Static Web App
Write-Host "🌐 Creating Static Web App..." -ForegroundColor Yellow
az staticwebapp create `
  --name $staticAppName `
  --resource-group $resourceGroup `
  --source $githubRepo `
  --location $location `
  --branch main `
  --app-location "/" `
  --login-with-github

# Create Cosmos DB (Free Tier)
Write-Host "🗄️ Creating Cosmos DB..." -ForegroundColor Yellow
az cosmosdb create `
  --resource-group $resourceGroup `
  --name $cosmosName `
  --kind GlobalDocumentDB `
  --enable-free-tier true `
  --locations regionName="East US"

# Create Database and Container
Write-Host "📊 Setting up Database..." -ForegroundColor Yellow
az cosmosdb sql database create `
  --account-name $cosmosName `
  --resource-group $resourceGroup `
  --name PortfolioDB

az cosmosdb sql container create `
  --account-name $cosmosName `
  --resource-group $resourceGroup `
  --database-name PortfolioDB `
  --name ContactMessages `
  --partition-key-path "/id"

# Get URLs and Keys
Write-Host "🔑 Getting connection details..." -ForegroundColor Yellow
$staticAppUrl = az staticwebapp show --name $staticAppName --resource-group $resourceGroup --query "defaultHostname" -o tsv
$cosmosEndpoint = az cosmosdb show --name $cosmosName --resource-group $resourceGroup --query "documentEndpoint" -o tsv
$cosmosKey = az cosmosdb keys list --name $cosmosName --resource-group $resourceGroup --query "primaryMasterKey" -o tsv

Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host "🌐 Static Web App URL: https://$staticAppUrl" -ForegroundColor Cyan
Write-Host "🗄️ Cosmos DB Endpoint: $cosmosEndpoint" -ForegroundColor Cyan
Write-Host "🔑 Cosmos DB Key: $cosmosKey" -ForegroundColor Cyan

Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Add environment variables in Azure Portal"
Write-Host "2. Configure custom domain (optional)"
Write-Host "3. Test contact form functionality"
Write-Host "4. Monitor usage and costs"
```

## Manual Environment Variables Setup

In Azure Portal → Static Web App → Configuration:

```
COSMOS_DB_ENDPOINT = [Your Cosmos DB endpoint]
COSMOS_DB_KEY = [Your Cosmos DB primary key]
```

## Expected Results

After successful deployment:
- 🌐 Portfolio URL: `https://your-portfolio-static.azurestaticapps.net`
- 💰 Monthly Cost: $0-8 (mostly free tier)
- ⏱️ Build Time: 2-5 minutes
- 🔒 SSL: Auto-configured
- 🌍 CDN: Global distribution

## Verification Steps

1. Check GitHub Actions tab for build status
2. Visit your Static Web App URL
3. Test contact form submission
4. Check Cosmos DB for stored messages
5. Verify SSL certificate and performance

## Troubleshooting

**Build Fails:**
- Check GitHub Actions logs
- Verify staticwebapp.config.json syntax
- Ensure all files are committed

**Contact Form Not Working:**
- Check environment variables
- Verify Cosmos DB connection
- Check browser console for errors

**Slow Loading:**
- Verify CDN is enabled
- Check image optimization
- Monitor Azure diagnostics

## Cost Monitoring

Set up cost alerts in Azure:
1. Go to Cost Management + Billing
2. Set budget alerts at $5, $10, $15
3. Monitor daily usage
4. Optimize if approaching limits

Total Expected: $0-8/month = 18+ months with $150 credit