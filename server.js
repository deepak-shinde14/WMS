// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventory');
const orderRoutes = require('./routes/order');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://deepakshinde199914:CjGNuBqyoJOPAXS5@cluster0.sbruk.mongodb.net/WMS?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api/inventory', inventoryRoutes);
app.use('/api/orders', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
