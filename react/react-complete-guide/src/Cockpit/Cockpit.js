import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();

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

    if(props.personsLength <= 2){
        assignedClasses.push('red');
    }
    if(props.personsLength <= 1){
        assignedClasses.push('bold');
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join('')}>{props.title}</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>
    )
};

export default React.memo(Cockpit);