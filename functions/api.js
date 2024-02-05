const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const pricingRoutes = require('../routes/pricingRoutes');


app.use('/api/pricing', pricingRoutes);
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);