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


app.post('/test', (req, res) => {
  let filePath = "/waleed_PV_dir/" + req.body['file'];
  let contents = null;
  let exists = fileExists(filePath);
  if(exists){
    contents = fs.readFileSync(filePath, 'utf-8');
  }
  res.json({"exists?2:":exists, "contents2":contents});
  //res.json({'data':'incoming', "req":req.body, "ip":ip1});
})


function fileExists(filePath){
  if(fs.existsSync(filePath)){
      return true;
  }
  else{
      return false;
  }
}


const port = 5000;

//https://expressjs.com/en/starter/hello-world.html
app.listen(port, () => {
  console.log(`Server 2 started on ${ip.address()}:${port}`)
})
