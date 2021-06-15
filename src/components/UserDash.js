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
                        <h1 className="title">
                           Welcome {user.username}, to Writer's Roulette!
                        </h1>
                        <Link to="/create_new" className="btn2 margin">
                           Create a Roulette
                        </Link>
                        <button onClick={() => handleLogout()} className="btn2">
                           Logout
                        </button>
                     </div>
                  )}
               </div>
               <div></div>
            </div>
         </div>
         <div>
            <div className="user-title">
               <h1 className="title">Your Roulettes</h1>
            </div>
            <div className="center">
               {roulettes.map((roulette) => {
                  return (
                     <RouletteItem
                        roulette={roulette}
                        editRoulette={editRoulette}
                        deleteRoulette={deleteRoulette}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default UserDash;
