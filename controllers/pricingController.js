const { calculatePrice } = require('../services/pricingService');

exports.calculateDeliveryPrice = async (req, res) => {
    try {
        const { zone, organization_id, total_distance, item_type } = req.body;
        const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
        res.json({ total_price: totalPrice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
