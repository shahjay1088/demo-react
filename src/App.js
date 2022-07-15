import React from "react";
import Navbar from "./component/navbar";
import Main from "./component/main";
import './App.css'

export default function App(){
  return(
    <div className="Countainer">
      <Navbar/>
      <Main/>
    </div>
  )
}