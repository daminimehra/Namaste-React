import { useState } from "react";
import logo from "../../foodie.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{

const [btnName , setBtnName] = useState("login");
const onlineStatus =useOnlineStatus();

return(
      <div className="header">
        <div className="logo"><img src={logo}/>
        <h3>Namaste Foodie</h3></div>
        <div className="nav-items">
          <ul>
          <li> Online Status: {onlineStatus ?"🟢":"🔴"}</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>

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