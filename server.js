const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "meredith35@ethereal.email",
//       pass: "fHwRhVJXFUw4nFxxjm",
//     },
//   });
const contactEmail = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'meredith35@ethereal.email',
      pass: 'fHwRhVJXFUw4nFxxjm'
  }
});
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const contact = req.body.contact; 
    const mail = {
      from: name,
      to: "riteshkhanna149@gmail.com",
      subject: "architect contact form",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Subject: ${contact}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });