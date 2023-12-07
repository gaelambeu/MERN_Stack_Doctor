import express from 'express';
import { 
    updateDoctor, 
    deleteDoctor, 
    getAllDoctor, 
    getSingleDoctor
} from "../Controllers/doctorControllers.js"

import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router()

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)

export default router;