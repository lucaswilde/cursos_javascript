import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

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

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] redering...');
        return (
            <Aux>
                {this.props.auth ? <p>Authenticated</p> : <p>Please login</p>}
                <p onClick={this.props.click}>I'm {this.props.name}, I'm {this.props.age} years old.</p>
                <p onClick={this.props.click}>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    />
            </Aux>
            )
    }
};

export default WithClass(Person, 'Person');