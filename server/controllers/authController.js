const bcrypt = require("bcryptjs");
const { sendConfirmationEmail } = require("../mailer");

module.exports = {
   register: async (req, res) => {
      const db = req.app.get("db");
      const { username, email, password } = req.body;
      const [result] = await db.auth.check_user(email, username);
      if (result) {
         return res
            .status(409)
            .send("Oops. Username or email is already in use!");
      }
      const hash = bcrypt.hashSync(password);
      const [user] = await db.auth.register_user(username, email, hash);
      await sendConfirmationEmail(user);
      res.sendStatus(200);
   },
   verify: async (req, res) => {
      const { email, username } = req.params;
      const db = req.app.get("db");
      const [user] = await db.auth.verify_email(email);
      if (!user) {
         return res
            .status(422)
            .send("Hmm... Something went wrong. Email could not be verified.");
      }
      return res.status(200).send(
         `Thank you, ${username}! 
            Your Writer's Roulette account has been verified! 
            You can now log in.`
      );
   },
   login: async (req, res) => {
      const db = req.app.get("db");
      const { email, password } = req.body;
      const [user] = await db.auth.check_login(email);
      if (!user) {
         return res.status(401).send("User not found");
      }
      const isAuthenticated = bcrypt.compareSync(password, user.password);
      if (!isAuthenticated) {
         return res.status(401).send("Incorect Password");
      }
      if (!user.verified) {
         return res.status(401).send("not verified");
      }
      delete user.password;
      req.session.user = user;
      return res.status(200).send(req.session.user);
   },
   logout: (req, res) => {
      req.session.destroy();
      res.status(200).send("You are logged out!");
   },
   // passwordReset: (req, res) => {},
   getUser: (req, res) => {
      const { user } = req.session;
      if (!user) {
         res.status(404).send("user not found");
      }
      res.status(200).send(user);
   },
};
