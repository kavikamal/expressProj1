const express = require('express');
const app = express();

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));
//To open a html on a get call 
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));
app.get("/",(req,res)=> {
    res.render('/index.html');
});

app.post('/', function(req, res) {
    var name = req.body.user_name;
    var message = req.body.user_message;
    var email = req.body.user_email;
  
    console.log("Name: " + name);
    console.log("Message: " + message);
    console.log("E-Mail: " + email);
  
    res.send(`
      <h1>Thanks ${name}!</h1>
      <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
      <blockquote>${message}</blockquote>
      `);
  });

app.listen(3000);