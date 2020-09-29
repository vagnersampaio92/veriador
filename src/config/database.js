require('dotenv').config()



module.exports = {
  dialect: 'postgres',
  host:process.env.HOST_DATABASE,
  username:process.env.USERNAME_DATABASE,
  password:process.env.PASSWORD_DATABASE,
  database:process.env.DATABASE_POSTGRES,
  port: 5432,

  define:{
    timestamps:true,
    underscored:true,
    underscoredAll:true,

  },
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
    }
}