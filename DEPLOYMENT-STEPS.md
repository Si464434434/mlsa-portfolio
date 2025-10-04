# Next Steps for Azure Deployment

## Step 2: GitHub Repository Setup (Manual)

1. Go to GitHub.com and login
2. Click "New Repository"
3. Repository name: `portfolio`
4. Description: `Professional Portfolio Website - Azure Static Web App`
5. Make it Public
6. Don't add README (we already have one)
7. Click "Create Repository"
8. Copy the repository URL (something like: https://github.com/yourusername/portfolio.git)

## Step 3: Push Code to GitHub

Run these commands in PowerShell:

```bash
# Add GitHub remote (replace with your actual GitHub URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Create Azure Static Web App

1. Go to Azure Portal (portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App"
4. Click "Create"
5. Fill details:
   - Subscription: Your subscription
   - Resource group: Create new "portfolio-rg"
   - Name: "your-portfolio-static"
   - Region: "East US 2"
   - Source: GitHub
   - GitHub repo: Select your portfolio repository
   - Branch: main
   - Build preset: Custom
   - App location: /
   - Output location: leave empty

6. Click "Review + Create"
7. Click "Create"

## Step 5: Add Cosmos DB (Optional - for Contact Form)

```bash
# Login to Azure
az login

# Create Cosmos DB with free tier
az cosmosdb create \
  --resource-group portfolio-rg \
  --name portfolio-cosmos \
  --kind GlobalDocumentDB \
  --enable-free-tier true \
  --locations regionName="East US"

# Create database and container
az cosmosdb sql database create \
  --account-name portfolio-cosmos \
  --resource-group portfolio-rg \
  --name PortfolioDB

az cosmosdb sql container create \
  --account-name portfolio-cosmos \
  --resource-group portfolio-rg \
  --database-name PortfolioDB \
  --name ContactMessages \
  --partition-key-path "/id"
```

## Step 6: Configure Environment Variables

In Azure Portal:
1. Go to your Static Web App
2. Click "Configuration"
3. Add application settings:
   - COSMOS_DB_ENDPOINT: (from Cosmos DB keys)
   - COSMOS_DB_KEY: (from Cosmos DB keys)

## Expected Result

After deployment:
- Your portfolio will be live at: https://your-portfolio-static.azurestaticapps.net
- Contact form will work with Cosmos DB
- Global CDN for fast loading
- Auto SSL certificate
- Cost: $0-8/month (18+ months with $150 credit)

## Troubleshooting

If deployment fails:
1. Check GitHub Actions tab in your repository
2. Verify staticwebapp.config.json is correct
3. Check Azure deployment logs
4. Ensure all files are committed to GitHub

## Custom Domain (Optional)

1. Buy domain from any provider
2. Add CNAME record: www.yourdomain.com → your-app.azurestaticapps.net
3. In Azure Portal → Static Web App → Custom domains
4. Add your domain
5. SSL will be automatically configured