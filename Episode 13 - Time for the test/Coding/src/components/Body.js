import {  useState } from "react"
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";


const Body =()=>{

  
  const [search, setSearch] = useState("");
  const [listOfRestaurants, setListOfRestaurants, filteredResult, setFilteredResult]= useRestaurantList();
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  //console.log("body Rendered")
    
const onlineStatus = useOnlineStatus();

if(onlineStatus ===false){ 
return(
  <h1>no internet</h1>
)
}
//it takes two arguments it calles when our components render then call the useeffect callback
// if (listOfRestaurants.length ===0){
//return (  <Shimmer/>)
//}
// whenever state variables update, react triggers a reconcillation cycle(re-render the components)

return listOfRestaurants.length === 0 ? (
  <Shimmer/>
  ) : (
      <div className="body">
      <div className="text-center m-4 p-4  text-orange-800" >
        <h1 className="font-bold text-3xl">
        Restaurants with online food delivery in Jalandhar
        </h1>
        </div>
      <div className=" flex justify-center">
      <div className="search m-4 p-4 ">
        <input
         type="text" 
         
         placeholder="Search for Restaurant"
         className="border border-solid border-grey rounded-md   px-6 py-3  m-4"
         value={search}
        onChange={(e)=>{
          setSearch(e.target.value)
          }} /> 
         <button
        className=" rounded-lg px-6 py-3 bg-yellow-100  text-orange-800 font-medium m-4"
          onClick={()=>{
            console.log(search);
          const filteredSearch = listOfRestaurants.filter((res)=>
          {
            return res.info.name.toLowerCase().includes(search.toLowerCase())}) ;        
            setFilteredResult(filteredSearch);
            
         }}
         >Search🔍
         </button>
      </div>
      <div className="search m-4 p-4 ">
            <button className=" rounded-lg px-6 py-3 bg-yellow-100  text-orange-800 font-medium m-4"
             onClick={()=>{
           const filteredList = listOfRestaurants.filter(
                (res)=> res.info.avgRating >= 4);
                setFilteredResult(filteredList)
                 }
               } 
                >
                Top Rated Restaurants🌟
            </button>
            </div> 
            <div className=" m-4 p-4">
              <button
              onClick={()=>{
                const vegList = listOfRestaurants.filter(
                  (res)=> res.info.veg === true);
                  setFilteredResult(vegList)
              
              }}
               className=" rounded-lg px-6 py-3 bg-yellow-100  text-orange-800 font-medium m-4">Pure Veg💚</button>
            </div>
        </div>
        <div className="flex flex-wrap m-3 justify-center">
       {filteredResult.map((info)=>{
        return(
         <Link
          key={info.info.id} to={"/restaurants/" + info.info.id}>
          {  info.info.aggregatedDiscountInfoV3 ? (  
            <RestaurantCardPromoted restaurantList={info}/> 
            
            ) : ( 
              <RestaurantCard restaurantList={info} />
                )        } </Link>
        )
       })}
        </div>
      </div>
    )
  }

  export default Body;