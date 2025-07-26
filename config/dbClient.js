import 'dotenv/config';
import { MongoClient } from 'mongodb';

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}/uniguia?retryWrites=true&w=majority&appName=uniguia&tls=true`
    this.client = new MongoClient(queryString);
    this.conectarBD();
  }

  async conectarBD() {
    try {
      await this.client.connect();
      this.db = this.client.db('uniguia');
      console.log('Conectado a la base de datos...')
    } catch(error) {
      console.error('Error al conectar a la base de datos', error);
    }
  }
}

export default new dbClient();
