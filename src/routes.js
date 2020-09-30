import { Router } from 'express';
import AdminController from './app/controllers/AdminController'

import SessionController from './app/controllers/SessionController'

import authadm from './app/middlewares/auth'

const routes = new Router();

routes.post('/cadastra', AdminController.store)
routes.post('/sessionsadmin', SessionController.store)

routes.put('/updateadmin', authadm, AdminController.update)



export default  routes;