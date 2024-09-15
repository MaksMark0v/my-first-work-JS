import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }
        console.log(`Name: ${name}, Comment: ${comment}, Email: ${email}, Gender: ${gender}`);
        onSubmit({ name, comment, email, gender });
        setName('');
        setComment('');
        setEmail('');
        setGender('');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded bg-light">
            <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    );
};

export default CommentForm;
