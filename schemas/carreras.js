import mongoose from 'mongoose';

const carreraSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    idPensum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pensums',
      required: true,
    },
    modalidad: {
      type: String,
      required: true,
    },
    nivel: {
      type: String,
      required: false,
    },
    duracion: {
      type: Number,
      required: true,
    },
  }, { timestamps: true }
);

export default mongoose.model('carreras', carreraSchema);
