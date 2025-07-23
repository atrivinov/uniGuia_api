import usuariosModel from '../models/usuarios.js';

class usuariosController {
  constructor() {}

  async createUsuario(req, res) {
    const {
      body:
        {  
          nombre,
          apellidos,
          correo,
          clave,
          telefono,
          ciudad,
          departamento,
          pais,
          interes,
          isAdmin,
          favoritos
        } } =  req;
    try {
      const data = await usuariosModel.create({
        nombre,
        apellidos,
        correo,
        clave,
        telefono,
        ciudad,
        departamento,
        pais,
        isAdmin,
        interes,
        favoritos
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
      console.log(error)
    }
  }

  async getUsuarioById(req, res) {
    try {
      const { params: { id } } = req;
      const data = await usuariosModel.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllUsuarios(req, res) {
    try {
      const data = await usuariosModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateUsuarioById(req, res) {
    const { body: { nombre, año, semestres }, params: { id } } =  req;
    try {
      const data = usuariosModel.updateOne(id, {
        nombre,
        apellidos,
        correo,
        clave,
        telefono,
        ciudad,
        departamento,
        pais,
        isAdmin,
        interes,
        favoritos
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteUsuarioById(req, res) {
    try {
      const { params: { id } } = req;
      const data = usuariosModel.deleteOne(id);
      res.status(206).json({
        status: "success",
        message: "usuario eliminada correctamente",
        ...data,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new usuariosController();
