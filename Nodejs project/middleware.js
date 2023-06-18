const exp = require('constants');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname,'public');

// app.set('view engine','ejs');
// // app.use(express.static(publicPath));


// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// });


// // profile 
// app.get('/profile', (req, res) => {
//     const userData = {
//         name: 'Alok',
//         password: 856576736,
//         city: 'LKO',
//         skills: ['Node','Mongo','Express','Angular']
//     }
//     res.render('profile',{userData});
// });


// // login page
// app.get('/login', (req, res) => {
//     res.render('login');
// });


// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/About.html`);
// });

// app.get('/help', (req, res) => {
//     res.sendFile(`${publicPath}/help.html`);
// });

// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// });


const reqFilter = (req, res, next) => {
    if(!req.query.age) {
        res.send('Please enter age');
    }else if(req.query.age < 18){
        res.send('you can access this page');
    } else {
        next();
    }
};

app.use(reqFilter);

app.get('', (req, res) => {
    res.send('Welcome to this page');
});

app.get('/user',  reqFilter, (req, res) => {
    res.send('Welcome to users page');
});



app.listen(5000, () => {
    console.log(`Connection successfully 5000`);
});