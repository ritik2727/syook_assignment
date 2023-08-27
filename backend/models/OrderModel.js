import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderNumber: { type: String, unique: true, require: true },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      require: true,
    },
    price: { type: Number, require: true },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      require: true,
    },
    deliveryVehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryVehicle",
      require: true,
    },
    isDelivered: { type: Boolean, default: false, require: true },
    invoiceId: { type: String, require: true },
  },
  {
    timeStamps: true,
  }
);

orderSchema.pre('save', async function (next) {
    try {
      // Check if the order is being created (not updated)
      if (!this.isNew) {
        return next();
      }
  
      // Find the highest existing order number
      const highestOrder = await Order.findOne({}, {}, { sort: { orderNumber: -1 } });
  
      // Generate the next order number
      let nextOrderNumber = '0001'; // Default starting value
      if (highestOrder && highestOrder.orderNumber) {
        const lastOrderNumber = parseInt(highestOrder.orderNumber, 10);
        nextOrderNumber = (lastOrderNumber + 1).toString().padStart(4, '0'); // Increment and add leading zeros
      }
  
      this.orderNumber = nextOrderNumber;
      next();
    } catch (error) {
      next(error);
    }
  });
  
  const Order = mongoose.model('Order', orderSchema);

export default Order;
