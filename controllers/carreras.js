import carrerasModel from '../models/carreras.js';

class carrerasController {
  constructor() {}

  async createCarrera(req, res) {
    const { body:
      { nombre, idPensum, modalidad, nivel, duracion } } =  req;
    try {
      const data = await carrerasModel.create({ nombre, idPensum, modalidad, nivel, duracion });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getCarreraById(req, res) {
    try {
      const { params: { id } } = req;
      const data = await carrerasModel.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllCarreras(req, res) {
    try {
      const data = await carrerasModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateCarreraById(req, res) {
    const { body: { nombre, idPensum, modalidad, nivel, duracion }, params: { id } } =  req;
    try {
      const data = carrerasModel.updateOne(id, { nombre, idPensum, modalidad, nivel, duracion });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteCarreraById(req, res) {
    try {
      const { params: { id } } = req;
      const data = carrerasModel.deleteOne(id);
      res.status(206).json({
        status: "success",
        message: "carrera eliminada correctamente",
        ...data,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new carrerasController();
