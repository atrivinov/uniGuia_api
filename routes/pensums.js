import express from 'express';
import pensumsController from '../controllers/pensums.js';

const router = express.Router();

router.get('/', (req, res) => {
  pensumsController.getAllPensums(req, res);
});

router.get('/:id', (req, res) => {
  pensumsController.getPensumById(req, res);
});

router.post('/', (req, res) => {
  pensumsController.createPensum(req, res);
});

router.put('/:id', (req, res) => {
  pensumsController.updatePensumById(req, res);
});

router.delete('/:id', (req, res) => {
  pensumsController.deletePensumById(req, res);
});

export default router;
