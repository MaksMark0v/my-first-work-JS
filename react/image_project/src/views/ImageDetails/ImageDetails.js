// ImageDetails.js
import React from 'react';
import PropTypes from 'prop-types';

const ImageDetails = ({ image }) => {
    return (
        <div className="card-back">
            <div className="card-body">
                <p className="card-text">Author: {image.author}</p>
                <p className="card-text">Width: {image.width}</p>
                <p className="card-text">Height: {image.height}</p>
                <p className="card-text">Download: <a href={`https://picsum.photos/id/${image.id}/1080/1920`} target="_blank" rel="noopener noreferrer">Click here</a></p>
                <p className="card-text">URL: <a href={image.url} target="_blank" rel="noopener noreferrer">{image.url}</a></p>
            </div>
        </div>
    );
};

ImageDetails.propTypes = {
    image: PropTypes.object.isRequired,
};

export default ImageDetails;
