const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('pub'));

// Ruta para leer el poema.txt
app.get('/recitar', (req, res) => {
    const filePath = path.join(__dirname, 'priv', 'poema.txt');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al leer el archivo" });
        }
        // Reemplaza saltos de línea por <br> para HTML
        const textWithBreaks = data.replace(/\n/g, '<br>');
        res.json({ texto: textWithBreaks });
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});