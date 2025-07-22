import express from 'express';
import universidadesController from '../controllers/universidades.js';

const router = express.Router();

router.get('/', (req, res) => {
  universidadesController.getAllUniversidades(req, res);
});

router.get('/:id', (req, res) => {
  universidadesController.getUniversidadById(req, res);
});

router.post('/', (req, res) => {
  universidadesController.createUniversidad(req, res);
});

router.put('/:id', (req, res) => {
  universidadesController.updateUniversidadById(req, res);
});

router.delete('/:id', (req, res) => {
  universidadesController.deleteUniversidadById(req, res);
});

export default router;
