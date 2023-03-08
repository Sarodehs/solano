const path = require('path');
const express = require('express');
 
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 



const fetch = require("node-fetch")
const bodyParser = require('body-parser');
const { stringify } = require('querystring');
app.get('/contact', (_, res) => res.sendFile(__dirname + '/contact'));


app.post('/contact',(req,res)=>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hemalisarode50@gmail.com',
          pass: "aspwqcuatybxymwq"
        }
    });

    var mailOptions = {
        to: 'hemalisarode50@gmail.com',// sender address
        name: req.body.name, // Name line
        email: req.body.email, // list of receivers
        text:req.body.message,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `
    };
  
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("error", error);
          res.json({status: true, respMesg: 'Email not Sent Successfully'})
        } else {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});



app.post('/contact ', async (req, res) => {
  const recap = document.getElementById("recapcha").value;
  if (!req.recapcha.captcha)
    return res.json({ success: false, msg: 'Please select captcha' });

  // Secret key
  const secretKey = '6LdpvDEUAAAAAHszsgB_nnal29BIKDsxwAqEbZzU';

  // Verify URL
  const query = stringify({
    secret: secretKey,
    response: req.body.captcha,
    remoteip: req.connection.remoteAddress
  });
  const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;

  // Make a request to verifyURL
  const recapcha = await fetch(verifyURL).then(res => res.json());

  // If not successful
  if (recapcha.success !== undefined && !recapcha.success)
    return res.json({ success: false, msg: 'Failed captcha verification' });

  // If successful
  return res.json({ success: true, msg: 'Captcha passed' });
});



const connection_url ="mongodb+srv://solano:Solano12345@cluster0.jdqpqpe.mongodb.net/?retryWrites=true&w=majority"


// listen to the port
app.listen(3000, () => {
    console.log('server start on port 8000');
  });

