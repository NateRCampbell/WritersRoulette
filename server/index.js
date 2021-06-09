require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const authCtrl = require("./controllers/authController");
const promptCtrl = require("./controllers/promptController");

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

//auth endpoints
app.post("/auth/register", authCtrl.register);
app.get("/auth/verify_user/:email/:username", authCtrl.verify);
app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);
app.get("/auth/get_user", authCtrl.getUser);

//prompt endpoints

app.get("/api/all_prompts", promptCtrl.getPrompt);
app.post("/api/create_roulette", promptCtrl.createRoulette);
app.get(`/api/user_roulette/:author_id`, promptCtrl.userRoulette);
app.get("/api/read_roulette/:roulette_id", promptCtrl.readRoulette);
app.get("/api/new_submit/:roulette_id", promptCtrl.newSubmit);
app.post("/api/submit_page", promptCtrl.submitPage);
app.put("/api/edit_prompt/:roulette_id", promptCtrl.editPrompt);
app.delete("/api/delete_roulette/:roulette_id", promptCtrl.deleteRoulette);
