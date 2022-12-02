const Order = require('../models/order');

exports.createOrder = (req, res, next) => {
    const order = new Order({
        date: Date.now(),
        items: req.body.items,
        userId: req.body.userId
    });
    order.save()
        .then(() => res.status(201).json({ message: 'Order created !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyOrder = (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({ message: "Update data can not be empty !" });
    }

    Order.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Order updated !" }))
        .catch(error => res.status(404).json({ error }));
};

exports.deleteOrder = (req, res, next) => {
    Order.findOne({ _id: req.params.id })
        .then(() => {
            Order.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Order deleted !" }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(404).json({ error }));
};

exports.getOrder = (req, res, next) => {
    Order.findOne({ _id: req.params.id })
        .then(order => res.status(200).json(order))
        .catch(error => res.status(400).json({ error }));
};

exports.getOrders = (req, res, next) => {
    Order.find()
        .then(orders => res.status(200).json(orders))
        .catch(error => res.status(404).json({ error }));
};

