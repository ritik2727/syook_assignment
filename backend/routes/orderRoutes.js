import express from "express";
import { createOrder, getAllOrders } from "../controller/orderController.js";

const router = express.Router();


// import {
//   createItem,
//   getAllItem,
//   updateItem,
// } from "."

router.route("/").get(getAllOrders).post(createOrder)



export default router;
