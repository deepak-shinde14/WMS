const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

router.post('/', async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.json({ message: 'Order created successfully.', id: newOrder._id });
});

router.put('/:id', async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Order updated.' });
});

router.delete('/:id', async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: 'Order deleted.' });
});

module.exports = router;
