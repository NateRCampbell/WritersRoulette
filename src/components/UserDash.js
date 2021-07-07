import { UserContext } from "../context/UserContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import RouletteItem from "./RouletteItem";

const UserDash = () => {
   const history = useHistory();
   const { handleLogout } = useContext(UserContext);
   const { user } = useContext(UserContext);
   const [roulettes, setRoulettes] = useState([]);
   const { toggleDarkMode } = useContext(UserContext);
   const { darkMode } = useContext(UserContext);
   const { fontStyle, setFontStyle } = useContext(UserContext);
   console.log(fontStyle);

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

   const editRoulette = (id, editedPrompt) => {
      axios
         .put(`/api/edit_prompt/${id}`, { prompt_body: editedPrompt })
         .then((res) => setRoulettes(res.data))
         .catch((err) => console.log(err));
   };

   return (
      <div>
         <h1 className="title" style={{ margin: "10px" }}>
            User Dashbord.
         </h1>
         <div className="basic">
            <div>
               <div>
                  {user === null ? (
                     <div>Please Sign in to View your User Dashboard</div>
                  ) : (
                     <div>
                        <div>
                           <h1 className="title">
                              Welcome {user.username}, to Writer's Roulette!
                           </h1>
                           <Link to="/create_new" className="btn2">
                              Create a Roulette
                           </Link>
                           <button
                              onClick={() => handleLogout()}
                              className="btn2"
                           >
                              Logout
                           </button>
                           <div className="line" />
                           <div>
                              <h2 className="mono-text">Settings</h2>
                              <button className="btn2" onClick={toggleDarkMode}>
                                 {darkMode
                                    ? "Switch to Light Mode"
                                    : "Switch to Dark Mode"}
                              </button>
                              <div className="inline">
                                 <p className="base-text">Font Style:</p>
                                 <select
                                    name="font"
                                    id="font"
                                    className="font-box inputs"
                                    onChange={(e) =>
                                       setFontStyle(e.target.value)
                                    }
                                 >
                                    <option className="base-text">
                                       selected: {fontStyle}
                                    </option>
                                    <option
                                       className="base-text"
                                       value="helvetica"
                                    >
                                       Helvetica (default)
                                    </option>
                                    <option
                                       className="base-text"
                                       value="comic-sans"
                                    >
                                       Comic Sans
                                    </option>
                                    <option
                                       className="base-text"
                                       value="dyslexic"
                                    >
                                       Open Dyslexic
                                    </option>
                                    <option
                                       className="base-text"
                                       value="monospace"
                                    >
                                       Monospace
                                    </option>
                                    <option
                                       className="base-text"
                                       value="times-new"
                                    >
                                       Times New Roman
                                    </option>
                                 </select>
                                 <p className="margin example">
                                    ( Example text )
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
               <div></div>
            </div>
         </div>
         <div>
            <div className="user-title">
               <h1 className="title">Your Roulettes.</h1>
            </div>
            <div className="center">
               {roulettes.map((roulette) => {
                  return (
                     <RouletteItem
                        roulette={roulette}
                        editRoulette={editRoulette}
                        // deleteRoulette={deleteRoulette}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default UserDash;
