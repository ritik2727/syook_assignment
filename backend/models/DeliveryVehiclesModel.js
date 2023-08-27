import mongoose from "mongoose";

const deliveryVehicleSchema = mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      unique: true,
      require: true,
    },
    vehicleType: {
      type: String,
      enum: ["bike", "truck"],
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    activeOrdersCount: { type: Number, default: 0, require: true },
  },
  {
    timeStamps: true,
  }
);

const DeliveryVehicle = mongoose.model(
  "DeliveryVehicle",
  deliveryVehicleSchema
);

export default DeliveryVehicle;
