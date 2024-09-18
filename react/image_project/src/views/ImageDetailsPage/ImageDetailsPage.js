import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentForm from '../../Components/CommentForm/CommentForm';
import { ImageGalleryPage } from '../../constants';

const ImageDetailsPage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [showCommentForm, setShowCommentForm] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`${ImageGalleryPage}/id/${id}/info`);
                setData(response.data);
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
    };

    return (
        <div className="container">
            <div className="row m-5 justify-content-center">
                <div className="col-md-5">
                    <div className="row g-0 p-1 mx-auto shadow-lg">
                        {data.download_url && (
                            <img src={data.download_url} alt={data.author} className="img-fluid" />
                        )}
                        <div className="card-body text-center">
                            <h5 className="card-title">{data.author}</h5>
                            <p className="card-text">Width: {data.width}px</p>
                            <p className="card-text">Height: {data.height}px</p>
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
