import "./css/Typing.css";

const align = {
   textAlign: "left",
   display: "center",
   margin: "10px",
   textAlign: "justify",
   textJustify: "inter-word",
};
const list = {
   display: "center",
   width: "90%",
};

const Info = () => {
   return (
      <div>
         <div className="basic center">
            <h1 className="type title">What is Writer's Roulette?</h1>
            <div className="subtitle" style={{ maxWidth: "65ch" }}>
               <p className="base-text" style={align}>
                  Writer's Roulette is an exercise in collaborative storytelling
                  that pulls together writers of all genres, backgrounds, and
                  skill levels. Using rules similar to the game 'Telephone', a
                  Writer's Roulette creates a story one page at a time by one
                  writer at a time.
               </p>
            </div>
            <div className="center subtitle-two">
               <h1 className="sub" style={{ maxWidth: "70ch" }}>
                  The Rules are Simple
               </h1>
               <ul
                  className="base-text"
                  style={list}
                  style={{ maxWidth: "70ch" }}
               >
                  <li className="base-text" style={align}>
                     The writer (thats you!) is given a page that was written by
                     a different writer based off a writing prompt.
                  </li>
                  <li className="base-text" style={align}>
                     Use the context in that page and the writing prompt to
                     continue the story by writing another page.
                  </li>
                  <li className="base-text" style={align}>
                     However, you are only allowed to know what was written on
                     previous page. Seeing any other pages would spoil all the
                     fun.
                  </li>
               </ul>
               *There may be additional rules put into place, but those are the
               basics*
            </div>
         </div>
         <div className="basic center">
            <h1 className="subtitle-five sub">
               Where did this idea come from?
            </h1>
            <div>
               <p className="subtitle-six" style={{ maxWidth: "70ch" }}>
                  <p className="base-text" style={align}>
                     "head, body, & legs" is an art game where one person draws
                     a head, another artist draws a body, and another does the
                     legs. After playing this game, my writing group thought it
                     would be fun to do something like this with a story, and we
                     were right. It was an absolute blast!
                  </p>
                  <p className="base-text" style={align}>
                     Thus, Writer's Roulette was born.
                  </p>
                  <p className="base-text" style={align}>
                     Over the years Writer's Roulettes have become our favorite
                     activity when we all get together. This site is a chance to
                     share the fun with the rest of the writing community, and
                     see what other bizarre stories emerge from the depths.
                  </p>
               </p>
            </div>
         </div>
         <div className="basic center">
            <h1
               className="subtitle-seven sub"
               style={({ fontSize: "xx-large" }, { maxWidth: "70ch" })}
            >
               Tips and Tricks for Writing your Roulette!
            </h1>
            <p className="subtitle-eight" style={(align, { maxWidth: "70ch" })}>
               <p className="base-text" style={align}>
                  To help with continuity, we recommend reading over the prompt
                  and the previous page very carefully. Let it soak in. Try to
                  incorporate as much of the important information from the
                  previous page into the new page.
               </p>
               <p className="base-text" style={align}>
                  It is totally up to you if you wish to change character
                  perspectives. However, we highly recommend keeping everything
                  in third person as it helps with continuity.
               </p>
               <p className="base-text" style={align}>
                  When writing the Prompt for a new Writer's Roulette, make sure
                  to include details that are important to the character/story.
                  (i.e. Main Characters, names, ages, locations, personalities,
                  conflict etc.) the prompt is the only thing that all other
                  writers will be able to see.
               </p>
               <p className="base-text" style={align}>
                  We recommend focusing on interesting characters in interesting
                  setting. Don’t try and map out your whole story in the prompt.
                  The story will be all over the place, thus is the nature of a
                  Writer's Roulette
               </p>
               <p className="base-text" style={align}>
                  All thought the goal is to try and make the pages as cohesive
                  as possible, it will fall short of that goal spectacularly, so
                  we recommend that you, first and foremost, have fun with it!
               </p>
               <p className="base-text" style={align}>
                  Please, PLEASE! Be respectful of the clean/mature rating on
                  the page.
               </p>
               <p className="base-text" style={align}>
                  If you want a bit of extra challenge to make your roulette
                  even more chaotic, try doing it without using the
                  backspace/delete key. It make for some interesting results!
               </p>
               <p className="base-text" style={align}>
                  Once again, have fun with it! We can say, it is a blast!
               </p>
            </p>
         </div>
      </div>
   );
};

export default Info;
