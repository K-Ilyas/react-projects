import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App";
import AppContext from "./context";
import "./styles/index.css"

// create the root element 
const root = ReactDOM.createRoot(document.getElementById("root"));


// render the root element
root.render(<React.StrictMode>
    <AppContext>
        <App />
    </AppContext>
</React.StrictMode>)