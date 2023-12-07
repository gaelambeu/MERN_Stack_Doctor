import express from 'express'
import { getAllReviews, createReview } from '../Controllers/reviewControllers'
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router()

router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview)