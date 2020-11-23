import { Router } from 'express'
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController'
import authMiddleware from './middlewares/auth';
import YoutubeController from './controllers/YoutubeController';

const routes = new Router()

routes.post('/user', UserController.store)
routes.get('/user', authMiddleware, UserController.get)

routes.get('/mp4', YoutubeController.mp4)
routes.get('/mp3', YoutubeController.mp3)


routes.post('/session', SessionController.store)


export default routes;