import mongoose from 'mongoose';

const usuariosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    apellidos: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    clave: {
      type: String,
      required: false,
    },
    telefono: {
      type: Number,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    interes: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    favoritos: {
      type: Array,
      required: true,
    },
  }, { timestamps: true }
);

export default mongoose.model('usuarios', usuariosSchema);
