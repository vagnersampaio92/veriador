import Complaint from '../models/Complaint'
import Photos from '../models/Photos'

// const A = sequelize.define('A', /* ... */);
// const B = sequelize.define('B', /* ... */);

// A.hasOne(B); // A HasOne B
// A.belongsTo(B); // A BelongsTo B
// A.hasMany(B); // A HasMany B
// A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

class ComplaintController{

    async store(req, res){
        
        const complaint = await Complaint.create(req.body)

        return res.json(complaint)
    }
    async ListAllComplaints(req, res){

        Complaint.hasMany(Photos)
        const complaint = await Complaint.findAll({
            include:[Photos]
        })

        return res.json(complaint)
    }

}

export default new ComplaintController