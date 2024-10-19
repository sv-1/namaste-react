
// Writing "Hello World" using React, by creating HTML element using React:
// creates a React element that represents an <h1> tag containing the text "Hello World using React".

const heading1 = React.createElement("h1",
     {
        id:"heading1"
}, "Hellow World using React");
//If you wanted to add 
// attributes or properties to the <h1>, you would include them in the object. For example:
//In above code, this React.createElement and "h1", these are JS objects and in below code heading is also
// an JS object, means we're passing JS object inside render function

// creates a root object associated with the DOM element with the ID root. This is the entry point for your React application.
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

// renders the heading React element into the DOM at the specified root. This effectively places your
// "Hello World" heading into the <div id="root"></div> in your HTML.
root1.render(heading1);


//****How to use nested html:*** */
/*
<div id="parent">
        <div id="child">
        <h1>I'm h1 tag.</h1>
        </div>
</div>

 */
const parent = React.createElement("div",
    {id: "parent"},
    React.createElement("div",
        {id:"child"},
        React.createElement("h1", {}, "I'm h1 tag.")
    )
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);


 
//NOTE: * Thing to notice is that when we're reder something using React
//      we're just rendering it inside the root element.
//      * And if there's any already HTML content, then it will be replaced by React 
// **** One more thing is to notice is that we can use React in only a small portion of our webapp
//      its because react only renders the root element