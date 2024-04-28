import express from 'express';
import { getMenuItems, placeOrder, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.get('/menu', getMenuItems);
router.post('/orders', placeOrder);
router.put('/orders/:orderID/status', updateOrderStatus);

export default router;
