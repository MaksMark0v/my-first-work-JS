import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGalleryAPI from '../../constants';
import CommentForm from '../../Components/CommentForm/CommentForm';


const ImageDetailsPage = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [showCommentForm, setShowCommentForm] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`${ImageGalleryAPI}/${id}`);
                setImage(response.data);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [id]);

    const toggleCommentForm = () => {
        setShowCommentForm(!showCommentForm);
    };

    const onCommentSubmit = (comment) => {
        console.log('Comment submitted:', comment);
        // Додайте логіку для обробки коментаря
    };

    if (!image) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <img src={`https://picsum.photos/id/${image.id}/800/800`} className="card-img-top" alt={image.author} />
                        <div className="card-body">
                            <h5 className="card-title">{image.author}</h5>

                            <button onClick={toggleCommentForm} className="btn btn-secondary mt-2">
                                {showCommentForm ? 'Hide Comment Form' : 'Show Comment Form'}
                            </button>
                            {showCommentForm && <CommentForm onSubmit={onCommentSubmit} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDetailsPage;