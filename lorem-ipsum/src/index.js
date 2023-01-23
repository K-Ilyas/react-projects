import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";




// craete the root 
const root = ReactDOM.createRoot(document.getElementById("root"));


// render the root

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)