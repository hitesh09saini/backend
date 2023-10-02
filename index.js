require('dotenv').config() 
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/twitter', (req, res) => {
    res.send('hello twitter')
});

app.get('/login', (req, res) => {
    res.send(' <h1 style="background-color: aqua;">Hello</h1>')
});

app.get('/youtube', (req, res) => {
    res.send(' <h1 style="background-color: red;">Youtube</h1>')
});
  

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${port}`);
});