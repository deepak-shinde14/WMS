const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

router.get('/', async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const item = await Inventory.findById(req.params.id);
  res.json(item);
});

router.post('/', async (req, res) => {
  const newItem = new Inventory(req.body);
  await newItem.save();
  res.json({ message: 'Inventory item added successfully.', id: newItem._id });
});

router.put('/:id', async (req, res) => {
  await Inventory.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Inventory item updated.' });
});

router.delete('/:id', async (req, res) => {
  await Inventory.findByIdAndDelete(req.params.id);
  res.json({ message: 'Inventory item deleted.' });
});

module.exports = router;
