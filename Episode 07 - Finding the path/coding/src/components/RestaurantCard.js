import { CON_URL } from "../utils/constants";

const styleCard= {
    backgroundColor: "#f0f0f0"
    };

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
    <div className="res-card" style={styleCard}>
    <img src={CON_URL +
          cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
       <h4>{costForTwo}</h4>
       <h4>{lastMileTravelString}</h4>
       <h4>{cuisines.join(", ")}</h4>
       
    </div>
  )
}

export default RestaurantCard;