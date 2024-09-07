
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="">
      {images.map(image => (
        <div key={image.id} className="">
          <img src={`https://picsum.photos/id/${image.id}/300/300`} alt={image.author} />
          <p>{image.author}</p>
        </div>
      ))}
      
      
    </div>
  );
};

export default ImageGallery;
