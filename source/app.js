const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 2020, console.log("Servidor corriendo en el puerto 2020"));

const public = path.resolve(__dirname, '../public')

app.use(express.static(public));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));

app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html')))

app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')))
