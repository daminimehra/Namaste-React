import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";

const Body =()=>{
  const [listOfRestaurants, setListOfRestaurants] = useState ([]);
  const [search, setSearch] = useState("");
  const [filteredResult , setFilteredResult]= useState([]);
  
  console.log("body Rendered")
    
  useEffect(()=>{ fetchData()}, []);

  const fetchData = async()=>{
    const data =  await fetch(
     " https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResult(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

//it takes two arguments it calles when our components render then call the useeffect callback
// if (listOfRestaurants.length ===0){
//return (  <Shimmer/>)
//}
// whenever state variables update, react triggers a reconcillation cycle(re-render the components)

return listOfRestaurants.length ===0 ? (
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
                top rated restaurants
            </button>
        </div>
        <div className="res-container">
       {filteredResult.map((info)=>{
        return(
          <RestaurantCard key={info.info.id} restaurantList={info} />
        )
       })}
        </div>
      </div>
    )
  }

  export default Body;