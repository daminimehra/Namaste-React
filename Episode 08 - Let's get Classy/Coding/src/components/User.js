import { useEffect, useState } from "react";

const User =  (props)=>{

    const [count] = useState(0);

useEffect(()=>{},[]);

    return(
        <div className="user-card">
        <h2>{count}</h2>
<h2>Name: {props.name}</h2>
<h3>Location: Punjab</h3>
<h4>Contact: @daminimehra_</h4>

        </div>
    )
}

export default User;