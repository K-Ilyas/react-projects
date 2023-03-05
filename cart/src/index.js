import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App";
import "./styles/index.css"
import GlobalProvider from "./context"

// create the roor element 
const root = ReactDOM.createRoot(document.getElementById("root"));


// render the root elemet 
root.render(
    <React.StrictMode>
        <GlobalProvider>

            <App />
        </GlobalProvider>
    </React.StrictMode>)