var express = require('express');
var app = express();
var fs = require("fs");

const dataUsers = [
  {name: "alice", age: 50},
  {name: "bob", age: 30},
  {name: "chris", age: 20},
]

app.get('/users', function (req, res) {
  res.end( JSON.stringify(dataUsers) );
})

app.get('/users/:name', function (req, res) {
     var user = dataUsers.find((x)=>(x.name==req.params.name));
     console.log( user );
     res.end( JSON.stringify(user));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})