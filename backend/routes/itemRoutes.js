
import express from "express";
const router = express.Router();
import { createItem, getAllItem, updateItem } from "../controller/itemController.js";


router.route("/").post(createItem).get(getAllItem);

router.route("/:itemId").put(updateItem);

export default router;
