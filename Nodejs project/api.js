const express = require('express');
const dbConnect = require('./mongoDB');
const mongodb = require('mongodb');

const app = express();

// Display data on your nodejs terminal
app.get('/', async (req, res) => {
    let db = await dbConnect();
    db = await db.find().toArray();
    res.send(db);
});

// Middleware
app.use(express.json());

// insert data in mongodb
app.post('/', async (req, res) => {
    let db = await dbConnect();
    const result = await db.insertOne(req.body)
    
    res.send(result);
});

// update data from postman to Database
app.put('/:name', async (req, res) => {
    let db = await dbConnect();
    const result = await db.updateOne(
        { name: req.params.name },
        { $set: req.body }
    );

    res.send(result);
});

// Delete data with Api
app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)}
    )

    res.send(result);
});


app.listen(5000, () => {
    console.log('connection successfully!');
});