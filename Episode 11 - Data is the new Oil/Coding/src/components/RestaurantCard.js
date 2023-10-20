import { CON_URL } from "../utils/constants";


const RestaurantCard=  (props) =>{
    const {restaurantList} = props;
    const{
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  costForTwo,
  avgRating,} = restaurantList?.info; 

  return(
    <div className="p-4 m-4 w-[300px] bg-slate-200 rounded-lg hover:bg-gray-300" >
    <img className="rounded-lg" src={CON_URL + cloudinaryImageId}/>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{avgRating}</h4>
       <h4>{costForTwo}</h4>
       <h4>{lastMileTravelString}</h4>
       <h4>{cuisines.join(", ")}</h4>
       
    </div>
  )
}

 export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-green-400 text-white m-2 p-2 rounded-lg">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;