import express from 'express'
import { createContact } from '../controllers/contact.controller.js'; 

const router = express.Router();

router.post('/contacts', createContact);

export default router;