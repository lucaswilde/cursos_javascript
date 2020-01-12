import React, {Component} from 'react';
import './App.css';
import Apps from '../components/Apps/Apps';
import Cockpit from '../Cockpit/Cockpit';

class App extends Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    Apps: [
      {id: '1', name: "Lucas", age: "30"},
      {id: '2', name: "Fabica", age: "40"},
      {id: '3', name: "Pirulito", age: "25"},
    ],
    otherState: "some other value",
    showApps: false
  };

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  toggleAppsHandler = () => {
    const showApps = this.state.showApps;
    this.setState({
      showApps: !showApps
    });
  };

  nameChangedHandler = (event, id) =>{
    const AppIndex = this.state.Apps.findIndex(p => {
      return p.id === id;
    });

    const App = {
        ...this.state.Apps[AppIndex]
      };
    
    App.name = event.target.value; 

    const Apps = [...this.state.Apps];
    Apps[AppIndex] = App;
    this.setState({Apps: Apps});
  }

  deleteAppHandler = (AppIndex) =>{
    const Apps = [...this.state.Apps];
    Apps.splice(AppIndex, 1);
    this.setState({Apps: Apps});
  }

  render(){
    console.log('[App.js] render');
    let Apps = null;
    if(this.state.showApps){
      Apps = (
            <Apps 
              Apps={this.state.Apps}
              clicked={this.deleteAppHandler}
              changed={this.nameChangedHandler}/>
      );
    }

    return(
        <div className="App">
          <Cockpit
            title={this.props.appTitle}
            showApps={this.state.showApps}
            Apps={this.state.Apps}
            clicked={this.toggleAppsHandler}
          />
          {Apps}
        </div>
      )
  }
  
}

export default App;
