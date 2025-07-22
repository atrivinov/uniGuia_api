import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import routesUniversidades from './routes/universidades.js';
import routesCarreras from './routes/carreras.js';
import routesPensums from './routes/pensums.js';
import routesUsuarios from './routes/usuarios.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/mascotas', routesMascotas);
app.use('/uniguia/api/v1/universidades', routesUniversidades)
app.use('/uniguia/api/v1/carreras', routesCarreras)
app.use('/uniguia/api/v1/pensums', routesPensums)
app.use('/uniguia/api/v1/usuarios', routesUsuarios)
// login
// register


try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => { console.log("Server is running on port 3000") });
} catch (error) {
  console.log(error);
}
