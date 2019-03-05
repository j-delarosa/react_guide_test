// Import the react and REactDom libraries
import React from 'react';
import REactDom from 'react-dom';
//Create a react component
const App = () => {
    return <div>Hi there!</div>
}

// Take the react component and show it on the screen

REactDom.render(
    <App />, document.querySelector('#root')
);