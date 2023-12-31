import express from "express";
import dotenv from "dotenv";
import path from "path";
import ConnectDB from "./config/db.js";
import colors from "colors";
import itemRoutes from "./routes/itemRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import customersRoutes from "./routes/customersRoutes.js";
import cors from "cors";
dotenv.config();
ConnectDB();

const app = express();
// if (process.env.NODE_ENV !== "production") {
  
// }

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/item", itemRoutes);
app.use("/api/delivery-vehicles", deliveryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/customers", customersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);

// export default app;

