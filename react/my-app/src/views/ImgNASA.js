import React, { useState, useEffect } from 'react';

const NASA_IMAGE_API = 'https://images-api.nasa.gov/search?q=mars';

function NasaImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchNasaImages() {
      
        const response = await fetch(NASA_IMAGE_API);
        const data = await response.json();
        setImages(data.collection.items);
    }
    fetchNasaImages();
  }, [])

  return (
    <div>
      <h1>NASA Images</h1>
      <ul>
        {images.length === 0 && <p>Loading...</p>}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.links && image.links.length !== 0 && image.links[0].href}
            
          />
        ))}
      </ul>
    </div>
  );
  
}

export default NasaImages;