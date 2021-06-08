import { UserContext } from "../context/UserContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDash = () => {
   const { handleLogout } = useContext(UserContext);
   const { user } = useContext(UserContext);
   const [roulettes, setRoulettes] = useState([]);

   useEffect(() => {
      axios
         .get(`/api/user_roulette/${user.author_id}`)
         .then((res) => {
            setRoulettes(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

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
                        <Link to="/create_new" className="btn2">
                           Create a Roulette
                        </Link>
                        <button
                           onClick={() => handleLogout()}
                           className="sm-button"
                        >
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
            <h1 className="title">Your Roulettes</h1>
            <div>
               {roulettes.map((roulette) => {
                  return (
                     <div className="basic" key={roulette.prompt_id}>
                        {roulette.prompt_body}
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default UserDash;
