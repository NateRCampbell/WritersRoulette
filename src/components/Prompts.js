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
         <div className="center">
            <h1
               className="type-four"
               style={{
                  margin: "10px",
                  fontFamily: '"Source Code Pro", monospace',
               }}
            >
               Browse Roulettes.
            </h1>
         </div>
         <div>
            <div>
               {prompts.map((roulette) => {
                  return (
                     <div className="basic" style={{ maxWidth: "100ch" }}>
                        <div className="center">
                           <div>
                              <div className="prompt">
                                 <p className="ptext">Prompt:</p>
                                 <div
                                    className="pbody margin"
                                    key={roulette.prompt_id}
                                 >
                                    {roulette.prompt_body}
                                 </div>
                              </div>
                           </div>
                           <div className="spacing">
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
                                 <div>
                                    <Link
                                       to={`/read_roulette/${roulette.roulette_id}`}
                                       className="btn"
                                    >
                                       read
                                    </Link>
                                    <Link
                                       to={`/new_submit/${roulette.roulette_id}`}
                                       className="btn"
                                    >
                                       write
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Prompts;
