/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageGalleryAPI } from '../../constants';
import './ImageGallery.css';
import ImageDetails from '../ImageDetails/ImageDetails';
import Pagination from '../../Components/Pagination/Pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ImageGalleryPage } from '../../constants';

const ImageGallery = () => {
    // Використовуємо useState для зберігання зображень та стану перевертання карток
    const [images, setImages] = useState([]);
    const [flipped, setFlipped] = useState({});
    // Використовуємо useSearchParams для отримання та встановлення параметрів пошуку
    const [searchParams, setSearchParams] = useSearchParams();
    // Отримуємо поточну сторінку з параметрів пошуку або встановлюємо 1 за замовчуванням
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const imagesPerPage = 3;

    // Використовуємо useEffect для завантаження зображень при першому рендері компонента
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${ImageGalleryAPI}?page=2&limit=100`);
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    // Використовуємо useNavigate для навігації до сторінки деталей зображення
    const navigate = useNavigate();
    const navigateDetails = (id, event) => {
        event.preventDefault();
        event.stopPropagation();
        return navigate(`/image/${id}`);
    };

    // Функція для перевертання картки зображення
    const handleFlip = (id) => {
        setFlipped(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };

    // Функція для зміни сторінки
    const paginate = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    // Обчислюємо індекси першого та останнього зображення для поточної сторінки
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return (
        <div>
            <div className="container">
                <div className="row m-5 justify-content-center">
                    {currentImages.map(image => (
                        <div
                            key={image.id}
                            className={`col-md-4 mb-4 image-item ${flipped[image.id] ? 'flipped' : ''}`}
                            onClick={() => handleFlip(image.id)}
                        >
                            <div className="card">
                                <div className="card-front">
                                    <img src={`${ImageGalleryPage}/id/${image.id}/400/400`} className="card-img-top" alt={image.author} />
                                </div>
                                {flipped[image.id] && (
                                    <ImageDetails image={image}>
                                        <button onClick={(event) => navigateDetails(image.id, event)} className='btn btn-primary'>click</button>
                                    </ImageDetails>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                imagesPerPage={imagesPerPage}
                totalImages={images.length}
            />
        </div>
    );
};

export default ImageGallery;
