import React from "react";

class UserClass extends React.Component {
constructor(props){
super(props);
//console.log("cc");

this.state = {
  //  count:0,
  userInfo: {
    name:"xyz ",
    location:"zyx ",
   avatar_url:"ccś"
  },
};
}

async componentDidMount(){
   // console.log("ccdm")
   const data = await fetch("https://api.github.com/users/daminimehra");
   const json = await data.json();

   this.setState({
    userInfo:json,
   });

   console.log(json);

    this.timer = setInterval(() => {
		 	console.log('Namaste React OP')
		 }, 1000);
		 console.log('Grand Parent componentDidMount')
}
componentDidUpdate(){
    //console.log("update")
}
componentWillUnmount(){
        //console.log("unmount")
        clearInterval(this.timer)
		 console.log('UserClass componentWillUnmount')

}

render(){
    //console.log("cr")

    const {name, avatar_url, location} = this.state.userInfo;
    
    return(
        <div className="user-card">
         {/*   <h2>count: {this.state.count}</h2>
           <button onClick={()=>{
            this.setState({
                count : this.state.count + 1,
            })
           }}>counst+</button>*/}
            <img  
            src={avatar_url}
       />
             <h2>Name: { this.state.userInfo.name}</h2>
             <h3>Location: {location}</h3>
           
        </div>
    )
}

} 


export default UserClass;