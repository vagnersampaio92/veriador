import Sequelize from 'sequelize';
import databaseConfig from '../config/database'
import Admins from '../app/models/Admins'

const models =[Admins]

class Database{
    constructor(){
        this.init()
    }
    init(){
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection))
    }
}

export default new Database;

