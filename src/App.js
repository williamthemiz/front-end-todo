import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Navegacion from './Navegacion';
import Body from './Body';
import {NotificationContainer} from 'react-notifications';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do List</h1>
        </header>
        <Navegacion></Navegacion>
      <Body/>
      <NotificationContainer/>
      </div>
    );
  }
}

export default App;
