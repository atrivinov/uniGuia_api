import mongoose from 'mongoose';
import Pensum from '../schemas/pensums.js'

class pensumsModel {
  constructor(){}

  async create(pensum) {
    return await Pensum.create(pensum);
  }

  async getAll() {
    return await Pensum.find();
  }

  async getOne(id) {
    return await Pensum.findById(id);
  }

  async updateOne(id, pensum) {
    return await Pensum.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, pensum, { new: true });
  }
  
  async deleteOne(id) {
    return await Pensum.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
  }
}

export default new pensumsModel();
