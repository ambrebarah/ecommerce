const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');

mongoose
    .connect(
        "mongodb+srv://philippe:zeubi@cluster0.wfjpa.mongodb.net/fivetech?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connection to MongoDB successful !"))
    .catch(() => console.log("Connection to MongoDB failed !"));

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// This middleware intercept all queries that have content type json
// and allow us to use the content in the req
app.use(express.json());

// to serve images folder
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/auth/category', categoryRoutes);
app.use('/api/auth/order', orderRoutes);

module.exports = app;