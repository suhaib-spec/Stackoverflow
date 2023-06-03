import express from 'express';

import { login, signup } from '../controllers/auth.js'
import { getAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middleware/auth.js'


const router = express.Router();

router.post('/signup', signup) //if url ends with signup, then it executes the following callback function, same w login
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router
