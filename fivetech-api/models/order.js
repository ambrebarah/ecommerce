const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    date: {type: Date, required: true},
    items: {type: String, required: true},
    userId: {type: String, required: true}
});

module.exports = mongoose.model('Order', orderSchema);