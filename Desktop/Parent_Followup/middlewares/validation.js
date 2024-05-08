import { body } from 'express-validator';

const validation = [
    body('name', 'Name is required').not().isEmpty(),
    body('title', 'Organiser is required').not().isEmpty(),
    body('startDate', 'Date is required').not().isEmpty(),
    body('endDate', 'Location is required').not().isEmpty(),
    body('location', 'Description is required').not().isEmpty()
];

export default validation;



  