const express = require('express');
const mascotas_routes = require('./routes/mascotas_routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/mascotas', mascotas_routes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
