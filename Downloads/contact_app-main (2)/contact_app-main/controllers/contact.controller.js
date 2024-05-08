import Contact from '../models/contact.model.js';

export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, workPhone, address, company} = req.body;
    
    // Create a new contact
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      workPhone,
      address,
      company,
      
    });

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


export default createContact;