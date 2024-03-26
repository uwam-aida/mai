import  'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import FacilitatorModel from './models/facilitator.modules.js';
import { Getstud, createStud,updatestud,delstud,findbyemail } from './controller/student.js';
import { createfacilitator, readallfacilitator,updatefacilitatorbyid ,delbyidfacilitator,readfacilitatorbyid,findbyemails} from './controller/facilitator.js';
import routes from './routes/server.js';
const app = express();
const port = process.env.PORT || 3001;
const db_connection_string = process.env.MONGODB_URI;

app.use(express.json());
app.use('/',routes)



mongoose.connect(db_connection_string)
.then(() => {
    console.log("Connected to DB...");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch((err) => {
    console.log(err);
});




















// //facilitator

