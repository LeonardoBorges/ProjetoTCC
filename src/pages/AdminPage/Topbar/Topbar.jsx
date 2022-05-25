import React from "react";
import "./Topbar.css";
import { BsFillBellFill, BsGearFill, BsGlobe2 } from "react-icons/bs";


export default function Topbar() {


  return (
    <div className="topbar">
      <div className="tobparWrapper">
        <div className="topLeft">
          <span className="logo_PagBarato">PagBarato</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <BsFillBellFill />
  
          </div>
          <div className="topbarIconContainer">
          <BsGlobe2 />
          
          </div>
          <div className="topbarIconContainer">
            <button ><BsGearFill /></button>
          </div>   
        </div>
      </div>
    </div>
  );
}
