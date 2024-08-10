import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserName from './Components/UserName'


function App() {
  const [userName, setUserName] = useState("No Name");
  const setUserNameFromInput = (event) => {
    console.log("event", event)
    setUserName(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <UserName userName={userName} onChange={setUserNameFromInput}/>        
        <img src={logo} className="App-logo" alt="logo" />
        <p>UserName;
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
