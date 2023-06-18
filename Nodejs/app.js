const express = require('express');

const app = express();

app.get('',(req, resp) => {
    resp.send([
        {
            name: 'Mk jhon',
            email: 'mk@gmail.com'
        },
        {
            name: 'Justis',
            email: 'jst@gmail.com'
        },
        {
            name: 'laptop',
            price: 50000
        }
    ]);
});

app.listen(5000);
