import { Router } from 'express';
import Admins from './app/models/Admins'

import AdminController from './app/controllers/AdminController'

import SessionController from './app/controllers/SessionController'

const routes = new Router();

routes.post('/cadastra', AdminController.store)
routes.post('/sessionsadmin', SessionController.store)

export default  routes;