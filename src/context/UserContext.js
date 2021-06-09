import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
   const history = useHistory();
   const [user, setUser] = useState(null);

   useEffect(() => {
      axios
         .get("auth/get_user")
         .then((res) => {
            setUser(res.data);
            history.push("/user_dash");
         })
         .catch((err) => {
            console.log(err);
            history.push("/auth");
         });
   }, []);

   const handleLogin = (email, password) => {
      axios
         .post("/auth/login", { email, password })
         .then((res) => {
            setUser(res.data);
            history.push("/user_dash");
         })
         .catch((err) => {
            alert(err);
            console.log(err);
         });
   };

   const handleRegister = (username, email, password) => {
      console.log(username, email, password);
      alert(
         "Thank you for registering, Please check your email for a verification link"
      );
      axios
         .post("/auth/register", { username, email, password })
         .then((res) => {
            setUser(res.data);
         })
         .catch((err) => console.log(err));
   };

   const handleLogout = () => {
      axios.get("auth/logout").then((res) => {
         alert(res.data);
         setUser(null);
         history.push("/");
      });
   };

   return (
      <UserContext.Provider
         value={{
            test: "this is a test",
            user,
            setUser,
            handleLogin,
            handleRegister,
            handleLogout,
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
};
