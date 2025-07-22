import express from 'express';
import usuariosController from '../controllers/usuarios.js';

const router = express.Router();

router.get('/', (req, res) => {
  usuariosController.getAllUsuarios(req, res);
});

router.get('/:id', (req, res) => {
  usuariosController.getUsuarioById(req, res);
});

router.post('/', (req, res) => {
  usuariosController.createUsuario(req, res);
});

router.put('/:id', (req, res) => {
  usuariosController.updateUsuarioById(req, res);
});

router.delete('/:id', (req, res) => {
  usuariosController.deleteUsuarioById(req, res);
});

export default router;
