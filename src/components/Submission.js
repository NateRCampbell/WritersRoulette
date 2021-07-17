import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Submission = () => {
   const { user } = useContext(UserContext);
   const history = useHistory();
   const [submitBody, setSubmitBody] = useState("");
   const [prePage, setPrePage] = useState("");
   const { roulette_id } = useParams();
   const [preNum, setPreNum] = useState([]);
   const [prompt, setPrompt] = useState([]);
   const submit_page = preNum + 1;
   const submit_body = submitBody;
   const author_id = user.author_id;
   console.log(author_id);

   useEffect(() => {
      axios
         .get(`/api/new_submit/${roulette_id}`)
         .then((res) => {
            if (Array.isArray(res.data)) {
               setPrePage(res.data[0].submit_body);
               setPreNum(res.data[0].submit_page);
               setPrompt(res.data[0].prompt_body);
            }
         })
         .catch((err) => console.log(err));
   }, [roulette_id]);

   const handleSubmit = () => {
      axios
         .post("/api/submit_page", {
            roulette_id,
            submit_body,
            submit_page,
            author_id,
         })
         .then((res) => {
            history.push("/user_dash");
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="center">
         <h1 className="title type-six">New Page Submission.</h1>
         <div className="basic">
            <div>
               <div className="center">
                  <div>
                     <div className="ptext">Prompt:</div>
                     <p className="pbody">{prompt}</p>
                  </div>
                  <div className="line" />
                  <h3 className="title">Previous Page</h3>
                  <p className="page-num sm-text">page {preNum}</p>
                  <div className="page-body scroll">{prePage}</div>
               </div>
            </div>
            <div>
               <div>
                  <h3 className="title">Your Page</h3>
                  <p className="page-num sm-text">page {submit_page}</p>
                  <textarea
                     className="text-area scroll"
                     type="text"
                     rows="30"
                     cols="100"
                     placeholder="(write a minimum of 1500 characters, and a max of 3000 [approx 350-500 word])"
                     minLength="1500"
                     maxLength="3000"
                     value={submitBody}
                     required
                     onChange={(e) => setSubmitBody(e.target.value)}
                  />
                  <div>
                     <p>
                        Character limit:
                        <div>
                           {submitBody.length < 1500 ? (
                              <div style={{ color: "orange" }}>
                                 write at least 1500 characters /{" "}
                                 {submitBody.length}
                              </div>
                           ) : submitBody.length > 2900 ? (
                              <div style={{ color: "orange" }}>
                                 {submitBody.length}/3000
                                 <p className="warning">
                                    Caution: Aproaching Character Limit
                                 </p>
                              </div>
                           ) : (
                              <div style={{ color: "green" }}>
                                 {submitBody.length}/3000
                              </div>
                           )}
                        </div>
                     </p>
                     <button className="button margin" onClick={handleSubmit}>
                        Submit Page
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Submission;
