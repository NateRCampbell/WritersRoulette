import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const title = {
   display: "flex",
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
   alignContent: "center",
   margin: "5px",
   width: "95%",
};

const pad = {
   margin: "15px",
};

const spaceing = {
   margin: "10px",
};
const link = {
   fontSize: "small",
   margin: "10px",
   color: "rgb(68, 118, 149)",
   textDecoration: "none",
};

const page = {
   margin: "10",
   marginTop: "25px",
};

const CreatePost = () => {
   const { user } = useContext(UserContext);
   const [promptBody, setPromptBody] = useState("");
   const [mature, setMature] = useState("");
   const [submitBody, setSubmitBody] = useState("");
   const history = useHistory();

   const handleCreate = () => {
      axios
         .post("/api/create_roulette", {
            promptBody,
            authorId: user.author_id,
            mature,
            submitBody,
         })
         .then((res) => {
            history.push("/user_dash");
         })
         .catch((err) => console.log(err));
   };

   return (
      <div style={pad} className="basic center">
         <h1 className="type-two center"> Create Roulette.</h1>
         <div>
            <div style={title}>
               <h3 className="base-text" style={spaceing}>
                  Writing Prompt:
               </h3>
               <div>
                  <textarea
                     type="text"
                     className="text-area scroll base-text"
                     rows="3"
                     cols="75"
                     required
                     placeholder="(max 500 characters)"
                     maxLength="500"
                     value={promptBody}
                     onChange={(e) => setPromptBody(e.target.value)}
                  />
                  <p className="base-text">
                     Character limit: {promptBody.length}/500
                  </p>
               </div>
            </div>
            <a
               className="base-text"
               style={link}
               href="https://www.reddit.com/r/WritingPrompts/"
               target="_blank"
            >
               Need some inspiration for your prompt? Click me!
            </a>
         </div>
         <div className="line"></div>
         <div style={{ margin: "10px" }}>
            <h2 className="mono-text">Roulette Settings</h2>
            <div>
               <div className="inline">
                  <label className="base-text inline" for="mature">
                     <p className="warning">*</p>
                     Mature Rating?:
                  </label>
                  <select
                     className="inputs base-text"
                     name="mature"
                     required
                     value={mature}
                     onChange={(e) => setMature(e.target.value)}
                  >
                     <option className="base-text" value="">
                        Please select
                     </option>
                     <option className="base-text" value="False">
                        Clean (PG-PG13)
                     </option>
                     <option className="base-text" value="TRUE">
                        Mature (R)
                     </option>
                  </select>
               </div>
               <div className="inline">
                  <div>
                     <label className="base-text" for="more-rules">
                        More Rules:
                     </label>
                  </div>
                  <div className="left-align">
                     <div className="inline">
                        <input
                           type="checkbox"
                           id="not-a-rule"
                           name="base-text"
                           value="not-a-rule"
                           className="checkbox"
                        ></input>
                        <label for="not-a-rule" className="base-text">
                           More rules to come
                        </label>
                     </div>
                     <div className="inline">
                        <input
                           type="checkbox"
                           id="not-a-rule"
                           name="base-text"
                           value="not-a-rule"
                           className="checkbox"
                        ></input>
                        <label for="not-a-rule" className="base-text">
                           This does nothing
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="line" />
         <div>
            <h3 className="base-text" style={page}>
               First Page
            </h3>
            <textarea
               style={spaceing}
               className="text-area scroll"
               type="text"
               rows="30"
               cols="100"
               placeholder="(write a minimum of 1500 characters, and a max of 3000 [approx 350-500 word])"
               minLength="1500"
               maxLength="3000"
               value={submitBody}
               onChange={(e) => setSubmitBody(e.target.value)}
            />
            <p className="base-text">
               Character limit:
               <div>
                  {submitBody.length < 1500 ? (
                     <div className="base-text" style={{ color: "orange" }}>
                        write at least 1500 characters / {submitBody.length}
                     </div>
                  ) : submitBody.length > 2900 ? (
                     <div className="base-text" style={{ color: "orange" }}>
                        {submitBody.length}/3000
                        <p className="warning">
                           Caution: Aproaching Character Limit
                        </p>
                     </div>
                  ) : (
                     <div className="base-text" style={{ color: "green" }}>
                        {submitBody.length}/3000
                     </div>
                  )}
               </div>
            </p>
         </div>
         <div>
            <button className="button" style={spaceing} onClick={handleCreate}>
               Post
            </button>
         </div>
      </div>
   );
};

export default CreatePost;
