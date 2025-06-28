const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: String,
  sku: String,
  quantity: Number,
  location: String
});

module.exports = mongoose.model('Inventory', inventorySchema);
