import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class usuariosModel {
  constructor(){}

  async create(usuario) {
    const usuariosCollection = dbClient.db.collection('usuarios');
    return await usuariosCollection.insertOne(usuario);
  }

  async getAll() {
    const usuariosCollection = dbClient.db.collection('usuarios');
    return await usuariosCollection.find({}).toArray();
  }

  async getOne(id) {
    const usuariosCollection = dbClient.db.collection('usuarios');
    return await usuariosCollection.findOne({ _id: new ObjectId(id) });
  }

  async updateOne(id, usuario) {
    const usuariosCollection = dbClient.db.collection('usuarios');
    return await usuariosCollection.updateOne({ _id: new ObjectId(id) }, { $set: usuario });
  }
  
  async deleteOne(id) {
    const usuariosCollection = dbClient.db.collection('usuarios');
    return await usuariosCollection.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new usuariosModel();
