import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGalleryAPI from '../../constants';
import CommentForm from '../../Components/CommentForm/CommentForm';



const ImageDetailsPage = () => {
    const { id } = useParams();
    // null видає помилку
    const [image, setImage] = useState(true); 
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
// console.log(234)
        fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const toggleCommentForm = () => {
        setShowCommentForm(!showCommentForm);
    };

    const onCommentSubmit = (comment) => {
        console.log('Comment submitted:', comment);
        console.log(234)
        // Додайте логіку для обробки коментаря
    };

    if (!image) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="row m-5 justify-content-center">
                <div className="col-md-5 ">
                    <div className="row g-0 mx-auto shadow-lg">
                        {/* не "image.id" */}
                        
                                <img src={`https://picsum.photos/id/${id}/800/800`} className="img-fluid rounded-start" alt={image.author} />
                            
                        <div className="card-body ">
                        <div className="card-body text-center">
                            <button onClick={toggleCommentForm} className="btn btn-secondary mt-2">
                                {showCommentForm ? 'Hide Comment Form' : 'Show Comment Form'}
                            </button>
                            </div>
                            {showCommentForm && <CommentForm onSubmit={onCommentSubmit} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDetailsPage;