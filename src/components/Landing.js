import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Landing = () => {
   const { user } = useContext(UserContext);
   return (
      <div>
         <div className="center basic">
            <h1 className="center type-three">Welcome to Writer's Roulette.</h1>
            <h2 className="subtitle-three base-text">
               Collaborative Stories with a Twist!
            </h2>
            <div>
               <Link to="/info" className="subtitle-four base-text home-link">
                  What is Writer's Roulette?
               </Link>
            </div>
         </div>
         <div className="center basic">
            <h1
               style={{
                  margin: "10px",
                  fontFamily: '"Source Code Pro", monospace',
               }}
            >
               Start a Writer's Roulette!
            </h1>
            <div>
               {user === null ? (
                  <Link to="/auth" className="home-link base-text">
                     Log in or Register to Start Writing!
                  </Link>
               ) : (
                  <Link to="/create_new" className="home-link base-text">
                     Create a New Roulette.
                  </Link>
               )}
            </div>
         </div>
         <div className="center basic">
            <div>
               <h1
                  className="base-text"
                  style={{
                     margin: "10px",
                     fontFamily: '"Source Code Pro", monospace',
                  }}
               >
                  Browse Popular Roulettes.
               </h1>
               <div>
                  <Link to="/prompts" className="home-link base-text">
                     Browse All Roulettes
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
