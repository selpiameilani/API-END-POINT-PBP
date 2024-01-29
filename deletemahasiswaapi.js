const { response } = require("express");

const mahasiswaNiMToDelete = '1102024';

fetch(`http://localhost:3000/dosen/${mahasiswaNiMToDelete}`, {
    method: 'DELETE'
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));
