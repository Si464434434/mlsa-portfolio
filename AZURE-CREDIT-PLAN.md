# Azure Credit Optimization Plan (150$)

## Recommended Architecture: Static Web App + Cosmos DB

### Why This is Best:
1. **Maximum Duration**: 18+ months with $150
2. **Professional Domain**: yourname.azurestaticapps.net
3. **Global CDN**: Fast loading worldwide
4. **Auto HTTPS**: SSL certificate included
5. **CI/CD**: Automatic deployment from GitHub

### Cost Breakdown:
- Static Web App: **FREE** (Includes custom domain, SSL, CDN)
- Cosmos DB Free Tier: **FREE** (25GB storage, 1000 RU/s)
- Additional Cosmos DB: **$5-8/month** (if needed)
- Custom Domain: **$10-15/year** (optional)

### Monthly Cost: ~$0-8 (vs $38 for App Service)

## Step-by-Step Deployment:

### 1. Prepare Static Version
```bash
# Convert PHP to static JSON API
# Use Cosmos DB for backend data
# Deploy frontend as static site
```

### 2. Azure Resources Setup
```bash
az login
az group create --name portfolio-rg --location "East US"

# Create Cosmos DB (Free Tier)
az cosmosdb create \
  --resource-group portfolio-rg \
  --name portfolio-cosmos \
  --kind GlobalDocumentDB \
  --enable-free-tier true

# Create Static Web App
az staticwebapp create \
  --name portfolio-static \
  --resource-group portfolio-rg \
  --source https://github.com/yourusername/portfolio \
  --location "East US 2" \
  --branch main
```

### 3. Domain & SSL (FREE)
- Get: yourusername.azurestaticapps.net
- Custom domain: Add your own domain for $10/year
- SSL: Automatically included

### 4. Monitoring & Analytics (FREE)
- Application Insights: 5GB/month free
- Log Analytics: 5GB/month free
- Custom dashboards: Unlimited

## Alternative: If You Want Full PHP

### App Service + MySQL (Higher Cost)
```bash
# Will cost ~$38/month = 4 months with $150

az appservice plan create \
  --name portfolio-plan \
  --resource-group portfolio-rg \
  --sku B1

az webapp create \
  --resource-group portfolio-rg \
  --plan portfolio-plan \
  --name your-portfolio-app \
  --runtime "PHP|8.1"

az mysql flexible-server create \
  --resource-group portfolio-rg \
  --name portfolio-mysql \
  --admin-user admin \
  --admin-password "SecurePass123!" \
  --sku-name Standard_B1ms
```

## My Recommendation: Start with Static Web App

### Benefits:
✅ **18+ months usage** with $150
✅ **Professional URL** 
✅ **Global CDN** (fast loading)
✅ **Auto HTTPS**
✅ **GitHub integration**
✅ **Custom domain support**
✅ **99.95% uptime SLA**

### Later Upgrade:
- When credits are low, upgrade to paid plan
- Add more features gradually
- Scale as needed

## Implementation:
1. Push code to GitHub
2. Create Azure Static Web App
3. Connect GitHub repository
4. Automatic deployment
5. Custom domain (optional)

Total Time: 30 minutes
Total Cost: ~$0-8/month vs $38/month