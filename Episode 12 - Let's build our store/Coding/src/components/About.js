import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
        //console.log("pc")
    }

    componentDidMount(){
        //console.log("pcdm")
    }

    render(){ 
       // console.log("pr")
    return(
        <>
            <h1>About</h1>
            <h2>namaste foodie</h2>
            <UserClass name=" first" location="dsd"/>
     {/*  <User name={"damini mehra"}/>*/}
      
       {/*<UserClass name={"justedit4u"}/>*/}
        </>
    )
    }
}


export default About;