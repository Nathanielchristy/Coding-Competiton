const express= require("express");
const path= require("path");
const app=express();
const PORT = process.env.PORT || 3000;
const nodemailer= require("nodemailer")

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get("/mailer",(req,res)=>{
    const mail= req.query.email;
    console.log(mail);
    // async..await is not allowed in global scope, must use a wrapper
 async function main() {
     // Generate test SMTP service account from ethereal.email
    
     
   
     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
       service:"gmail",
       secure: false, // true for 465, false for other ports
       auth: {
         user: "nathanieltestmail123@gmail.com", // generated ethereal user
         pass: "testemailpass", // generated ethereal password
       },
     });
   
     // send mail with defined transport object
     let info = await transporter.sendMail({
       from: '"nathanieltestmail123@gmail.com', // sender address
       to: mail, // list of receivers
       subject: "This Message is sent with mailer", // Subject line
       text: "Trying to send a mail to your account through mailer", // plain text body
       html: "<b>Trying to send a mail to your account through mailer</b>", // html body
     },function(err,info){
         if(err){
             res.sendFile(path.join(__dirname, 'public/fail.html'))
         }
         else{
             res.sendFile(path.join(__dirname, 'public/success.html'))
         }
     });
   
     
   }
   
   main().catch(console.error);
 
 })

















app.listen(PORT,()=>{
    console.log(`Your Server is running on ${PORT}`)
});