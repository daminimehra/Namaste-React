import { useState } from "react";
import logo from "../../images.png";
import { Link } from "react-router-dom";
const Header = () =>{

const [btnName , setBtnName] = useState("login");
    return(
      <div className="header">
        <div className="logo"><img src={logo}/></div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/about"}>about</Link></li>
            <li><Link to="/contact">contact</Link></li>
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