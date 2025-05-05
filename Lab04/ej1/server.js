const path = require('path');
const express = require('express');
const app = express();

// Configuración para servir archivos estáticos
app.use(express.static('pub'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});