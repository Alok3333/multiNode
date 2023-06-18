const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

// app.get('/',(_, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// });

app.get('/profile',(_, res) => {
    const user={
        name: 'Alok',
        email: 'Ak@gmail.com',
        city: 'Lko',
        skills: ['Nodejs','MongoDB','Angularjs','Git/Github']
    }
    res.render('profile',{user});
});

app.get('/login',(req, res) => {
    res.render('login');
});

// app.get('/about',(_, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// });

// app.get('/help',(_, res) => {
//     res.sendFile(`${publicPath}/help.html`);
// });

// app.get('*',(_, res) => {
//     res.sendFile(`${publicPath}/404.html`);
// });

app.listen(3000);