import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

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
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] redering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
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