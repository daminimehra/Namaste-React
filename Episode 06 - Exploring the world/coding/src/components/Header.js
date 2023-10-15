import { useState } from "react";
import logo from "../../images.png";
const Header = () =>{

const [btnName , setBtnName] = useState("login");
    return(
      <div className="header">
        <div className="logo"><img src={logo}/></div>
        <div className="nav-items">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>cart</li>

            <button className="login" onClick={
              ()=>{
btnName === "login" ? setBtnName("logout") : setBtnName("login");
              }
            }>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Header;