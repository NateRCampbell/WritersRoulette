const bcrypt = require("bcryptjs");
const { sendConfirmationEmail } = require("../mailer");

module.exports = {
   register: async (req, res) => {
      const db = req.app.get("db");
      const { username, email, password } = req.body;
      const [result] = await db.auth.check_user(username, email);
      if (result) {
         return res
            .status(409)
            .send("Oops. These user credentials already in use!");
      }
      const hash = bcrypt.hashSync(password);
      const [user] = await db.auth.register_user(username, email, hash);
      await sendConfirmationEmail({ toUser: user.email, hash: user.username });
      delete user.password;
      req.session.user = user;
   },
   login: async (req, res) => {},
   logout: (req, res) => {},
   getUser: (req, res) => {},
};
