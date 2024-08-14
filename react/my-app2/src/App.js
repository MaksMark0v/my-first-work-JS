// імпорт необхідних залежностей
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserName from './Components/UserName'
import LoginForm from './Components/LoginForm';
import './Components/LoginForm.css';
import ControlledComponent from './Components/ControlledComponent';
import './Components/ControlledComponent.css'


function App() { //Компонент App визначається як функція
  // Усередині компонента App ми визначаємо змінну 
  //стану userName за допомогою хука useState:
  const [userName, setUserName] = useState("No Name");
  // Ми визначаємо функцію обробки подій setUserNameFromInput
  // для оновлення стану userName при зміні поля вводу:
  const setUserNameFromInput = (event) => {
    console.log("event", event)
    setUserName(event.target.value);
    //Ми визначаємо функцію обробки подій setUserNameFromInput 
    // для оновлення стану userName при зміні поля вводу.
  }
  //Компонент App повертає JSX (JavaScript XML), 
  //який визначає структуру інтерфейсу програми:
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
        <LoginForm />
        <ControlledComponent />
      </header>
    </div>
  );
}

export default App;
