import React from 'react';

const person = (props) => {
return (
    <div>
        <p>I'm {props.name}, I'm {props.age} years old.</p>
        <p onClick={props.click}>{props.children}</p>
    </div>
    )
};

export default person;