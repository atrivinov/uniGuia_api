import mascotasModelo from '../models/mascotas.js'

class mascotasController {
  constructor() {}

  async createMascota(req, res) {
    const { body: { nombre, tipo, raza, edad, descripcion, adoptado } } =  req;
    try {
      const data = await mascotasModelo.create({ nombre, tipo, raza, edad, descripcion, adoptado });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getMascotaById(req, res) {
    try {
      const { params: { id } } = req;
      const data = await mascotasModelo.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllMascotas(req, res) {
    try {
      const data = await mascotasModelo.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateMascotaById(req, res) {
    const { body: { nombre, tipo, raza, edad, descripcion, adoptado }, params: { id } } =  req;
    try {
      const data = mascotasModelo.updateOne(id, { nombre, tipo, raza, edad, descripcion, adoptado });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteMascotaById(req, res) {
    try {
      const { params: { id } } = req;
      const data = mascotasModelo.deleteOne(id);
      res.status(206).json({
        status: "success",
        message: "Mascota eliminada correctamente",
        ...data,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new mascotasController();
