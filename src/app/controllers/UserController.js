import User from '../models/User'

import * as Yup from 'yup'

class UserController {

    async store(req, res){
        const schema = Yup.object().shape({
            name:Yup.string().required(),
            email:Yup.string().required(),
            password: Yup.string().required().min(4)
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Validation fails'})
        }
        
        const userExists = await User.findOne({
            where:{
                email:req.body.email
            }
        })
        
        if(!userExists){
            const {id, name, email } = await User.create(req.body);
            return res.json({id, name, email});
        }
        
        return res.status(400).json({error: "Já cadastrado"});
    }


}

export default new UserController;