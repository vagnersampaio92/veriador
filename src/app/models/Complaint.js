import Sequelize, { Model } from 'sequelize'



class Complaint extends Model{

    static init(sequelize){
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            status: Sequelize.STRING,
            user_id:Sequelize.INTEGER
            
        },{
            sequelize
        })
        
        return this
    }

  

}

export default Complaint;