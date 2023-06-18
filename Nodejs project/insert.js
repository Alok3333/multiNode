const dbConnect = require('./mongoDB');

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name: 'Nokia5', brand: 'Nokia', price: 15000, category: 'Android'},
            {name: 'U 51', brand: 'Vivo', price: 15000, category: 'Android'},
            {name: 'Moto 5', brand: 'Moto', price: 18000, category: 'Android'},
            {name: 'F9', brand: 'Oppo', price: 19000, category: 'Android'}
        ]
        )

        console.log(result);
}

insertData();