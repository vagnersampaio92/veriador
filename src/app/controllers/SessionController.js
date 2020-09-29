import jwt from 'jsonwebtoken'
import { username } from '../../config/database'

import Admin from '../models/Admins'

class SessionAdmin {
    async store(req, res){
        const{ email, password } = req.body

        const admin = await Admin.findOne({ where: {email} })

        if(!admin){
            return res.status(401).json({ error: 'User not found'})
        }
        if(!(await admin.checkPassword(password))){
            return res.status(401).json({ error: 'User not found'})
        } 
        const { id, name } = admin

        return res.json({
            user:{
                id,
                name,
                email,
            },
            token: jwt.sign({id},process.env.SECRET, {
                expiresIn: '7d'
            }),
        })


    }
}

export default new SessionAdmin;