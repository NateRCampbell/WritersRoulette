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
                  <div>
                     <Link className="login-link" to="/user_dash">
                        {user.username}'s Dashboard
                     </Link>
                     <Link to="/create_new" className="new-button">
                        +
                     </Link>
                  </div>
               )}
            </div>
         </div>
         <div className="dropdown">
            <button className="menu-button">
               <p className="menu">MENU</p>
               <div className="burger">
                  <div className="patty"></div>
                  <div className="patty"></div>
                  <div className="patty"></div>
               </div>
            </button>
            <div className="drop">
               <Link to="/" className="btn-link">
                  Home
               </Link>
               <Link to="/info" className="btn-link">
                  About
               </Link>
               <Link to="/prompts" className="btn-link">
                  Browse
               </Link>
               {user === null ? (
                  <Link className="btn-link" to="/auth">
                     Login/Register
                  </Link>
               ) : (
                  <Link className="btn-link" to="/user_dash">
                     {user.username}'s Dashbord
                  </Link>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Header;
