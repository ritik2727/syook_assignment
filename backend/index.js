import express from "express";
import dotenv from "dotenv";
import path from "path";
import ConnectDB from "../backend/config/db.js";
import colors from "colors";
import itemRoutes from "../backend/routes/itemRoutes.js";
import deliveryRoutes from "../backend/routes/deliveryRoutes.js";
import orderRoutes from "../backend/routes/orderRoutes.js";
import customersRoutes from "../backend/routes/customersRoutes.js";
dotenv.config();
ConnectDB();

const app = express();

app.use(express.json());

app.use("/api/item", itemRoutes);
app.use("/api/delivery-vehicles", deliveryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/customers", customersRoutes);
app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
