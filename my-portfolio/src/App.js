import React, { useState } from 'react';
import Form from './Form';
import Portfolio from './Portfolio';
import './styles.css';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    about: '',
    skills: '',
    Connect: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleFormSubmit = () => {
    const newWindow = window.open();
    const portfolioContent = `
      <html>
      <head>
        <title>${userInfo.name}'s Portfolio</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
          .portfolio {
            background-color: #fff;
            color: #333;
            padding: 20px;
            margin: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 800px;
            text-align: left;
          }
          .portfolio h2 {
            border-bottom: 2px solid black;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          .portfolio p {
            margin: 10px 0;
          }
          .portfolio h3 {
            margin-top: 20px;
          }
          .portfolio ul {
            list-style-type: disc;
            padding-left: 20px;
          }
          .portfolio ul li {
            margin: 5px 0;
          }
          .portfolio a {
            color: #1e90ff;
            text-decoration: none;
          }
          .portfolio a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="portfolio">
          <h2>${userInfo.name}'s Portfolio</h2>
          <p><strong>Email:</strong> <a href="mailto:${userInfo.email}">${userInfo.email}</a></p>
          <p><strong>About Me:</strong> ${userInfo.about}</p>
          <h3>Skills:</h3>
          <ul>
            ${userInfo.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
          </ul>
          <h3>Projects:</h3>
          <ul>
            ${userInfo.Connect.split(',').map(link => `<li><a href="${link.trim()}" target="_blank" rel="noopener noreferrer">${link.trim()}</a></li>`).join('')}
          </ul>
        </div>
      </body>
      </html>
    `;
    newWindow.document.write(portfolioContent);
    newWindow.document.close();
  };

  return (
    <div className="App">
      <h1>Create Your Portfolio</h1>
      <div className="App-header">
        <Form userInfo={userInfo} onInputChange={handleInputChange} onFormSubmit={handleFormSubmit} />
        <Portfolio userInfo={userInfo} />
      </div>
    </div>
  );
}

export default App;
