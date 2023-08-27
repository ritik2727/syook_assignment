import DeliveryVehicle from "../models/DeliveryVehiclesModel.js";
import Order from "../models/OrderModel.js";
import Customers from "../models/customersModel.js";
import Item from "../models/itemModel.js";

const createOrder = async (req, res) => {
  try {
    const { customerId, itemId } = req.body;

    // Fetch customer's city and item's price

    const customer = await Customers.findById(customerId);

    const item = await Item.findById(itemId);

    // Find an available delivery vehicle for the customer's city
    const deliveryVehicle = await DeliveryVehicle.findOne({
      city: customer.city,
      activeOrdersCount: { $lt: 2 }, // Check for max 2 orders
      // vehicleType: 'truck', // Assuming only trucks can carry multiple orders
    });

    if (!deliveryVehicle) {
      return res
        .status(400)
        .json({ error: "No available vehicle for this city" });
    }

    // Increment the vehicle's activeOrdersCount
    deliveryVehicle.activeOrdersCount += 1;
    await deliveryVehicle.save();

    // Create order and update activeOrdersCount of the delivery vehicle
    const order = new Order({
      //   orderNumber: generateOrderNumber(),
      itemId,
      price: item.price,
      customerId,
      deliveryVehicleId: deliveryVehicle._id,
      isDelivered: false,
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
export { createOrder, getAllOrders };
