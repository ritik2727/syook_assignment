import express from "express";
const router = express.Router();
import { createDelivery, getAllDelivery, updatedDelivery } from "../controller/deliveryController.js";

// import {
//   createItem,
//   getAllItem,
//   updateItem,
// } from "."

router.route("/").post(createDelivery).get(getAllDelivery);

router.route("/update").patch(updatedDelivery);

export default router;