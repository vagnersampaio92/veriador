import Complaint from '../models/Complaint'
import Photos from '../models/Photos'

import * as Yup from 'yup'
// const A = sequelize.define('A', /* ... */);
// const B = sequelize.define('B', /* ... */);

// A.hasOne(B); // A HasOne B
// A.belongsTo(B); // A BelongsTo B
// A.hasMany(B); // A HasMany B
// A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

class ComplaintController {

    async store(req, res) {
        let { complaint, photos } = req.body
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body.complaint))) {
            return res.status(400).json({ error: 'Validation fails' })
        }
        try {
            complaint.user_id = req.userId
            complaint.status = 'aguardando'
            const { id } = await Complaint.create(complaint)
            photos.map(async (photo) => {
                photo.complaint_id = id
                const newphoto = await Photos.create(photo)
            })

            return res.status(200).json(id)

        } catch (err) {
            return res.status(401).json({ error: 'erro' })
        }

    }
    async ListAllComplaints(req, res) {

        Complaint.hasMany(Photos)
        const complaint = await Complaint.findAll({
            include: [Photos]
        })

        return res.json(complaint)
    }
    async edit(req, res) {
        try {
            const complaint = await Complaint.findOne({
                where: {
                    id: req.params.id
                }
            })
            const updatecomplaint = await complaint.update((req.body.data))
            return res.json(updatecomplaint)
        } catch (error) {
            return res.status(401).json({ error: 'erro' })
        }


    }

}

export default new ComplaintController