import mongoose from 'mongoose';
import Universidad from '../schemas/universidades.js'

class universidadesModel {
  constructor(){}

  async create(universidad) {
    return await Universidad.create(universidad);
  }

  async getAll() {
    return await Universidad.find();
  }

  async getOne(id) {
    return await Universidad.findById(id);
  }

  async updateOne(id, universidad) {
    return await Universidad.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, universidad, { new: true });
  }
  
  async deleteOne(id) {
    return await Universidad.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
  }
}

export default new universidadesModel();
