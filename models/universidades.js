import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class universidadesModel {
  constructor(){}

  async create(universidad) {
    const universidadesCollection = dbClient.db.collection('universidades');
    return await universidadesCollection.insertOne(universidad);
  }

  async getAll() {
    const universidadesCollection = dbClient.db.collection('universidades');
    return await universidadesCollection.find({}).toArray();
  }

  async getOne(id) {
    const universidadesCollection = dbClient.db.collection('universidades');
    return await universidadesCollection.findOne({ _id: new ObjectId(id) });
  }

  async updateOne(id, universidad) {
    const universidadesCollection = dbClient.db.collection('universidades');
    return await universidadesCollection.updateOne({ _id: new ObjectId(id) }, { $set: universidad });
  }
  
  async deleteOne(id) {
    const universidadesCollection = dbClient.db.collection('universidades');
    return await universidadesCollection.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new universidadesModel();
