import Admin from '../models/Admins'

import * as Yup from 'yup'

class AdminController{

    async store(req, res){
        const schema = Yup.object().shape({
            name:Yup.string().required(),
            email:Yup.string().required(),
            password: Yup.string().required().min(4)
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Validation fails admin'})
        }

        if(req.userProvider){

            try{
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

            }catch(error){
                return res.status(401).json({ error: 'erro' })
            }

            
        }

        return res.status(400).json({error: "permission denied"});
      
        
    }    


    async update(req, res){
        console.log(req.userId)
        console.log(req.userProvider)
        return res.json({ok:true})
    }
}

export default new AdminController()