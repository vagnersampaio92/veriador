import Sequelize, { Model } from 'sequelize'

class Admin extends Model{

    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN
        },{
            sequelize
        })
    }

}

export default Admin;