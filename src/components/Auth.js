import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const center = {
   display: "flex",
   flexDirection: "row",
   flexWrap: "nowrap",
   justifyContent: "center",
   alignItems: "center",
   alignContent: "center",
};

const Auth = (props) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");
   const { handleLogin, handleRegister } = useContext(UserContext);
   const [showReg, setShowReg] = useState(false);

   return (
      <div className="center">
         <h1
            className="type-four"
            style={{
               margin: "10px",
               fontFamily: '"Source Code Pro", monospace',
            }}
         >
            Login & Register.
         </h1>
         {showReg ? (
            <div>
               <div className="auth-box">
                  <div>
                     <h3 className="turq-title">Register</h3>
                  </div>
                  <div className="auth-inner">
                     <input
                        className="auth-inputs"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input
                        className="auth-inputs"
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                     />
                     <input
                        className="auth-inputs"
                        value={password}
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <button
                        className="auth-button btn"
                        onClick={() =>
                           handleRegister(username, email, password)
                        }
                     >
                        Register
                     </button>
                  </div>
               </div>
               <div style={center}>
                  <button
                     className="register"
                     onClick={() => setShowReg(!showReg)}
                  >
                     Back to Login
                  </button>
               </div>
            </div>
         ) : (
            <div>
               <div className="auth-box">
                  <div>
                     <h3 className="turq-title">Login</h3>
                  </div>

                  <div className="auth-inner">
                     <input
                        className="auth-inputs"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input
                        className="auth-inputs"
                        value={password}
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <button
                        className="auth-button btn"
                        onClick={() => handleLogin(email, password)}
                     >
                        Login
                     </button>
                  </div>
               </div>
               <div style={center}>
                  <button
                     className="register"
                     onClick={() => setShowReg(!showReg)}
                  >
                     Register Now
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Auth;
