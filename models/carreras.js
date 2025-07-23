import mongoose from 'mongoose';
import Carrera from '../schemas/carreras.js'

class carrerasModel {
    constructor(){}

    async create(carrera) {
      return await Carrera.create(carrera);
    }

    async getAll() {
      return await Carrera.find();
    }

    async getOne(id) {
      return await Carrera.findById(id);
    }

    async updateOne(id, carrera) {
      return await Carrera.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, carrera, { new: true });
    }
    
    async deleteOne(id) {
      return await Carrera.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }
}

export default new carrerasModel();
