// Окремий компонент React, який відображає поле вводу імені користувача

// Імпортування бібліотеки React
import React from 'react';

// Визначення функціонального компонента UserName
// eslint-disable-next-line react/prop-types
const UserName = ({ userName, onChange }) => {
    // Функція повертає JSX-елемент, який відображає поле вводу імені користувача 
    return (
        // Елемент <section> - контейнер для поля вводу
        <section>
                <input value={userName} onChange={onChange} />
        </section>
    );
};

// Експорт компонента UserName за замовчуванням
export default UserName;