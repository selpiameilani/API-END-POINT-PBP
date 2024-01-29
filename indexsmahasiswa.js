const { response } = require("express");

const mahasiswaNim = '1102024';
const updateData = {
    nama: 'Saepul',
    gender: 'L',
    prodi: 'TI',
    alamat: 'parungkuda'
};

fetch(`http://localhost:3000/dosen/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));