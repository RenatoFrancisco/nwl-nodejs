import express from 'express';

const app = express();

app.get('/', (request, respose) => {
    return respose.json({ message: 'Hello world - NLW04'});
});

app.post('/', (request, response) => {
    return response.json({message: 'Os dados foram recebidos com sucesso!'});
});

app.listen(3333, () => console.log("Server is running!"));