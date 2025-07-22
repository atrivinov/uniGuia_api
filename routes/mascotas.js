import express from 'express';
import mascotasController from '../controllers/mascotas.js';

const router = express.Router();

router.get('/', (req, res) => { // Get all mascotas
  mascotasController.getAllMascotas(req, res);
});

router.get('/:id', (req, res) => { // Get a mascota by id
  mascotasController.getMascotaById(req, res);
});

router.post('/', (req, res) => { // Create a new mascota
  mascotasController.createMascota(req, res);
});

router.put('/:id', (req, res) => { // Update a mascota by id
  mascotasController.updateMascotaById(req, res);
});

router.delete('/:id', (req, res) => { // Delete a mascota by id
  mascotasController.deleteMascotaById(req, res);
});

export default router;
