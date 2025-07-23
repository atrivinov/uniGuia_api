import pensumsModel from '../models/pensums.js';

class pensumsController {
  constructor() {}

  async createPensum(req, res) {
    const { year, idCarrera, creditos, semestres } = req.body;
    try {
      const data = await pensumsModel.create({ year, idCarrera, creditos, semestres });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPensumById(req, res) {
    try {
      const { params: { id } } = req;
      const data = await pensumsModel.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllPensums(req, res) {
    try {
      const data = await pensumsModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updatePensumById(req, res) {
    const { body: { year, idCarrera, creditos, semestres }, params: { id } } =  req;
    try {
      const data = pensumsModel.updateOne(id, { year, idCarrera, creditos, semestres });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deletePensumById(req, res) {
    try {
      const { params: { id } } = req;
      const data = pensumsModel.deleteOne(id);
      res.status(206).json({
        status: "success",
        message: "pensum eliminada correctamente",
        ...data,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new pensumsController();
