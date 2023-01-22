import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';



//create the root 
const root = ReactDOM.createRoot(document.getElementById("root"));


// render the root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)