import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {
  constructor() {
    this.conectarBD();
  }

  async conectarBD() {
    try {
      const  queryString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}/?retryWrites=true&w=majority&appName=Cluster0&tls=true`
      await mongoose.connect(queryString)
      console.log('conectado a la base de datos')
    } catch(e) {
      console.error(e);
    } 
  }
}

export default new dbClient();
