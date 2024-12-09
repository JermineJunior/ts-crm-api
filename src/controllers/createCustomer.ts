import { createCustomer, getCustomerByEmail } from "../database/customerModel";
export async function createCustomerController(req: any, res: any) {
  try {
    const { name, email, phone, address } = req.body;
    //validation
    if (!name) {
      return res.status(400).json({ message: "Name is required" })
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" })
    }
    if (phone && phone.length > 10) {
      return res.status(400).json({ message: "phone must be less than 10 digits" })
    }
    //check if the customer already exists
    const existingCustomer = await getCustomerByEmail(email);
    if (existingCustomer) {
      console.log(existingCustomer)
      return res.status(400).json({ message: "Customer already exists" })
    }
    else {
      const results = await createCustomer({ name, email, phone, address });
      console.log(results);
      res.status(201).json({ message: "Customer was created" })
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
