const express = require('express');
const Employee = require('./mongoose').Employee;

const server = express();

server.get('/', (req, res) => {
    Employee.find({age: {$gte: 22}}, (err, docs) => {
        if(err) throw (err);
        res.json(docs);
    })
})

server.post('/company', (req, res) => {
    const emp = new Employee();
    emp.name = "Ajay";
    emp.age = 25,
    emp.city = "Navi Mumbai";
    emp.save((err, doc) => {
        if(err) res.send(err);
        console.log(res.doc);
    })
})

server.listen(7000, () => {
    console.log('server connected on port 7000');
})