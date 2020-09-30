import Sequelize, { Model } from 'sequelize'



class Photos extends Model{

    static init(sequelize){
        super.init({
            photo: Sequelize.STRING,
            complaint_id :Sequelize.INTEGER
            
        },{
            sequelize
        })
       
        return this
    }

  

}

export default Photos;