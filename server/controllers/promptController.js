module.exports = {
   createRoulette: async (req, res) => {
      const db = req.app.get("db");
      const { promptBody, authorId, mature, submitBody } = req.body;
      try {
         const [r] = await db.roulette.create_prompt(
            promptBody,
            authorId,
            mature
         );
         await db.roulette.create_first(r.roulette_id, authorId, submitBody);
         res.sendStatus(200);
      } catch (err) {
         console.log(err);
         res.status(409).send("error here");
      }
   },
   getPrompt: (req, res) => {
      const db = req.app.get("db");
      db.roulette
         .get_prompts()
         .then((prompts) => {
            res.status(200).send(prompts);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send("Error: Could not get Prompts");
         });
   },
   userRoulette: (req, res) => {
      const db = req.app.get("db");
      const { author_id } = req.params;
      db.roulette
         .get_user_roulettes(author_id)
         .then((roulettes) => {
            res.status(200).send(roulettes);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send("Could not get user Roulettes");
         });
   },
   readRoulette: (req, res) => {
      const db = req.app.get("db");
      const { roulette_id } = req.params;
      db.roulette
         .read_roulette(roulette_id)
         .then((r) => {
            res.status(200).send(r);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send("Couldn't get Roulette");
         });
   },
   newSubmit: (req, res) => {
      const db = req.app.get("db");
      const { roulette_id } = req.params;
      db.roulette
         .get_last_page(roulette_id)
         .then((r) => {
            res.status(200).send(r);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send("Couldn't get Roulette");
         });
   },
   submitPage: (req, res) => {
      const db = req.app.get("db");
      const { author_id } = req.session.user;
      const { roulette_id, submit_body, submit_page } = req.body;
      db.roulette
         .submit_new_page(roulette_id, author_id, submit_body, submit_page)
         .then(() => res.sendStatus(200))
         .catch((err) => {
            console.log(err);
            res.status(409).send("hmmm... there was an error");
         });
      res.sendStatus(200);
   },
   editPrompt: (req, res) => {
      const db = req.app.get("db");
      const { roulette_id } = req.params;
      const { prompt_body } = req.body;
      const { author_id } = req.session.user;
      db.roulette
         .edit_prompt(roulette_id, prompt_body, author_id)
         .then((newArr) => res.status(200).send(newArr))
         .catch((err) => console.log(err));
   },
   deleteRoulette: (req, res) => {
      const db = req.app.get("db");
      const { roulette_id } = req.params;
      console.log(req.session.user);
      const { author_id } = req.session.user;
      db.roulette
         .delete_roulette(roulette_id, author_id)
         .then((rouletteArr) => res.status(200).send(rouletteArr))
         .catch((err) => {
            console.log(err);
            res.status(500).send("could not delete");
         });
   },
};
