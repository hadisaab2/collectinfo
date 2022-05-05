const express = require("express");
//const sgMail = require('@sendgrid/mail')
//sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport");
const {SENDGRIDAPI} = require('./config/keys');

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
    api_key:SENDGRIDAPI
    }
}))
app.use(express.static(path.resolve(__dirname,'./frontend/build')));

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/email", (req, res) => {
    const {response,userphone,useremail,inputname} = req.body;
    transporter.sendMail({
        to:"hadisaab2022@gmail.com",
        from: "saabhadi285@gmail.com",
        subject:"Chatbot user",
        html:`<h3>name : ${inputname}</h3>
        <h3>interests : ${response.join(',')}</h3>
        <h3>phone : ${userphone}</h3>
        <h3>email : ${useremail}</h3>`
        }).then(resp => {
        res.json({resp})
        })
        .catch(err => {
        console.log(err)
        })
});
app.listen(3001, async (req, res) => {
      console.log("backend running");
});

app.get('*',(req, res)=>{  res.sendFile(path.resolve(__dirname,'./frontend/build','index.html'));});
