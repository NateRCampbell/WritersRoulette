import "./css/Typing.css";

const align = {
   textAlign: "left",
   display: "center",
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
            <div className="subtitle">
               <p style={align}>
                  Writer's Roulette is an exercise in collaborative storytelling
                  that pulls together writers of all genres, backgrounds, and
                  skill levels. Using rules similar to the game 'Telephone', a
                  Writer's Roulette creates a story one page at a time by one
                  writer at a time.
               </p>
            </div>
            <div className="center subtitle-two">
               <h2 className="sub"> The Rules are Simple</h2>
               <ul style={list}>
                  <li style={align}>
                     The writer (thats you!) is given a page that was written by
                     a different writer based off a writing prompt.
                  </li>
                  <li style={align}>
                     Use the context in that page and the writing prompt to
                     continue the story by writing another page.
                  </li>
                  <li style={align}>
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
            <h1 className="subtitle-five">Where did this idea come from?</h1>
            <div>
               <p className="subtitle-six">
                  Some more info will eventually go here
               </p>
            </div>
         </div>
         <div className="basic center">
            <h1 className="subtitle-seven">
               Tips and Tricks for Writing your Roulette!
               <p>tips here</p>
            </h1>
         </div>
      </div>
   );
};

export default Info;
