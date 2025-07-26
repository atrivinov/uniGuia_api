import 'dotenv/config';
import express from 'express';
import routesUniversidades from './routes/universidades.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/uniguia/api/v1/universidades', routesUniversidades)

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => { console.log("Server is running on port 3000") });
} catch (error) {
  console.log(error);
}
