import express from 'express'
import { getAllReviews, createReview } from '../Controllers/reviewControllers.js'
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router()

// doctor/doctorId

router
    .route('/')
    .get(getAllReviews)
    .post(authenticate, restrict(['patient']), createReview)


export default router;