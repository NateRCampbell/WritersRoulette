import { useState } from "react";
import { Link } from "react-router-dom";

const RouletteItem = (props) => {
   const { roulette, editRoulette, deleteRoulette } = props;
   const [editMode, setEditMode] = useState(false);
   const [editedPrompt, setEditedPrompt] = useState(roulette.prompt_body);
   const [readWarning, setReadWarning] = useState(true);

   return (
      <div className="basic prompt">
         <div className="center">
            {editMode ? (
               <div className="center">
                  <div>
                     <textarea
                        className="text-area scroll"
                        type="text"
                        rows="4"
                        cols="65"
                        maxLength="500"
                        value={editedPrompt}
                        onChange={(e) => setEditedPrompt(e.target.value)}
                        key={roulette.prompt_id}
                        placeholder={roulette.prompt_body}
                     >
                        {roulette.prompt_body}
                     </textarea>
                  </div>
                  <div className="tag-parent">
                     <button
                        className="btn edit"
                        onClick={() => {
                           editRoulette(
                              roulette.roulette_id,
                              editedPrompt || roulette.prompt_body
                           );
                           setEditMode(false);
                        }}
                     >
                        update
                     </button>
                     <button
                        className="btn edit"
                        onClick={() => setEditMode(!editMode)}
                     >
                        cancel
                     </button>
                  </div>
               </div>
            ) : (
               <div>
                  <p className="ptext">Prompt:</p>
                  <div className="pbody margin" key={roulette.prompt_id}>
                     {roulette.prompt_body}
                  </div>
                  <div className="tag-parent" key={roulette.prompt_id}>
                     <div>
                        <div>
                           {roulette.mature === true ? (
                              <p className="warning">Mature</p>
                           ) : (
                              <p className="clean">Clean</p>
                           )}
                        </div>
                     </div>
                     <div className="btn-div">
                        <button
                           className="btn"
                           onClick={() => setReadWarning(false)}
                        >
                           read all pages
                        </button>
                        <Link
                           to={`/new_submit/${roulette.roulette_id}`}
                           className="btn f"
                        >
                           write
                        </Link>
                        <button
                           className="btn edit"
                           onClick={() => setEditMode(!editMode)}
                        >
                           edit
                        </button>
                        {readWarning ? (
                           ""
                        ) : (
                           <div className="fade">
                              <div className="caution center">
                                 <h1 className="warning-text">Caution!</h1>
                                 <h4 className="base-text">
                                    By reading this Roulette, you are forfeiting
                                    your chance to write pages for it. Are you
                                    sure you would like to continue?
                                 </h4>
                                 <Link
                                    to={`/read_roulette/${roulette.roulette_id}`}
                                    className="btn delete"
                                 >
                                    Continue
                                 </Link>

                                 <button
                                    className="btn"
                                    onClick={() => setReadWarning(true)}
                                 >
                                    Return
                                 </button>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default RouletteItem;
