import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";


const Body =()=>{
  const [search, setSearch] = useState("");
  const [listOfRestaurants,filteredResult , setFilteredResult]= useRestaurantList();
  
  //console.log("body Rendered")
    
const onlineStatus = useOnlineStatus();

if(onlineStatus ===false)
return(
  <h1>no internet</h1>
)

//it takes two arguments it calles when our components render then call the useeffect callback
// if (listOfRestaurants.length ===0){
//return (  <Shimmer/>)
//}
// whenever state variables update, react triggers a reconcillation cycle(re-render the components)

return listOfRestaurants.length === 0 ? (
  <Shimmer/>
  ) : (
      <div className="body">
      <div className="filter">
      <div className="search">
        <input
         type="text" 
         className="search-box"
         value={search}
        onChange={(e)=>{
          setSearch(e.target.value)
          }} /> 
         <button
          onClick={()=>{
            console.log(search);
          const filteredSearch = listOfRestaurants.filter((res)=>
          {
            return res.info.name.toLowerCase().includes(search.toLowerCase())}) ;        
            setFilteredResult(filteredSearch);
       
         }}
         >search
         </button>
      </div>
            <button className="filter-btn"
             onClick={()=>{
           const filteredList = listOfRestaurants.filter(
                (res)=> res.info.avgRating >4
                );
                setListOfRestaurants(filteredList)
                }} 
                >
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
       {filteredResult.map((info)=>{
        return(
         <Link
          key={info.info.id} to={"/restaurants/" + info.info.id}> <RestaurantCard restaurantList={info} /></Link>
        )
       })}
        </div>
      </div>
    )
  }

  export default Body;