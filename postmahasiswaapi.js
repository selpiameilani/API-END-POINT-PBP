const { response } = require("express");

const postData = {
    nip: '1102024',
    nama: 'saepul',
    gender: 'L',
    prodi: 'TI',
    alamat: 'parungkuda'
};

fetch('http://localhost:3000/mahasiswa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));