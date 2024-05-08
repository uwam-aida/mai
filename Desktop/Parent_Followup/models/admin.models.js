
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  Full_name: { type: String, required: true
 },
 user_name: { type: String, required: true
 },
 password: { type: Date, required: true 
},
email: { type: String, required: true
 },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;

//first model

