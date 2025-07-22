import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class carrerasModel {
    constructor(){}

    async create(carrera) {
      const carrerasCollection = dbClient.db.collection('carreras');
      return await carrerasCollection.insertOne(carrera);
    }

    async getAll() {
      const carrerasCollection = dbClient.db.collection('carreras');
      return await carrerasCollection.find({}).toArray();
    }

    async getOne(id) {
      const carrerasCollection = dbClient.db.collection('carreras');
      return await carrerasCollection.findOne({ _id: new ObjectId(id) });
    }

    async updateOne(id, carrera) {
      const carrerasCollection = dbClient.db.collection('carreras');
      return await carrerasCollection.updateOne({ _id: new ObjectId(id) }, { $set: carrera });
    }
    
    async deleteOne(id) {
      const carrerasCollection = dbClient.db.collection('carreras');
      return await carrerasCollection.deleteOne({ _id: new ObjectId(id) });
    }
}

export default new carrerasModel();
