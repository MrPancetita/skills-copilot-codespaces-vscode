// Create web server application that will render comments from a JSON file.
// User will be able to add a comment and see all the comments.
// Comments will be stored in a JSON file on the server.
// Use Express.js and AJAX.

// Create web server application that will render comments from a JSON file.
// User will be able to add a comment and see all the comments.
// Comments will be stored in a JSON file on the server.
// Use Express.js and AJAX.

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/comments', (req, res) => {
    fs.readFile('./storage.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('./storage.json', (err, data) => {
        if (err) throw err;
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('./storage.json', JSON.stringify(comments), (err) => {
            if (err) throw err;
            res.json(req.body);
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});