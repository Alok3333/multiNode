const express = require('express');
require('./config');
const Product = require('./products');

// const port = process.env.PORT || 6000;

const app = express();
app.use(express.json());


app.get('/search/:key', async (req, res) => {
  console.log(req.params.key);
  let data = await Product.find(
    {
      "$or": [
        { "name": { $regex: req.params.key }},
        { "brand": { $regex: req.params.key }},
        { "category": { $regex: req.params.key }}
      ]
    }
  );
  res.send(data)
});


app.listen(3000, () => {
  console.log(`connecting on port 3000`);
});