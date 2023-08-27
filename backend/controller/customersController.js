import Order from "../models/OrderModel.js";
import Customers from "../models/customersModel.js";

// Create Customer API
const createCustomer = async (req, res) => {
    try {
      const { name, city } = req.body;
      const newCustomer = new Customers({ name, city });
      await newCustomer.save();
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create customer' });
    }
  };
  
  // Read Customers API
 const getAllCustomers = async (req, res) => {
    try {
      const customers = await Customers.find();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch customers' });
    }
  };
  
  // Update Customer API
 const updateCustomers = async (req, res) => {
    try {
      const { name, city } = req.body;
      const updatedCustomer = await Customers.findByIdAndUpdate(
        req.params.customerId,
        { name, city },
        { new: true }
      );
      
      if (!updatedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      
      res.json(updatedCustomer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update customer' });
    }
  };
  
  // Delete Customer API
 const deleteCustomer = async (req, res) => {
    try {
      const customerId = req.params.customerId;
  
      // Delete customer and associated orders
      await Customers.findByIdAndDelete(customerId);
      await Order.deleteMany({ customerId });
  
      res.json({ message: 'Customer and associated orders deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete customer' });
    }
  };
  
  export {
    createCustomer,getAllCustomers,deleteCustomer,updateCustomers
  }