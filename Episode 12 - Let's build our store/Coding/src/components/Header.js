import { useContext, useState } from "react";
import logo from "../../foodie.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{

const [btnName , setBtnName] = useState("login");
const onlineStatus =useOnlineStatus();
const {loggedInUser} = useContext(UserContext);

const cartItems = useSelector((store)=>store.cart.items);
//console.log(cartItems)
return(
      <div className="flex sm:bg-yellow-100 justify-betweeen bg-pink-100  shadow-md mb-2" >
        <div className="flex ">
        <img className="w-24" src={logo}/>
        <h3 className="flex px-4 p-4 m-4 items-center">Namaste Foodie</h3></div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4"> Online Status: {onlineStatus ?"🟢":"🔴"}</li>
            <li className="px-4"><Link to={"/"}>Home</Link></li>
            <li className="px-4"><Link to={"/about"}>About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/cart">Cart - ({cartItems.length})</Link></li>

            <button className="login" onClick={
              ()=>{
                   btnName === "login" ? setBtnName("logout") : setBtnName("login");
              }
            }>{btnName}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Header;