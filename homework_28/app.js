const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => console.log('Сервер работает'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/server.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './server.js'));
});

app.get('/serviceavailable/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './serviceavailable.json'))
});

app.get('/getinfo/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './getinfo.json'))
});

app.get('/getdescription/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './getdescription.json'))
});
