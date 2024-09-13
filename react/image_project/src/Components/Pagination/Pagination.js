/* eslint-disable no-unused-vars */
// Pagination.js
import React from 'react'; // Імпортуємо бібліотеку React

const Pagination = ({ imagesPerPage, totalImages, currentPage, paginate }) => { 
    // Оголошуємо функцію Pagination, яка приймає 4 параметри: 
    // imagesPerPage - кількість зображень на сторінку, 
    // totalImages - загальна кількість зображень, 
    // currentPage - поточна сторінка, 
    // paginate - функція для зміни сторінки

    const pageNumbers = []; // Оголошуємо масив для зберігання номерів сторінок
    const indexOfLastImage = currentPage * imagesPerPage; // Останнє зображення на поточній сторінці
    const indexOfFirstImage = indexOfLastImage - imagesPerPage; // Перше зображення на поточній сторінці

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) { 
        // Цикл для формування масиву номерів сторінок
        pageNumbers.push(i); // Додаємо номер сторінки до масиву
    }

    return ( // Оголошуємо JSX-компонент
        <div>
            <ul className="pagination"> 
                {/* Оголошуємо список з класом "pagination" */}
                {pageNumbers.map(number => ( 
                    // Мапінг масиву номерів сторінок для формування елементів списку
                    <li key={number} className="page-item"> 
                        {/* Оголошуємо елемент списку з класом "page-item" */}
                        <a onClick={() => paginate(number)} href="!#" className="page-link"> 
                             {/* Оголошуємо посилання з класом "page-link" */}
                            {number} 
                            {/* Виводимо номер сторінки */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination; // Експортуємо функцію Pagination за замовчуванням