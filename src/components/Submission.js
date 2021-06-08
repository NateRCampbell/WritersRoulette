import { useState, useContext } from "react";

const Submission = () => {
   const [submitBody, setSubmitBody] = useState("");

   return (
      <div className="basic">
         <div>Submission</div>
         <div>
            <h3>Previous Page</h3>
            <div>
               <p>place holder text</p>
            </div>
         </div>
         <div>
            <div>
               <h3>First Page</h3>
               <textarea
                  className="text-area"
                  type="text"
                  rows="30"
                  cols="100"
                  placeholder="(write a minimum of 1500 characters, and a max of 3000 [approx 350-500 word])"
                  minLength="1500"
                  maxLength="3000"
                  value={submitBody}
                  onChange={(e) => setSubmitBody(e.target.value)}
               />
            </div>
         </div>
      </div>
   );
};

export default Submission;
