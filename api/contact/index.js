// Static Web App API Functions for Azure
const { CosmosClient } = require('@azure/cosmos');

// Cosmos DB configuration
const client = new CosmosClient({
    endpoint: process.env.COSMOS_DB_ENDPOINT,
    key: process.env.COSMOS_DB_KEY
});

const database = client.database('PortfolioDB');
const container = database.container('ContactMessages');

module.exports = async function (context, req) {
    context.log('Contact form API triggered');

    // Set CORS headers
    context.res = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    };

    if (req.method === 'OPTIONS') {
        context.res.status = 200;
        return;
    }

    if (req.method === 'POST') {
        try {
            const { name, email, subject, message } = req.body;

            // Validation
            if (!name || !email || !subject || !message) {
                context.res = {
                    status: 400,
                    body: { success: false, message: 'सभी fields भरना जरूरी है!' }
                };
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                context.res = {
                    status: 400,
                    body: { success: false, message: 'Valid email address डालें!' }
                };
                return;
            }

            // Save to Cosmos DB
            const contactMessage = {
                id: `msg_${Date.now()}`,
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString(),
                ip: req.headers['x-forwarded-for'] || 'unknown',
                status: 'unread'
            };

            await container.items.create(contactMessage);

            context.res = {
                status: 200,
                body: { success: true, message: 'आपका message successfully save हो गया है!' }
            };

        } catch (error) {
            context.log.error('Error saving contact message:', error);
            context.res = {
                status: 500,
                body: { success: false, message: 'Technical error occurred!' }
            };
        }
    } else {
        context.res = {
            status: 405,
            body: { success: false, message: 'Method not allowed' }
        };
    }
};