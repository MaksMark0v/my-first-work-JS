/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ imagesPerPage, totalImages, currentPage, paginate }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNumbers = []; // Масив для зберігання номерів сторінок
    const maxPageNumbersToShow = 5; // Максимальна кількість номерів сторінок для відображення
    const totalPages = Math.ceil(totalImages / imagesPerPage); // Загальна кількість сторінок

    // Визначаємо початкову сторінку для відображення
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    // Визначаємо кінцеву сторінку для відображення
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    // Заповнюємо масив номерами сторінок для відображення
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    // Оновлюємо query параметри при зміні поточної сторінки
    useEffect(() => {
        setSearchParams({ page: currentPage });
    }, [currentPage, setSearchParams]);

    return (
        <div className=''>
            <ul className='pagination justify-content-center'>
                {/* Кнопка для переходу на першу сторінку */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(1)} role='button' className="page-link">First</a>
                </li>
                {/* Кнопка для переходу на попередню сторінку */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage - 1)} role='button' className="page-link">Previous</a>
                </li>
                {/* Відображення номерів сторінок */}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} role='button' className="page-link">{number}</a>
                    </li>
                ))}
                {/* Кнопка для переходу на наступну сторінку */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage + 1)} role='button' className="page-link">Next</a>
                </li>
                {/* Кнопка для переходу на останню сторінку */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(totalPages)} role='button' className="page-link">Last</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
