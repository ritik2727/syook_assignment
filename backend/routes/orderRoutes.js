import express from "express";
import { createOrder, getAllOrders } from "../controller/orderController.js";

const router = express.Router();


// import {
//   createItem,
//   getAllItem,
//   updateItem,
// } from "."

router.route("/").post(createOrder).get(getAllOrders)



export default router;
