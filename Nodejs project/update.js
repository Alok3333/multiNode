const dbConnect = require('./mongoDB');

const updateData = async () => {
  let db = await dbConnect();
  const result = await db.update(
    { name: 'Nokia5' },
    { $set: { name: 'Nokia5pro', price: 16000 } }
  );
  console.log(result);
};

updateData();
