import mongoose from 'mongoose';

const universidadSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    carreras: {
      type: Array,
      required: true,
    },
    costo: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    modalidad: {
      type: String,
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
  }, { timestamps: true }
);

export default mongoose.model('universidades', universidadSchema);
