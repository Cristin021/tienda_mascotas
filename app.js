const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/mascotas', require('./routes/mascotaRoutes'));
app.use('/api/ordenes', require('./routes/ordenRoutes'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});