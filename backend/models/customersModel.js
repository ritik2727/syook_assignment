import mongoose from "mongoose";
import Item from "./itemModel.js";

const customersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
  },
  {
    timeStamps: true,
  }
);

const Customers = mongoose.model("Customers", customersSchema);

export default Customers;

// 

// Item