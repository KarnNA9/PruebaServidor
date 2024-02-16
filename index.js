const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("Hola Mundo !!1!1")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

// http://localhost:3001