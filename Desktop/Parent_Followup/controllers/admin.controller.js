import Event from "../models/event.models.js";
import { BadRequestError } from "../errors/index.js";
import { validationResult } from "express-validator";
import { sign } from "../utils/jwt.js";
import { Hash } from "../utils/bcypt.js";
// Create a new event
const eventController ={
  createEvent : async(req, res,next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()) {
      return next(new BadRequestError(errors.array()[0].msg))
    }
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  
  // Get all events
  getAllEvents : async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  // Get a single event by ID
  getEventById : async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(event);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  // Update an event by ID
  updateEvent : async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      Object.assign(event, req.body);
      await event.save();
      res.json(event);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  
 
// Delete an event by ID
deleteEvent: async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
}



export default eventController;