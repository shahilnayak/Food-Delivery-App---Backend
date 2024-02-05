const Pricing = require('../models/Pricing');

async function calculatePrice(zone, organizationId, totalDistance, itemType) {
    try {
        // Fetch pricing details from the database based on zone, organizationId, and itemType
        const pricing = await Pricing.findOne({
            where: {
                organization_id: organizationId,
                zone: zone,
                item_id: itemType,
            },
        });

        if (!pricing) {
            throw new Error('Pricing details not found');
        }

        // Calculate the total price based on base distance, per km price, and total distance
        let totalPrice = pricing.fix_price; // Base price
        if (totalDistance > pricing.base_distance_in_km) {
            const additionalDistance = totalDistance - pricing.base_distance_in_km;
            totalPrice += additionalDistance * pricing.km_price; // Per km price
        }

        return totalPrice * 100; // Convert price to cents to avoid decimal issues
    } catch (error) {
        throw new Error('Error calculating price: ' + error.message);
    }
}

module.exports = { calculatePrice };
