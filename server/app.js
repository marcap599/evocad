// File: app.js
// Contenuto iniziale per app.js

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('EvoCAD backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
