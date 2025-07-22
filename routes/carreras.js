import express from 'express';
import carrerasController from '../controllers/carreras.js';

const router = express.Router();

router.get('/', (req, res) => {
  carrerasController.getAllCarreras(req, res);
});

router.get('/:id', (req, res) => {
  carrerasController.getCarreraById(req, res);
});

router.post('/', (req, res) => {
  carrerasController.createCarrera(req, res);
});

router.put('/:id', (req, res) => {
  carrerasController.updateCarreraById(req, res);
});

router.delete('/:id', (req, res) => {
  carrerasController.deleteCarreraById(req, res);
});

export default router;
