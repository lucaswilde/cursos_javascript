import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return (nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed 
    //         || nextProps.clicked !== this.props.clicked);
    // }

    render() {
        console.log('[Persons.js] redering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id}
            />
        });
    }
};

export default Persons;