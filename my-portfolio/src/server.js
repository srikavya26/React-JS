const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/generate-portfolio', (req, res) => {
    const { name, email, about, skills } = req.body;

    const portfolioContent = `
        <html>
        <head>
            <title>${name}'s Portfolio</title>
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
            </style>
        </head>
        <body>
            <div class="portfolio">
                <h2>${name}'s Portfolio</h2>
                <p>Email: ${email}</p>
                <p>About Me: ${about}</p>
                <h3>Skills:</h3>
                <ul>
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </div>
        </body>
        </html>
    `;

    res.send(portfolioContent);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
