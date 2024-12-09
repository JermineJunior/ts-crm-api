import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String }
});

export const CustomerModel = mongoose.model('CustomerModel', CustomerSchema);

//some actions on the model
export const getCustomers = async () => CustomerModel.find();
export const getCustomerByEmail = async (email: String) => CustomerModel.findOne({ email: email.toLocaleLowerCase });
export const createCustomer = async (values: Record<string, any>) => new CustomerModel(values)
  .save().then((customer) => customer.toObject());
export const updateCustomerById = async (id: String, values: Record<string, any>) => CustomerModel.findOneAndUpdate(id, values)
export const deleteCustomerById = async (id: String) => CustomerModel.findOneAndDelete({ _id: id });