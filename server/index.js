require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { sendConfirmationEmail } = require("./mailer");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(
   session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
   })
);

massive({
   connectionString: CONNECTION_STRING,
   ssl: { rejectUnauthorized: false },
})
   .then((db) => {
      app.set("db", db);
      console.log("Database Connected");
      app.listen(SERVER_PORT, () =>
         console.log(`Server is listening on ${SERVER_PORT}`)
      );
   })
   .catch((err) => console.log(err));
