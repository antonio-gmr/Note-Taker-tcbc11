// Dependencies
const express = require('express')
const path = require('path')
const api = require('./routes/apiRoutes.js')

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware functions
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', api)

// Sends notes.html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// listener
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);
