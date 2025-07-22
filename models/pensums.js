import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class pensumsModel {
  constructor(){}

  async create(pensum) {
    const pensumsCollection = dbClient.db.collection('pensums');
    return await pensumsCollection.insertOne(pensum);
  }

  async getAll() {
    const pensumsCollection = dbClient.db.collection('pensums');
    return await pensumsCollection.find({}).toArray();
  }

  async getOne(id) {
    const pensumsCollection = dbClient.db.collection('pensums');
    return await pensumsCollection.findOne({ _id: new ObjectId(id) });
  }

  async updateOne(id, pensum) {
    const pensumsCollection = dbClient.db.collection('pensums');
    return await pensumsCollection.updateOne({ _id: new ObjectId(id) }, { $set: pensum });
  }
  
  async deleteOne(id) {
    const pensumsCollection = dbClient.db.collection('pensums');
    return await pensumsCollection.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new pensumsModel();
