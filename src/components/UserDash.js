import { UserContext } from "../context/UserContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const UserDash = () => {
   const history = useHistory();
   const { handleLogout } = useContext(UserContext);
   const { user } = useContext(UserContext);
   const [roulettes, setRoulettes] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const editToggle = () => setEditMode({ editMode: !editMode });
   const [editedPrompt, setEditedPrompt] = useState("");
   const refreshPage = () => window.location.reload();
   console.log(editMode);

   useEffect(() => {
      if (user) {
         axios
            .get(`/api/user_roulette/${user.author_id}`)
            .then((res) => {
               setRoulettes(res.data);
            })
            .catch((err) => console.log(err));
      }
   }, [user]);

   const deleteRoulette = (id) => {
      axios
         .delete(`/api/delete_roulette/${id}`)
         .then((res) => setRoulettes(res.data))
         .catch((err) => {
            console.log(err);
         });
   };

   const editRoulette = (id) => {
      axios
         .put(`/api/edit_prompt/${id}`, editedPrompt)
         .then(() => alert("Update successful, Page will now refresh"))
         .catch((err) => console.log(err));
   };

   return (
      <div>
         <div className="basic">
            User Dashbord
            <div>
               <div>
                  {user === null ? (
                     <div>Please Sign in to View your User Dashboard</div>
                  ) : (
                     <div>
                        <h1 className="title">
                           Welcome {user.username}, to Writer's Roulette!
                        </h1>
                        <Link to="/create_new" className="btn2 margin">
                           Create a Roulette
                        </Link>
                        <button onClick={() => handleLogout()} className="btn3">
                           Logout
                        </button>
                     </div>
                  )}
               </div>
               <div>
                  {/* <button onClick={handleGet}>View Your Roulettes</button> */}
               </div>
            </div>
         </div>
         <div>
            <div className="user-title">
               <h1 className="title">Your Roulettes</h1>
            </div>
            <div className="center">
               {roulettes.map((roulette) => {
                  return (
                     <div className="basic prompt">
                        <p className="ptext">Prompt:</p>
                        {editMode ? (
                           <div>
                              <textarea
                                 type="text"
                                 rows="4"
                                 cols="50"
                                 value={roulette.prompt_body}
                                 onChange={(e) =>
                                    setEditedPrompt(e.target.value)
                                 }
                                 key={roulette.prompt_id}
                              >
                                 {roulette.prompt_body}
                              </textarea>
                              <button>update</button>
                           </div>
                        ) : (
                           <div>
                              <div
                                 className="pbody margin"
                                 key={roulette.prompt_id}
                              >
                                 {roulette.prompt_body}
                              </div>
                              <div
                                 className="tag-parent"
                                 key={roulette.prompt_id}
                              >
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
                                       onClick={() => editToggle()}
                                    >
                                       edit
                                    </button>
                                    <button
                                       className="btn delete"
                                       onClick={() =>
                                          deleteRoulette(roulette.roulette_id)
                                       }
                                    >
                                       delete
                                    </button>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default UserDash;
