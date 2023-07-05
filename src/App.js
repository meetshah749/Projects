import "./App.css";
import Home from "./components/Home";
import { useState,useEffect } from "react";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Assistant from "./components/Assistant";
import Chart from "./components/Chart";

function App() {
return(
 <BrowserRouter>
 <div className="nav">
  <ul>
    <Link to="/"><li>Home</li></Link>
    <Link to="Chart"><li>Chart</li></Link>
    <Link to="Assistant"><li>Assistant</li></Link>  
  </ul>
 </div>
 <Routes>
  <Route path="/" index element= {<Home />}></Route>
  <Route path="/chart" index element= {<Chart />}></Route>
  <Route path="/assistant" index element= {<Assistant />}></Route>
 </Routes>
 </BrowserRouter>
)
}

export default App;