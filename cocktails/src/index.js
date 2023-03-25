import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App";
import "./styles/index.css"



// create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));


// render the root

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

