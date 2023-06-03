import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'                                                                              //cors is used to eliminate errors when client and server end interact
import dotenv from 'dotenv'


import userRoutes from './routes/users.js'
import questionRoutes from './routes/Question.js'
import answerRoutes from './routes/Answers.js'

const app = express();                                                                          // line used to create our express server
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))                                           //we handle requests and responses with json
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {                                                                                    //2nd parameter of the get method is the callback fn (arrow fn), handles the req & rspns
    res.send("This is a Stack Overflow clone API")
})

app.use('/user', userRoutes) 
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000                                                                       //Used to get port from environment. otherwise, 5000 is used as port

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))

// "mongodb+srv://MAhmed:mahvishmahvish@cluster0.ttdxm9n.mongodb.net/?retryWrites=true&w=majority"