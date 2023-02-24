var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();
var server = http.Server(app);
var port = 5500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "index.html")));

app.post("/send_email", function(req, response){
  var from = req.body.email;
  var to = "shatisneupane2060@gmail.com";
  var name = req.body.name;
  var subject = `${name} Sent you a message.`
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'shatisneupane2060@gmail.com',
      pass: 'qllyqnvxythcqtkt',
    }
  })

  var mailOptions = {
    from: from, 
    to: to,
    subject: subject, 
    text: message
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    } else {
      console.log('Email sent '+info.response )
    }
    response.redirect("/")
  })

});

// Routing 
app.get("/", function(req, response){
  response.sendFile(path.join(__dirname, "index.html"));
})

//initializing the web server 
server.listen(port, function(){
  console.log("Starting server on port:" + port);  
})