import DeliveryVehicle from "../models/DeliveryVehiclesModel.js";
import asyncHandler from "express-async-handler";

const createDelivery = asyncHandler(async (req, res) => {
  try {
    const { registrationNumber, vehicleType, city } = req.body;
    const newDeliveryVehicle = new DeliveryVehicle({
      registrationNumber,
      vehicleType,
      city,
    });
    await newDeliveryVehicle.save();
    res.status(201).json(newDeliveryVehicle);
  } catch (error) {
    res.status(500).json({ error: "Failed to create delivery vehicle" });
  }
});

const getAllDelivery = asyncHandler(async (req, res) => {
  try {
    const deliveryVehicles = await DeliveryVehicle.find();
    res.json(deliveryVehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch delivery vehicles" });
  }
});

const updatedDelivery = asyncHandler(async (req, res) => {
  try {
    const { id, activeOrdersCount } = req.body;
    const vehicle = DeliveryVehicle.findById(id);
    if (vehicle) {
      if (activeOrdersCount < 0 || activeOrdersCount > 2) {
        return res
          .status(400)
          .json({ error: "Invalid activeOrdersCount value" });
      }
      const newItem = await DeliveryVehicle.findByIdAndUpdate(id, {
        activeOrdersCount,
      });
      res.send({ msg: "vehicle has been updated" });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "Some problem while updating vehicle" });
  }
});

export { createDelivery, updatedDelivery, getAllDelivery };
