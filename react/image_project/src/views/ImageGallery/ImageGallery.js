// ImageGallery.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


import ImageGalleryAPI from '../../constants';
import './ImageGallery.css';
import ImageDetails from '../ImageDetails/ImageDetails';
import Pagination from '../../Components/Pagination/Pagination';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 3;

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

    const handleFlip = (id) => {
        setFlipped(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    {currentImages.map(image => (
                        <div
                            key={image.id}
                            className={`col-md-4 mb-4 image-item ${flipped[image.id] ? 'flipped' : ''}`}
                            onClick={() => handleFlip(image.id)}
                        >
                            <div className="card ">
                                <div className="card-front ">
                                    <img src={`https://picsum.photos/id/${image.id}/400/400`} className="card-img-top" alt={image.author} />
                                </div>
                                {flipped[image.id] && <ImageDetails image={image} />}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Pagination
                imagesPerPage={imagesPerPage}
                totalImages={images.length}
                currentPage={currentPage}
                paginate={paginate}
            /></div>
    );
};

export default ImageGallery;
