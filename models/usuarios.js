import mongoose from 'mongoose';
import Usuario from '../schemas/usuarios.js'

class usuariosModel {
  constructor(){}

  async create(usuario) {
    return await Usuario.create(usuario);
  }

  async getAll() {
    return await Usuario.find();
  }

  async getOne(id) {
    return await Usuario.findById(id);
  }

  async updateOne(id, usuario) {
    return await Usuario.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, usuario, { new: true });
  }
  
  async deleteOne(id) {
    return await Usuario.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
  }
}

export default new usuariosModel();
