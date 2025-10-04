# Azure Portfolio Deployment Guide

## Prerequisites
- Azure Account (Free tier available)
- Azure CLI installed
- Git repository

## Method 1: Azure App Service + Azure Database for MySQL

### Step 1: Create Azure Resources
```bash
# Login to Azure
az login

# Create Resource Group
az group create --name portfolio-rg --location "East US"

# Create MySQL Server
az mysql flexible-server create \
  --resource-group portfolio-rg \
  --name portfolio-mysql-server \
  --admin-user portfolioadmin \
  --admin-password "YourPassword123!" \
  --sku-name Standard_B1ms \
  --tier Burstable \
  --public-access 0.0.0.0 \
  --storage-size 20

# Create MySQL Database
az mysql flexible-server db create \
  --resource-group portfolio-rg \
  --server-name portfolio-mysql-server \
  --database-name portfolio_db

# Create App Service Plan
az appservice plan create \
  --name portfolio-plan \
  --resource-group portfolio-rg \
  --sku B1 \
  --is-linux

# Create Web App
az webapp create \
  --resource-group portfolio-rg \
  --plan portfolio-plan \
  --name your-portfolio-app \
  --runtime "PHP|8.1"
```

### Step 2: Configure Database Connection
```bash
# Set connection string
az webapp config appsettings set \
  --resource-group portfolio-rg \
  --name your-portfolio-app \
  --settings \
  DB_HOST="portfolio-mysql-server.mysql.database.azure.com" \
  DB_USER="portfolioadmin" \
  DB_PASSWORD="YourPassword123!" \
  DB_NAME="portfolio_db"
```

### Step 3: Deploy Code
```bash
# Configure deployment
az webapp deployment source config \
  --resource-group portfolio-rg \
  --name your-portfolio-app \
  --repo-url https://github.com/yourusername/portfolio \
  --branch main \
  --manual-integration
```

## Method 2: Azure Container Instances

### Create Dockerfile
```dockerfile
FROM php:8.1-apache

# Install MySQL extension
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy files
COPY . /var/www/html/

# Set permissions
RUN chown -R www-data:www-data /var/www/html
```

### Deploy Container
```bash
# Build and push to Azure Container Registry
az acr create --resource-group portfolio-rg --name portfolioregistry --sku Basic
az acr build --registry portfolioregistry --image portfolio:latest .

# Create container instance
az container create \
  --resource-group portfolio-rg \
  --name portfolio-container \
  --image portfolioregistry.azurecr.io/portfolio:latest \
  --cpu 1 \
  --memory 1 \
  --registry-login-server portfolioregistry.azurecr.io \
  --ip-address Public \
  --ports 80
```

## Method 3: Azure Static Web Apps (for Frontend)

```bash
# Create Static Web App
az staticwebapp create \
  --name portfolio-static \
  --resource-group portfolio-rg \
  --source https://github.com/yourusername/portfolio \
  --location "East US 2" \
  --branch main \
  --app-location "/"
```

## Cost Estimation (Monthly)
- App Service B1: ~$13
- MySQL Flexible Server: ~$25
- Storage: ~$2
- Total: ~$40/month

## Free Tier Options
- Azure App Service: 60 CPU minutes/day (Free)
- Azure Database for MySQL: Not available in free tier
- Alternative: Use Azure Cosmos DB free tier (400 RU/s)

## Environment Variables for Azure
```env
DB_HOST=your-mysql-server.mysql.database.azure.com
DB_USER=your-admin-user
DB_PASSWORD=your-password
DB_NAME=portfolio_db
DB_PORT=3306
```

## Security Best Practices
1. Use Azure Key Vault for secrets
2. Enable SSL/TLS
3. Configure firewall rules
4. Use managed identity
5. Enable application insights

## Monitoring
- Azure Application Insights
- Azure Monitor
- Log Analytics
- Custom dashboards