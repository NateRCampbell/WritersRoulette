import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Prompts = () => {
   const [prompts, setPrompts] = useState([]);

   useEffect(() => {
      axios
         .get("/api/all_prompts")
         .then((res) => {
            console.log(res.data);
            setPrompts(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div>
         <div className>
            <h1 className="title margin">Browse Roulettes</h1>
         </div>
         <div>
            <div>
               {prompts.map((roulette) => {
                  return (
                     <div className="basic prompt">
                        <p className="ptext">prompt:</p>
                        <div className="pbody margin" key={roulette.prompt_id}>
                           {roulette.prompt_body}
                        </div>
                        <Link to="/read_roulette/:roulette_id" className="btn">
                           read
                           {/*how do I send the roulette_id into the url so that it will select all the right info? */}
                        </Link>
                        <Link to="/new_submission/:roulette_id" className="btn">
                           write{" "}
                           {/* same question as above, wont let me do tempLit */}
                        </Link>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Prompts;
