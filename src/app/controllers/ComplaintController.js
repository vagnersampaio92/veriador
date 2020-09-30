import Complaint from '../models/Complaint'



class ComplaintController{

    async store(req, res){
        console.log(req.body)
        const complaint = await Complaint.create(req.body)

        return res.json(complaint)
    }
   

}

export default new ComplaintController