import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"
import image from "./logo.png"
// dom elemnrnt = html elment 

// React Element

//jsx 
// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const header = React.createElement(
  "div", {className:"title"}, 
[  
React.createElement("h1", {}, "h1 tag"), 
React.createElement("h2", {}, "h2 tag"),  
React.createElement("h3", {}, "h3 tag")
]
);

//create the same element using jsx

const HeaderJsx = ( 
  <div className="title">
    <h1>h1 jsx</h1>
    <h2>h2 jsx</h2>
    <h3>h3 jsx</h3>
  </div>
);
  
const HeaderFunJsx = () => ( 
  <div className="title">
    <h1 style={{color:"blue"}}>h1 Funjsx</h1>
    <h2>h2 Funjsx</h2>
    <h3>h3 Funjsx</h3>
  </div>
);
  
const Header = () => (
<div>
<header className="header">
  <div className="left"><h1>logo</h1></div>
  <div className="centre"><input/><button>search</button></div>
  <div className="user"><img src={image}/></div>
</header>
  

</div>

)

const Title = () =>(<h1> Namaste React using jsx🔥</h1>);

const title = ( <h1>Namaste React Element🔥 </h1>);


const HeadingComponent = () =>(
  <div>
  {title}
  <Title/>
  <h1>Namaste React functional component🚀</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));


//root.render(header);
//root.render( HeaderJsx);
//root.render(<HeaderFunJsx/>)
root.render(<Header/>)