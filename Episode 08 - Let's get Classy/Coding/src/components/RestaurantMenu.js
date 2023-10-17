import {  useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
const [resMenu , setResMenu] = useState(null);

const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);
    
const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
}
if(resMenu === null ) return  <Shimmer/>;
const {name, cuisines,costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;
const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>menu</h3>
            <ul>
            {itemCards.map((item)=>(<li key={item.card.info.id}> {item.card.info.name}</li>))}
          {/*  <li>{itemCards[0]?.card?.info?.name} </li>*/}

            </ul>
        </div>
    )
}

export default RestaurantMenu;