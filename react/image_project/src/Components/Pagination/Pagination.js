/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ imagesPerPage, totalImages }) => {
    // Використовуємо useSearchParams для отримання та встановлення параметрів пошуку
    const [searchParams, setSearchParams] = useSearchParams();
    // Отримуємо поточну сторінку з параметрів пошуку або встановлюємо 1 за замовчуванням
    const currentPage = parseInt(searchParams.get('page')) || 1;
    // Обчислюємо загальну кількість сторінок
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    // Максимальна кількість номерів сторінок для відображення
    const maxPageNumbersToShow = 5;
    const pageNumbers = [];

    // Обчислюємо початкову та кінцеву сторінки для відображення
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    // Заповнюємо масив номерами сторінок для відображення
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    // Функція для зміни сторінки
    const onPageChange = (page) => {
        setSearchParams(prevParams => {
            prevParams.set('page', page);
            return prevParams;
        });
    };

    // Використовуємо useEffect для встановлення параметра сторінки при зміні currentPage
    useEffect(() => {
        setSearchParams({ page: currentPage });
    }, [currentPage, setSearchParams]);

    return (
        <div className=''>
            <ul className='pagination justify-content-center'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => onPageChange(1)} role='button' className="page-link">First</a>
                </li>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => onPageChange(currentPage - 1)} role='button' className="page-link">Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => onPageChange(number)} role='button' className="page-link">{number}</a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => onPageChange(currentPage + 1)} role='button' className="page-link">Next</a>
                </li>
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => onPageChange(totalPages)} role='button' className="page-link">Last</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
