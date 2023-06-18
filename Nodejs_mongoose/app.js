const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

// sava in database
const savaInDB = async () => {
  const productsModel = mongoose.model('products', productSchema);

  let data = new productsModel({name: 'm8', brand: 'micromax', price: 12500});

  let result = await data.save();
  console.log(result);
};

// savaInDB();

// update in Database
const updateInDB = async () => {
  const productsModel = mongoose.model('products', productSchema);

  let updateData = await productsModel.updateMany(
    { name: 'm8' },
    { 
        $set: { price: 13000 } 
    }
  );
  console.log(updateData);
};

// updateInDB();

// delete in database
const deleteInDB = async () => {
    const productsModel = mongoose.model('products', productSchema);

    let deleteData = await productsModel.deleteOne({ name: 'm8' });
    console.log(deleteData);
};
// deleteInDB();

// find Data in database
const findInDB = async () => {
    const productsModel = mongoose.model('products', productSchema);

    let findData = await productsModel.find({ name: 'm8' });
    console.log(findData);
}
findInDB();



app.listen(4000, () => {
  console.log('Connected!');
});
