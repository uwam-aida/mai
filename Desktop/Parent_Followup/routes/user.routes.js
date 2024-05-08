import express from 'express'
import { Signup, login } from '../controllers/user.js'

const routes = express()
routes.post('/login',login)
routes.post('/signup',Signup)
export default routes