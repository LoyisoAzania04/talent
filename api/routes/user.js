import express from 'express';
import { getAllUsers, addUser, getUserInfo } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:email', getUserInfo);

export default router;

