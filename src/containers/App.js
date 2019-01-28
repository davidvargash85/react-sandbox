import React, { Component } from 'react';
import UniqId from 'uniqid';

// import styles from './App.module.css';
import './App.css';

import PersonList from '../components/Person/PersonList';
import ToggleBtn from '../components/ToggleBtn/ToggleBtn';
import Greetings from '../components/Greetings/Greetings';

class App extends Component { 

  state = {
    persons: [
      { id: UniqId(), name: 'Isabel Herryman', job: 'Flying attendant' },
      { id: UniqId(), name: 'David Vargas', job: 'Software engineer' },
      { id: UniqId(), name: 'Sofia Vargas', job: 'Doctor' },
    ],
    showPersons: false,
  };

  nameChangedHandler = (personId, event) => {
    const pIndex = this.state.persons.findIndex(p => p.id === personId);
    const pCopy = {...this.state.persons[pIndex]};
    pCopy.name = event.target.value;

    const personsCopy = [...this.state.persons];
    personsCopy[pIndex] = pCopy;

    this.setState({persons: personsCopy});
  };

  deletePerson = (index) => {
    const copy = [...this.state.persons];
    copy.splice(index, 1);
    this.setState({
      persons: copy
    });
  };

  toggleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {

    return (
        <div className='App'>
          <Greetings count={this.state.persons.length} />
          <ToggleBtn toggle={this.toggleShowPersons} value={this.state.showPersons} />
          <PersonList
           click={this.deletePerson}
           change={this.nameChangedHandler}
           list={this.state.persons}
           visible={this.state.showPersons}/>
        </div>
    );
  };
}

export default App;
