const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/company', () => {
    console.log('db connected.');
  });
}

main().catch((err) => console.log(err));

const userSchema = new Schema({
  name: String,
  age: Number,
  city: String,
});

const Employee = mongoose.model('Employee', userSchema);

module.exports = {
  Employee,
};
