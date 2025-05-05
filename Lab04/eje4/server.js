const express = require('express');
const bodyParser = require('body-parser');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.static('pub'));
app.use(bodyParser.json()); // Para parsear JSON en las peticiones POST

// Ruta POST para convertir Markdown
app.post('/convertir', (req, res) => {
    const markdownText = req.body.texto;
    if (!markdownText) {
        return res.status(400).json({ error: "No se proporcionó texto" });
    }
    
    const htmlText = md.render(markdownText);
    res.json({ html: htmlText });
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});