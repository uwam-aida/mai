import express from 'express';
import eventController from '../controllers/event.controller.js'
import validation from "../middlewares/validation.js";
import user from './user.routes.js'
const router = express.Router();

// Create a new event
router.post('/event',validation,eventController.createEvent);

// Get all events
router.get('/events', eventController.getAllEvents);

// Get a single event by ID
router.get('/events/:id', eventController.getEventById);

// Update an event by ID
router.patch('/eventupdate/:id',validation,eventController.updateEvent);

// Delete an event by ID
router.delete('/events/:id', eventController.deleteEvent);
router.use('/user',user)
export default router;