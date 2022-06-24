import express from 'express'
import routesCarritos from './routes/routesCarritos.js'
import routesProductos from './routes/routesProductos.js'

const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', routesProductos)
app.use('/carritos', routesCarritos)

//empiezo el server
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});

server.on('error', error => console.log(`Error en el servidor ${error}`))