import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
   const { user } = useContext(UserContext);

   return (
      <nav className="navbar">
         <h1 className="nav-title">Writer's Roulette.</h1>
         <div className="nav-links">
            <Link to="/" className="link">
               {" "}
               Home{" "}
            </Link>
            <Link to="/info" className="link">
               {" "}
               About{" "}
            </Link>
            <Link to="/prompts" className="link">
               {" "}
               Browse{" "}
            </Link>
         </div>
         <div>
            <div className="user-links">
               {user === null ? (
                  <Link className="login-link" to="/auth">
                     Login/Register
                  </Link>
               ) : (
                  <Link className="login-link" to="/user_dash">
                     {user.username}'s Dashbord
                  </Link>
               )}

               <Link to="/create_new" className="new-button">
                  +
               </Link>
            </div>
         </div>
         <div className="menu-button">
            <p className="menu">MENU</p>
            <div className="burger">
               <div className="patty"></div>
               <div className="patty"></div>
               <div className="patty"></div>
            </div>
         </div>
      </nav>
   );
};

export default Header;
