import Sequelize, { Model } from 'sequelize'



class Complaint extends Model{

    static init(sequelize){
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            status: Sequelize.STRING,
            id_user:Sequelize.INTEGER
            
        },{
            sequelize
        })
        .associate = models => {
            belongsTo(models.users, { foreignKey: 'id_user' })
    
        }
        return this
    }

  

}

export default Complaint;