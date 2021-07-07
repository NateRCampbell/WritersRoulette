import { useState } from "react";
import { Link } from "react-router-dom";

const RouletteItem = (props) => {
   const { roulette, editRoulette, deleteRoulette } = props;
   const [editMode, setEditMode] = useState(false);
   const [editedPrompt, setEditedPrompt] = useState(roulette.prompt_body);

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
                        <Link
                           to={`/read_roulette/${roulette.roulette_id}`}
                           className="btn f"
                        >
                           read
                        </Link>
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
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default RouletteItem;
