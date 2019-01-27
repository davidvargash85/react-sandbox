import React from 'react'
import './Person.css';

const Person = (props) => {

    return (
        <div className='Person'>
            <p onClick={props.click}>
                My name is {props.name}, I'm a {props.job}
            </p>
            <input type="text" onChange={props.change} />
        </div>
    );
}

export default Person;