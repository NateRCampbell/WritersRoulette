const { getDefaultNormalizer } = require("@testing-library/dom");
const nodemailer = require("nodemailer");

const { DOMAIN, GMAIL_ID, GMAIL_TOKEN, GMAIL_SECRET } = process.env;

exports.sendConfirmationEmail = (user) => {
   // res.send(200);
   // return;

   const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
         type: "OAuth2",
         user: "writiersroulette@gmail.com",
         clientId: GMAIL_ID,
         clientSecret: GMAIL_SECRET,
         refreshToken: GMAIL_TOKEN,
      },
   });
   const message = {
      from: "writiersroulette@gmail.com",
      to: user.email,
      // to: GOOGLE_USER,
      subject: "Writers Roulette Verification",
      html: `
         <h3> Hello there, Nate</h3>
         <p> Thank you for joining in on this adventurous writing project! 
         We're almost there, only one last thing to do. </p>
         <h5.> Verify your account by clickling on this link:
         <a target="_" href="${DOMAIN}/auth/verify_user/${user.email}/${user.username}"> Verify Account</a>
         </h5>
         <p> Have fun, be adventurous! </p>`,
   };
   return transporter.sendMail(message, (err, info) => {
      if (err) {
         throw new Error(err);
      }
   });
};

//make a reset password mailer?
