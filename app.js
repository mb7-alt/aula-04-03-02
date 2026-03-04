const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cadastro', (req, res) => {
    const {nome, email, interesse} = req.body;

    res.send(`
        <h1>Resumo do cadastro</h1>
        <p><strong>Nome:</strong>${nome}</p>
        <p><strong>E-mail:</strong>${email}</p>
        <p><strong>Interesse:</strong>${interesse}</p>
        <br>
        <a href="/">Voltar para nome</a>
    `);
});

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});