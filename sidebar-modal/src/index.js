import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css"
import GlobalContext from "./context";


// create the root 
const root = ReactDOM.createRoot(document.getElementById("root"));



// render the root 
root.render(<React.StrictMode>
    <GlobalContext>
        <App />
    </GlobalContext>
</React.StrictMode>)