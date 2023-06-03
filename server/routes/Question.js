import express from 'express'

import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/Ask', auth, AskQuestion) //when this line is triggered, first control goes to the middleware auth,
router.get('/get', getAllQuestions)    //and then it checks if token is unique, if that is true, then next() is triggered
router.delete('/delete/:id', auth, deleteQuestion ); // the next() triggers AskQuestion
router.patch('/vote/:id', auth, voteQuestion);

export default router 