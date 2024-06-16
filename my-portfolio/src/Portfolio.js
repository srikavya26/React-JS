// Portfolio.js
import React from 'react';
import './styles.css';
import './Portfolio.css';
function Portfolio({ userInfo }) {
    return (
        <div className="portfolio">
            <h2>{userInfo.name}'s Portfolio</h2>
            <p>Email: {userInfo.email}</p>
            <p>About Me: {userInfo.about}</p>
            <h3>Skills:</h3>
            <ul>
                {userInfo.skills.split(',').map((skill) => (
                    <li key={skill}>{skill.trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;
