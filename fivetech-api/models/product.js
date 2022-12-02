const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true },
    description: {type: String, required: true },
    price: {type: String, required: true },
    weight: {type: String, required: true },
    country: {type: String, required: true },
    quantity: {type: String, required: true },
    imageUrl: {type: String, required: true },
    category: {type: String, required: true},
    // tag: {type: String, required: true}
    socket: {type: String, default: null},
    motherboard_size: {type: String, default: null},
    motherboard_storage: {type: String, default: null},
    graphicsCard_size: {type: String, default: null},
    power: {type: String, default: null},
    ram: {type: String, default: null}
});

module.exports = mongoose.model('Product', productSchema);