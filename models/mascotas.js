import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class mascotasModelo {
  constructor() {}

  async create(mascota) {
    const mascotasCollection = dbClient.db.collection('mascotas');
    return await mascotasCollection.insertOne(mascota);
  }

  async getAll() {
    const mascotasCollection = dbClient.db.collection('mascotas');
    return await mascotasCollection.find({}).toArray();
  }

  async getOne(id) {
    const mascotasCollection = dbClient.db.collection('mascotas');
    return await mascotasCollection.findOne({ _id: new ObjectId(id) });
  }

  async updateOne(id, mascota) {
    const mascotasCollection = dbClient.db.collection('mascotas');
    return await mascotasCollection.updateOne({ _id: new ObjectId(id) }, { $set: mascota });
  }

  async deleteOne(id) {
    const mascotasCollection = dbClient.db.collection('mascotas');
    return await mascotasCollection.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new mascotasModelo();