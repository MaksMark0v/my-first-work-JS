/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ imagesPerPage, totalImages, currentPage, paginate }) => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const totalPages = Math.ceil(totalImages / imagesPerPage);

    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className=''>
            <ul className='pagination justify-content-center'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(1)} role='button' className="page-link">First</a>
                </li>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage - 1)} role='button' className="page-link">Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} role='button' className="page-link">{number}</a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage + 1)} role='button' className="page-link">Next</a>
                </li>
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(totalPages)} role='button' className="page-link">Last</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
