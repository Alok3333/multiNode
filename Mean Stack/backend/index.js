const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(express.json());
app.use(cors());

dotenv.config();

// connect to DB
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('Connected to db.');
});


// imports router
const listingRouter = require('./routes/listing');
const userRouter = require('./routes/user');


// router middlewares
app.use("/api/listings", listingRouter);
app.use("/api/user", userRouter);


app.listen(3000, () => {
    console.log('Now your port connected to 3000!');
})