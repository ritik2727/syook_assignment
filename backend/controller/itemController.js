import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

const createItem = asyncHandler(async (req, res) => {
  try {
    const { name, price } = req.body;
    const newItem = new Item({ name, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create item" });
  }
});

const getAllItem = asyncHandler(async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

const updateItem = asyncHandler(async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.itemId,
      { name, price },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to update item" });
  }
});

export { createItem, getAllItem, updateItem };
