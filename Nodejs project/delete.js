const dbConnect = require('./mongoDB');

const deleteData = async () => {
    let db = await dbConnect();
    const result = await db.deleteOne(
        {name: 'F9'}
    );
    console.log(result);
};

deleteData();