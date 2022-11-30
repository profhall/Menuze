import React from "react";
import logo from "../assets/Logo.png";

export default function Logo() {
  return (
    <div
      style={{
        width: "90%", 
        margin: "auto" 
        
        
      }}
    >
      <img alt="TTPBK logo" style={{ width: "100%"}} src={logo} />
    </div>
  );
}
