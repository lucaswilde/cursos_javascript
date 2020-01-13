import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        return () => {
            console.log('[Cockpit.js] cleanUp works in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2th useEffect');
        return () => {
            console.log('[Cockpit.js] 2th cleanUp works in useEffect');
        }
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
        assignedClasses.push('red');
    }
    if(props.persons.length <= 1){
        assignedClasses.push('bold');
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join('')}>{props.title}</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default Cockpit;