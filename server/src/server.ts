import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');

response.send([
    'Dinis',
    'Kelvin',
    'Nelly',
    'Julio'
]);
});

app.listen(8080); 