import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Prompts = () => {
   const [prompts, setPrompts] = useState([]);
   const [readWarning, setReadWarning] = useState(true);

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
                                    <button
                                       className="btn"
                                       onClick={() => setReadWarning(false)}
                                    >
                                       read
                                    </button>
                                    <Link
                                       to={`/new_submit/${roulette.roulette_id}`}
                                       className="btn"
                                    >
                                       write
                                    </Link>
                                    {readWarning ? (
                                       ""
                                    ) : (
                                       <div className="fade">
                                          <div className="caution">
                                             <h1 className="warning-text">
                                                Caution!
                                             </h1>
                                             <h4 className="base-text">
                                                By reading this Roulette, you
                                                are forfeiting your chance to
                                                write pages for it. Are you sure
                                                you would like to continue?
                                             </h4>
                                             <Link
                                                to={`/read_roulette/${roulette.roulette_id}`}
                                                className="btn delete"
                                             >
                                                Continue
                                             </Link>

                                             <button
                                                className="btn"
                                                onClick={() =>
                                                   setReadWarning(true)
                                                }
                                             >
                                                Return
                                             </button>
                                          </div>
                                       </div>
                                    )}
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

// const Warning = (props) => {
//    return (
//       <div>
//          <h1>Caution</h1>
//          <h3>
//             By reading this Roulette, you will forfeit your ability to write a
//             page for it? Are you sure you would like to continue?
//          </h3>
//          <button>
//             <Link
//                to={`/read_roulette/${roulette.roulette_id}`}
//                className="btn"
//             ></Link>
//             Continue
//          </button>
//          <button>Return</button>
//       </div>
//    );
// };

export default Prompts;
