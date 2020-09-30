import { Router } from 'express';
import AdminController from './app/controllers/AdminController'

import SessionController from './app/controllers/SessionController'
import SessionControllerUser from './app/controllers/SessionControllerUser'
import UserController from './app/controllers/UserController'
import ComplaintController from './app/controllers/ComplaintController'
import auth from './app/middlewares/auth'

const routes = new Router();
//adm e assessor
routes.post('/cadastra', auth, AdminController.store)
routes.post('/sessionsadmin', SessionController.store)
// routes.put('/updateadmin', auth, AdminController.update)

//usuário

routes.post('/cadastrausuario', UserController.store)
routes.post('/sessionsuser', SessionControllerUser.store)

//Reclamações

routes.post('/cadastracomplaint',  auth, ComplaintController.store)
routes.get('/listatodasreclamacoes',auth, ComplaintController.ListAllComplaints)
routes.put('/editareclamacoes/:id',auth, ComplaintController.edit)



export default  routes;