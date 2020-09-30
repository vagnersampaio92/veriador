import { Router } from 'express';
import AdminController from './app/controllers/AdminController'

import SessionController from './app/controllers/SessionController'
import SessionControllerUser from './app/controllers/SessionControllerUser'
import UserController from './app/controllers/UserController'
import ComplaintController from './app/controllers/ComplaintController'
import authadm from './app/middlewares/auth'

const routes = new Router();
//adm e assessor
routes.post('/cadastra', AdminController.store)
routes.post('/sessionsadmin', SessionController.store)
// routes.put('/updateadmin', authadm, AdminController.update)

//usuário

routes.post('/cadastrausuario', UserController.store)
routes.post('/sessionsuser', SessionControllerUser.store)

//Reclamações

routes.post('/cadastracomplaint', ComplaintController.store)



export default  routes;