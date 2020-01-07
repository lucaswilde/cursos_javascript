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
    otherState: "some other value"
  };

  switchStateHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[1].name = "Fabiane";
    this.setState({
      persons: [
        {name: "Lucas", age: "30"},
        {name: newName, age: "40"},
        {name: "Pirulito", age: "25"},
      ]
    });
  };

  render(){
    return(
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={() => this.switchStateHandler('Fabine Turela')}>Switch Name</button>
          <Person name={this.state.persons[0].name} 
              age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} 
              age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchStateHandler.bind(this, 'Fabiiiiica!!!')}>My hobbies: Racing</Person>
        </div>
      )
  }
}

export default App;
