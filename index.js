const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server on port`, port);


app.get('/', (req, res) => {
    res.send('Hola Mundo de AF'); // Brinda mas informacion al cliente
})

app.get('/about', (req, res) => {
    res.send('Acerca de AF'); // Brinda mas informacion al cliente
})
app.get('/weather', (req, res) => {
    res.send('The current Weather is Nice by AF'); // Brinda mas informacion al cliente
})

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina, que tiste');
})


