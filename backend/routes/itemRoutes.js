// import { createItem, getAllItem, updateItem } from "../../backend/controller/itemController.js";
import express from "express";
const router = express.Router();
import { createItem, getAllItem, updateItem } from "../controller/itemController.js";

// import {
//   createItem,
//   getAllItem,
//   updateItem,
// } from "."

router.route("/").post(createItem).get(getAllItem);

router.route("/:itemId").put(updateItem);

export default router;
