const express = require('express');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('pub'));

// Ruta para la petición AJAX (GET)
app.get('/mensaje', (req, res) => {
    res.json({ mensaje: "¡Hola desde el servidor con AJAX!" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});