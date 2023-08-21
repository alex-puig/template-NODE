const express = require('express');
const cors = require('cors');
const meseroRoutes = require('./routes/meseroRoutes');
const facturaRoutes = require('./routes/facturaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const port = 3000;

const app = express(); // Create an Express app instance
app.use(cors());
app.use(express.json());

// Mount route modules with specific base paths
app.use('/', meseroRoutes);
app.use('/', facturaRoutes);
app.use('/', clienteRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});