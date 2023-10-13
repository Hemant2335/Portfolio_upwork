const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/sendmessage", (req, res) => {
  // Extracting the details
  const { name, email, phoneno, budget, message } = req.body;

  // Creating the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nka7412@gmail.com",
      pass: process.env.MY_GMAIL_PASS,
    },
  });

  // Email data

  const mailOptions = {
    from: email,
    to: "knrt73373@gmail.com",
    subject: `Message from ${name}`,
    text: `Name : ${name}\nEmail : ${email}\nPhone No : ${phoneno}\nBudget : ${budget}\nMessage : ${message}`,
  };

  // sendmail

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.send("error");
    } else {
      console.log("Email sent : " + info.response);
      res.send({data : "success"});
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
