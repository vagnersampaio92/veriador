import jwt from 'jsonwebtoken'
require('dotenv').config()
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
        const { id, name, provider } = admin
      
        return res.json({
            user:{
                id,
                name,
                email,
                provider,
            },
           
            token: jwt.sign({id, provider},process.env.SECRET, {
                expiresIn: '7d'
            }),
        })


    }
}

export default new SessionAdmin;