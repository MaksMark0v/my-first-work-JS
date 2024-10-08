// ImageDetails.js
import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ImageGalleryPage } from '../../constants';


const ImageDetails = ({ image, children }) => {
    return (

        <div className="card-back">
            <div className="card-body">
                <img src={`${ImageGalleryPage}/id/${image.id}/100/100`} className="img-fluid mb-3" alt={image.author} />
                <p className="card-text">Author: {image.author}</p>
                {/* <p className="card-text">Width: {image.width}</p> */}
                {/* <p className="card-text">Height: {image.height}</p> */}
                <p className="card-text">Download: <a href={`${ImageGalleryPage}/id/${image.id}/1080/1920`} target="_blank" rel="noopener noreferrer">Click here</a></p>
                {/* <p className="card-text">URL: <a href={image.url} target="_blank" rel="noopener noreferrer">{image.url}</a></p> */}

                {children}                


            </div>
            

        </div>

    );
};

ImageDetails.propTypes = {
    image: PropTypes.object.isRequired,
};

export default ImageDetails;
