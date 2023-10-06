const parent = React.createElement(
    "div" ,
     {id:"parent"}, 
React.createElement("div" ,{id:"child"},
[  React.createElement("h1", {}, "h1 tag"), 
React.createElement("h2", {}, "h2 tag")
])
  );

  console.log(parent); //ReactElement(object)=> HTML

const heading = React.createElement("h1", {id:"heading"}, "hello with react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);