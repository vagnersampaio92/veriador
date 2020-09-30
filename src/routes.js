import { Router } from 'express';
import AdminController from './app/controllers/AdminController'

import SessionController from './app/controllers/SessionController'
import SessionControllerUser from './app/controllers/SessionControllerUser'
import UserController from './app/controllers/UserController'

import authadm from './app/middlewares/auth'

const routes = new Router();
//adm e assessor
routes.post('/cadastra', AdminController.store)
routes.post('/sessionsadmin', SessionController.store)
routes.put('/updateadmin', authadm, AdminController.update)

//usuário

routes.post('/cadastrausuario', UserController.store)
routes.post('/sessionsuser', SessionControllerUser.store)



export default  routes;