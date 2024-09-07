// ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGalleryAPI from '../../constants';
import './ImageGallery.css';
import ImageDetails from '../ImageDetails/ImageDetails';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [flipped, setFlipped] = useState({});

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

    return (
        <div className="container">
            <div className="row">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`col-md-4 mb-4 image-item ${flipped[image.id] ? 'flipped' : ''}`}
                        onClick={() => handleFlip(image.id)}
                    >
                        <div className="card">
                            <div className="card-front">
                                <img src={`https://picsum.photos/id/${image.id}/300/300`} className="card-img-top" alt={image.author} />
                            </div>
                            {flipped[image.id] && <ImageDetails image={image} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
