// CommentForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, comment });
        setName('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    );
};

export default CommentForm;
