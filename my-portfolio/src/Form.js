import React, { useState } from 'react';
import './styles.css';
import './Form.css';

function Form({ userInfo, onInputChange, onFormSubmit }) {
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm(userInfo);
        if (Object.keys(validationErrors).length === 0) {
            onFormSubmit();
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Name is required';
        if (!values.email) errors.email = 'Email is required';
        if (!values.skills) errors.skills = 'Skills are required';
        if (!values.Connect) errors.Connect = 'Projects are required';
        return errors;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={onInputChange}
                placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={onInputChange}
                placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="about">About Me:</label>
            <textarea
                id="about"
                name="about"
                value={userInfo.about}
                onChange={onInputChange}
                placeholder="Write a brief introduction"
            />

            <label htmlFor="skills">Skills (comma separated):</label>
            <input
                type="text"
                id="skills"
                name="skills"
                value={userInfo.skills}
                onChange={onInputChange}
                placeholder="e.g., JavaScript, React, Python"
            />
            {errors.skills && <p className="error">{errors.skills}</p>}

            <label htmlFor="Connect">Project Name or Link (comma separated):</label>
            <input
                type="text"
                id="Connect"
                name="Connect"
                value={userInfo.Connect}
                onChange={onInputChange}
                placeholder="e.g., https://github.io/user"
            />
            {errors.Connect && <p className="error">{errors.Connect}</p>}

            <button type="submit">Generate Portfolio</button>
        </form>
    );
}

export default Form;
