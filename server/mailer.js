const nodemailer = require("nodemailer");

const { GOOGLE_USER, GOOGLE_PASSWORD, DOMAIN } = process.env;

exports.sendConfirmationEmail = ({ toUser, hash }) => {
   return new Promise((res, rej) => {
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: GOOGLE_USER,
            password: GOOGLE_PASSWORD,
         },
      });
      const message = {
         from: GOOGLE_USER,
         // to: toUser.email,
         to: GOOGLE_USER,
         subject: "Writers Roulette Activation",
         html: `
         <h3> Hello there, ${toUser.username}</h3>
         <p> Thank you for joining in on this adventurous writing project! We're almost there, only one last thing to do. </p>
         <h5.> Activate your account by clickling on this link:
         <a target="_" href="${DOMAIN}/api/activate/user/${hash}"> Activate Account</a>
         </h5>
         <p> Have fun, be adventurous! </p>`,
      };
      transporter.sendMail(message, (err, info) => {
         if (err) {
            rej(err);
         } else {
            res(info);
         }
      });
   });
};
