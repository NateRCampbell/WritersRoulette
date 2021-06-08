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
      // will this work for multiple pages?
   },
   submitPage: (req, res) => {
      const db = req.app.get("db");
      const { roulette_id } = req.params;
   },
   deleteRoulette: (req, res) => {},
};
