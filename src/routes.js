import { Router } from 'express';
import Admins from './app/models/Admins'

const routes = new Router();

routes.get('/',async (req, res)=>{
    const admin = await Admins.create({
       name:'jshdjsh',
       email:'jshjhfshjshjdhsdjsh',
       password_hash:'12121121'

    })
    return res.json(admin)
})

export default  routes;