const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/pricing', pricingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
