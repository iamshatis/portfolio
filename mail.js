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
  var from = "shatisneupane2060@gmail.com";
  var to = "abgyawali17@gmail.com";
  var name = req.body.name;
  var subject = `${name.charAt(0).toUpperCase()}${name.slice(1)} Contacting You from Your Website`
  var message = `${req.body.message}
  
Contact here: ${req.body.email}`;

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
      response.send(`<script>alert(Error sending message)</script>`);
    } else {
      console.log('Email sent '+info.response );
      response.send(`<script>alert("You were Lucky your Message sent successfully, This never works😁")</script>`);
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