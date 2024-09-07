// ImageDetails.js
import React from 'react';

const ImageDetails = ({ image }) => {
    return (
        <div className="card-back">
            <div className="card-body">
                <p className="card-text">Author: {image.author}</p>
                <p className="card-text">Width: {image.width}</p>
                <p className="card-text">Height: {image.height}</p>
                <p className="card-text">Download: <a href={`https://picsum.photos/id/${image.id}/1080/1920`} target="_blank" rel="noopener noreferrer">Click here</a></p>
            </div>
        </div>
    );
};

export default ImageDetails;
