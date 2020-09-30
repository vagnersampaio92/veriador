import Sequelize from 'sequelize';
import databaseConfig from '../config/database'
import Admins from '../app/models/Admins'
import User from '../app/models/User'
import Complaint from '../app/models/Complaint'

const models =[Admins, User, Complaint]

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

