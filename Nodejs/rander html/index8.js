const express = require('express');
const app = express();

app.get('',(req, res) => {
    res.send(`<h1>Welcome to visit my Home Page</h1>
        <a href="/about">Go to about page</a>
    `);
});

app.get('/about',(req, res) => {
    res.send(`
    <input type="text" placeholder="text here"/>
    <button>Submit</button>
    <a href="/">Go go home page</a>
    `);
});

app.get('/help',(req, res) => {
    res.send([
        {
            name: "Alok",
            password: 987678
        },
        {
            name: "Vijay",
            password: 987898
        }
    ]);
});

app.listen(3000);