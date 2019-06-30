require('dotenv').config()

import express from 'express';
import configMiddleware from './config/middleware.js';
import mongoose from 'mongoose';

const app = express();
configMiddleware(app);

//Set up default mongoose connection
const mongoDB = process.env.MONGO_DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`----- Listening on port ${process.env.PORT || 3000} -----`);
});
