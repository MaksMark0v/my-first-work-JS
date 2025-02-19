import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import NASA_IMAGE_API from '../../constants'; // Константа з URL API NASA для пошуку зображень Марса

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_NASA_IMAGE_API;
const NASAImageDetails = () => {
    const { nasaId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState({});

    useEffect(() => {
        async function fetchNasaImages() {
            // Асинхронна функція для отримання зображень з API NASA
            const response = await fetch(`${API_KEY}?nasa_id=${nasaId}`);
            const data = await response.json(); // Перетворюємо відповідь на JSON
            setIsLoading(false);
            setImage(data.collection.items); // Оновлюємо стан images отриманими даними
        }
        fetchNasaImages(); // Виконуємо функцію fetchNasaImages
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="bg-light"> 
            <h2 className="text-center text-primary">NASA Image Details</h2> 
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-secondary" role="status"> 
                        <span className="visually-hidden">Завантаження...</span>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <img
                        className="w-100 img-fluid rounded"
                        src={
                            image.length > 0 &&
                            image[0].links &&
                            image[0].links.length !== 0 &&
                            image[0].links[0].href.replace('~thumb', '~large')
                        }
                    />
                    <h3 className="text-xl-end text-dark"> 
                        {image.length > 0 &&
                            image[0].data[0].title}
                    </h3>
                    <p className="text-start fs-3 fw-semibold lh-lg text-muted"> 
                        {image.length > 0 &&
                            image[0].data[0].description}
                    </p>
                </div>
            )}
        </div>
    )
};

export default NASAImageDetails;