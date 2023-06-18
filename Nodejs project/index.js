const dbConnect = require('./mongoDB');

const main = async () => {
    let data = await dbConnect();
    let findData = await data.find().toArray();
    console.warn(findData);
}

main();




