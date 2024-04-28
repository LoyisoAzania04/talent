import express from 'express';
import { getFavorites, addFavorite, updateFavorite } from '../controllers/favoritesController.js';

const router = express.Router();

router.get('/', getFavorites);
router.post('/', addFavorite);
router.put('/:favoriteID', updateFavorite);

export default router;

