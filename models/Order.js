const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: String,
  items: [
    {
      sku: String,
      quantity: Number
    }
  ],
  status: {
    type: String,
    default: 'pending'
  }
});

module.exports = mongoose.model('Order', orderSchema);
