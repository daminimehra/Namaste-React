import User from "./User";
import React from "react";
import bg from "../../about.png"
import Shimmer from "./Shimmer";


const About =()=> {

 
    return (
        
        <div className="mb-2 pt-0" >
        <div className="h-screen top-0 bg-gradient-to-br" style={{backgroundImage:`url(${bg})`}}>
        <div >
       
        <h1  className="text-orange-600 text-center py-10 italic bg-slate-50 font-bold  text-5xl" >Find the best restaurants, cafés and bars in Jalandhar</h1>
           
        </div>
        <div className="py-20">
        <User/>
        </div>
       
        </div> 
          
            </div>
  
        
    )
    }



export default About;

