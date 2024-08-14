// Керовані компоненти в React
//https://www.freecodecamp.org/news/how-to-build-forms-in-react/

import { useState } from "react";

const ControlledComponent = function ControlledComponent() {
  const [inputValue, setInputValue] = useState(""); //Хук useState визначає змінну стану
  //(inputValue) і функцію оновлення стану (setInputValue).

    const handleChange = (event) => {
        console.log("event", event);
    setInputValue(event.target.value);
    };

    

  //Проп value встановлює початкове значення вхідного елемента на значення inputValue.

    return (
    <form className="form">
    <label className="label">
        Вхідне значення:
        <input type="text" value={inputValue} onChange={handleChange} className="input" />
        {/* onChangeподія обробляє зміни, внесені до вхідного значення. Функція handleChangeоновлює 
        inputValueстан новим значенням елемента введення, і оновлене значення негайно відображається 
        в стані та відображається на екрані. */}
    </label>
    <p className="output">Вхідне значення: {inputValue}</p>
    </form>
    );
};

export default ControlledComponent;
