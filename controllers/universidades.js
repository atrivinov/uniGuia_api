import universidadesModel from '../models/universidades.js';

class universidadesController {
  constructor() {}

  async createUniversidad(req, res) {
    const { body:
      { name,
        logo,
        description,
        location,
        rating,
        programs,
        tuitionRange,
        website,
        modality } } =  req;
    try {
      const data = await universidadesModel.create({ name, logo, description, location, rating, programs, tuitionRange, website, modality });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getUniversidadById(req, res) {
    try {
      const { params: { id } } = req;
      const data = await universidadesModel.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllUniversidades(req, res) {
    try {
      const data = await universidadesModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateUniversidadById(req, res) {
    const { body:
      { name,
        logo,
        description,
        location,
        rating,
        programs,
        tuitionRange,
        website,
        modality },
      params: { id } } =  req;
    try {
      const data = universidadesModel.updateOne(id, { name, logo, description, location, rating, programs, tuitionRange, website, modality });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteUniversidadById(req, res) {
    try {
      const { params: { id } } = req;
      const data = universidadesModel.deleteOne(id);
      res.status(206).json({
        status: "success",
        message: "Universidad eliminada correctamente",
        ...data,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new universidadesController();
