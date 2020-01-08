import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: "Lucas", age: "30"},
      {name: "Fabica", age: "40"},
      {name: "Pirulito", age: "25"},
    ],
    otherState: "some other value",
    showPersons: false
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  };

  nameChangedHandler = (event) =>{
    this.togglePersonsHandler(event.target.value);
    
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return(
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {this.state.showPersons ?
            <div>
              <Person name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}></Person>
              <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}></Person>
              <Person name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}
                  click={this.togglePersonsHandler.bind(this, 'Fabiiiiica!!!')}
                  changed={this.nameChangedHandler}>My hobbies: Racing</Person>
            </div> : null
          }
        </div>
      )
  }
}

export default App;
