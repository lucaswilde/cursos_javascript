import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getDerivedStateFromProps');
        return {message: 'Mensagem de snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Person.js] componentDidUpdate', snapshot);
    }

    render(){
        console.log('[Person.js] redering...');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name}, I'm {this.props.age} years old.</p>
                <p onClick={this.props.click}>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
            )
    }
};

export default Person;