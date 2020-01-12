import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

class App extends Component{
  state = {
    persons: [
      {id: '1', name: "Lucas", age: "30"},
      {id: '2', name: "Fabica", age: "40"},
      {id: '3', name: "Pirulito", age: "25"},
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

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
      };
    
    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){
    let persons = null;
    if(this.state.showPersons){
      persons = (
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>
      );
    }

    return(
        <div className="App">
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
      )
  }
}

export default App;
