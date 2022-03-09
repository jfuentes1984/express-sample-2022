const { response } = require('express');
const express = require('express');

const app = express();

const port = 9000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/:a1/:a2', (req, res) => {
    res.send(req.params.a1 + " <em>-</em> " + req.params.a2);
});

app.listen(port, () => (
    console.log(`Listening on port: ${port}`)
));