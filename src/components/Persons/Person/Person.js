import React from 'react';
import clasess from  './Person.css';

const person = (props) => {
    return(
        <div className={clasess.Person}>
            <p>I'm {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} placeholder={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    );
};
export default person;