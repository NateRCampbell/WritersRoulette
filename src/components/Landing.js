import { Link } from "react-router-dom";

const Landing = () => {
   return (
      <div>
         <div className="center basic">
            <h1 className="center type-three">Welcome to Writer's Roulette.</h1>
            <h2 className="subtitle-three">
               Collaborative Stories with a Twist!
            </h2>
            <div>
               <Link to="/info" className="subtitle-four home-link">
                  What is Writer's Roulette?
               </Link>
            </div>
         </div>
         <div className="center basic"></div>
         <div className="center basic">
            <div>
               <h1>Browse Popular Roulettes</h1>
               <div>
                  <Link to="/prompts" className="home-link">
                     Browse All Roulettes
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
