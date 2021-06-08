import "./App.css";
// import { useContext, useState } from "react";
// import { UserContext } from "./context/UserContext";
// import Auth from "./components/Auth";
import routes from "./routes";
import Header from "./components/Header";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <Header />
            {routes}
         </header>
         {/* <footer>Writer's Roulette</footer> */}
      </div>
   );
}

export default App;
