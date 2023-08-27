import express from "express";
import { createCustomer, deleteCustomer, getAllCustomers, updateCustomers } from "../controller/customersController.js";
const router = express.Router();



router.route("/").post(createCustomer).get(getAllCustomers);

router.route("/:Id").put(updateCustomers).delete(deleteCustomer)



export default router;
