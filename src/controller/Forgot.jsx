import React, { useState } from "react";
import "./styles/style.css";
import $ from "jquery";
import axios from "axios";
import { FaGooglePlusG, FaTimes } from "react-icons/fa";

const handleForgot=()=>{
    return (
        <div id="LoginPage">
        <div className="row container-fluid">
          <div className="form--register">
          <FaTimes
              className="icon__cancel"
              onClick={() => {
                $("#LoginPage").css("display", "none");
               
              }}
            />
           <h1 style={{color: "green"}}>GeeksForGeeks</h1>
            </div>
        </div>
        </div>
    );
}
export default handleForgot;