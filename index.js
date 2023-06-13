const express = require('express');
const app = express();
const ip = require('ip')
const parser = require('body-parser');
const fs = require('fs');
const axios = require('axios');
var path = require('path');

app.use(parser.urlencoded({
  extended: true,
}))
app.use(parser.json());


app.post('/incoming', (req, res) => {
  let ip1 = ip.address();
  console.log(req);
  res.json({'data':'incoming', "req":req.body, "ip":ip1});
})


const port = 5000;

//https://expressjs.com/en/starter/hello-world.html
app.listen(port, () => {
  console.log(`Server 2 started on ${ip.address()}:${port}`)
})
