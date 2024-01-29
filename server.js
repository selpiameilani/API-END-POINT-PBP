const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');


const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint untuk mahasiswa
app.use('/mahasiswa', mahasiswaController);

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});