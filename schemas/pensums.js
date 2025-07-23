import mongoose from 'mongoose';

const materiasSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: Number, required: true },
  creditos: { type: Number, required: true }
});

const semestresSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  materias: { type: [materiasSchema], required: true },
  creditos: { type: Number, required: true }
});

const pensumSchema = new mongoose.Schema({
  year: { type: String, required: true },
  idCarrera: { type: mongoose.Schema.Types.ObjectId, ref: 'carreras', required: true },
  creditos: { type: Number, required: true },
  semestres: { type: [semestresSchema], required: true }
}, { timestamps: true });

export default mongoose.model('pensums', pensumSchema);
