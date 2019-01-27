import React from 'react';
import Person from './Person'

const PersonList = (props) => {

    let persons = [];
    persons = props.visible ? 
    (
        props.list.map((p,i) => {
            return <Person
                key={p.id}
                name={p.name} 
                job={p.job}
                click={props.click.bind(this, i)}
                change={props.change.bind(this, p.id)}
            />
        })
    ) : null;

    return (
        <div>
            {persons}
        </div>
    );
};

export default PersonList;