import "./App.css";
// import { useContext, useState } from "react";
// import { UserContext } from "./context/UserContext";
// import Auth from "./components/Auth";
import routes from "./routes";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
   const { darkMode } = useContext(UserContext);

   return (
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
         <header className="App-header">
            <Header />
            {routes}
         </header>
         {/* <footer>Writer's Roulette</footer> */}
      </div>
   );
}

export default App;
