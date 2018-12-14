// import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom'

// create react component
function getButtonText(){
    return 'click on me';
}



const App = () => {
    const buttonText = 'Click Me';
    return (
        <div>
            <label className="label" for="name"> Enter name: </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>

</div>
    )};

// take the react component and show on screen.

ReactDOM.render( <
    App / > ,
    document.querySelector('#root')
)