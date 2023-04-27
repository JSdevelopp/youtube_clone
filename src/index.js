import React from "react";

// '/client' because version 18 of React
import  ReactDOM  from "react-dom/client";


import App from "./App";

import './index.css';


// From index.html id'root' under public folder
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<App />);