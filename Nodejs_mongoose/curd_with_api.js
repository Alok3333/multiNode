const express = require('express');
require('./config');
const Product = require('./products');

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const data = new Product(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get('/list', async (req, res) => {
    const data = await Product.find();
    res.send(data);
});


app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data);
});

app.put('/update/:_id', async (req, res) => {
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        { $set: req.body}
    );
    res.send(data);
});





app.listen(5000, () => {
  console.log('connected!');
});
