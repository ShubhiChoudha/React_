// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
    </div>
</div> */}


        // const heading1 = React.createElement("h1", {id:"title"}, "Heading1");
        // const heading2 = React.createElement("h2", {id:"title"}, "Heading2");
        // const container = React.createElement("div",{id:"container"},[heading1,heading2]);
        // console.log(heading);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(container);

// const parent = React.createElement("div",
//     {id:"parent"},
//     React.createElement("div",
//         {id:"child"},
//         React.createElement("h1",{},"I'm an h1 tag")
// ));
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


{/* <div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div> */}


const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement(h1,{},"I'm an h1 tag"),
        React.createElement(h2,{},"I'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement(h1,{},"I'm an h1 tag"),
        React.createElement(h2,{},"I'm an h2 tag")
    ]),
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
