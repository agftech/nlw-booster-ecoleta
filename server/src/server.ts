import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    //response.send('Hello World');
    response.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Nóis de novo aqui'
        ]);
    
});

app.listen(3333);