// import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom'

// create react component
function getButtonText(){
    return 'click on me';
}



const App = () => {
    const buttonText = {text: 'click Me'};
    const labelText = 'Enter name: '
    return (
        <div>
            <label className="label" htmlFor="name"> {labelText} </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>

</div>
    )};

// take the react component and show on screen.

ReactDOM.render( <App /> ,
    document.querySelector('#root')
)