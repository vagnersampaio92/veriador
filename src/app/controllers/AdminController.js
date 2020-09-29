import Admin from '../models/Admins'

class UserController{

    async store(req, res){
        const userExists = await Admin.findOne({
            where:{
                email:req.body.email
            }
        })
        if(!userExists){
            const {id, name, email, provider } = await Admin.create(req.body);
            return res.json({id, name, email, provider });
        }
        
        return res.status(400).json({error: "Já cadastrado"});
        
    }    

}

export default new UserController()