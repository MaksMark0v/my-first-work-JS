/* eslint-disable no-unused-vars */
// Pagination.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ imagesPerPage, totalImages, currentPage, paginate }) => {
    // Оголошуємо функцію Pagination, яка приймає 4 параметри: 
    // imagesPerPage - кількість зображень на сторінку, 
    // totalImages - загальна кількість зображень, 
    // currentPage - поточна сторінка, 
    // paginate - функція для зміни сторінки

    const pageNumbers = []; // Оголошуємо масив для зберігання номерів сторінок
    const indexOfLastImage = currentPage * imagesPerPage; // Останнє зображення на поточній сторінці
    const indexOfFirstImage = indexOfLastImage - imagesPerPage; // Перше зображення на поточній сторінці

    const maxPageNumbersToShow = 5;

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        // Цикл для формування масиву номерів сторінок
        pageNumbers.push(i); // Додаємо номер сторінки до масиву
    }

    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(pageNumbers.length, startPage + maxPageNumbersToShow - 1);

    return ( 
        <div className=''>
            <ul className='pagination justify-content-center'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage - 1)} href="!#" className="page-link">
                    Previous
                    </a>
                </li>
                {pageNumbers.slice(startPage - 1, endPage).map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage + 1)} href="!#" className="page-link">
                    Next
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination; 