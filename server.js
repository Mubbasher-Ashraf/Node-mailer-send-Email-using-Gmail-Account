require('dotenv').config();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
          user : process.env.EMAIL,
          pass: process.env.PASSWORD
     }
});

var mailOptions = {
     from: 'mubashrashraf121@gmail.com',
     to: 'mubashrbhatti@gmail.com',
     cc: 'mubbasher_ashraf@ucp.edu.pk',
     bcc: 'mubbasher_ashraf@ucp.edu.pk',
     subject: 'Image Embedded',
     text: 'Image is Embedded',
     html: '<h1>Mail send using Gmail Account <hr> <img src = "cid:download" />',
     attachments:[
          {
               filename: 'download.jpg',
               path: __dirname+'/download.jpg',
               cid: 'download'
          }
     ]
};

transporter.sendMail(mailOptions,(err, mail)=>{
     if(err){
          return console.log("Error is : "+ err);
     }
     else{
          return console.log("Email sent : ");
     }
});