import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
      persons:[
        {id:'asdas', name: "MAx", age:28},
        {id:'assas',  name: "mannu", age:29},
        {id:'asawrs',  name: "jesus", age:23}
      ],
      showPersons: false
    }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //top code is the same as the bottom one 
    //bottom one is es6 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person ={
      ...this.state.persons[personIndex]
    } 
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {
    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          /> ;
  }
 
    return (
      <div className={classes.App}>
      <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
      
    );
  }

}

export default App;
