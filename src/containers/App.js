import React, { Component } from 'react';
import UniqId from 'uniqid';

import styles from './App.module.css';

import PersonList from '../components/Person/PersonList';
import ToggleBtn from '../components/ToggleBtn/ToggleBtn';

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
   
    let appStyles = [];
    if (this.state.persons.length <= 1) {
      appStyles = [styles.red, styles.bold];
    } else if (this.state.persons.length <= 2){
      appStyles = [styles.red];
    }

    appStyles.push(styles.App);

    return (
        <div className={styles.App}>
          <h1>Move constantly</h1>
          <p className={appStyles.join(' ')}>Go up and forward...</p>
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
