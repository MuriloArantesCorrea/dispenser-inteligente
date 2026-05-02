const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let distancia = 0;
let status = "Aguardando";

// Simulação do Arduino
function gerarDistancia() {
  return Math.floor(Math.random() * 20);
}

setInterval(() => {
  distancia = gerarDistancia();

  if (distancia >= 5 && distancia <= 10) {
    status = "DISPENSANDO";
  } else {
    status = "Aguardando";
  }

  console.log(`Distancia: ${distancia} cm | ${status}`);
}, 1000);

// Rota da API
app.get('/dados', (req, res) => {
  res.json({ distancia, status });
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});