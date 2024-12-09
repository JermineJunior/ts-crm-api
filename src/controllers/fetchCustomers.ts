import { ObjectId } from "mongodb";
import { getCustomerByEmail, getCustomers } from "../database/customerModel"

export async function fetchAllCustomers(req: any, res: any) {
  try {
    const results = await getCustomers();
    console.log(results);
    res.status(200).json({ data: results })
  } catch (error) {
    console.log(error)
  }
}
// fetch customer by email
export async function fetchCustomerByEmail(req: any, res: any) {
  try {
    const customerEmail = req.params.email;
    const result = await getCustomerByEmail(customerEmail);
    console.log(result);
    res.status(200).json({ data: result })
  } catch (error) {
    console.log(error)
  }
}