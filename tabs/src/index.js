import React from "react"
import ReacDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'




// define the root 
const root = ReacDOM.createRoot(document.getElementById("root"));


// render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)