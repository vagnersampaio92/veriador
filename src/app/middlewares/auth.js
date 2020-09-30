import jwt from 'jsonwebtoken'
import {promisify} from 'util'


export default async( req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: 'Token not provided' })
    }
    const [,token] = authHeader.split(' ')

    try{
        const decoded =  await promisify(jwt.verify)(token, process.env.SECRET) // promisify transforma funções de call back para asyn await
  

       req.userId = decoded.id
       if(decoded.provider != undefined){
        req.userProvider = decoded.provider
       }
       
        return next();

    }catch(err){
        return res.status(401).json({ error: 'token invalid'})
    }

    
}