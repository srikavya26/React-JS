
import React from 'react';
import './Generate.css';

function Generate({ userInfo }) {
    const { name, email, about, skills, Connect } = userInfo;
    const skillsList = skills.split(',').map(skill => skill.trim());
    const connectLinks = Connect.split(',').map(link => link.trim());

    return (
        <div className="portfolio">
            <h2>{name}'s Portfolio</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>About Me:</strong> {about}</p>
            <div>
                <h3>Skills</h3>
                <ul>
                    {skillsList.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Projects</h3>
                <ul>
                    {connectLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Generate;
