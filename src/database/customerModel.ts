import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String }
});

export const CustomerModel = mongoose.model('Customer', CustomerSchema);

//some actions on the model
/** index */
export const getCustomers = async () => CustomerModel.find();
/** show*/
export const getCustomerByEmail = async (email: String) => CustomerModel.findOne({ email: email });
/** store */
export const createCustomer = async (values: Record<string, any>) => new CustomerModel(values)
  .save().then((customer) => customer.toObject());
/** update */
export const updateCustomerById = async (id: String, values: Record<string, any>) => CustomerModel.findOneAndUpdate(id, values)
/** delete */
export const deleteCustomerById = async (id: String) => CustomerModel.findOneAndDelete({ _id: id });