import {Sequelize} from 'sequelize'

const sequelize=new Sequelize('shopBase','root','',{
    dialect:'mysql',
    dialectOptions:{

    }
})

try{
    await sequelize.authenticate()
}catch(e){
    console.log(e)
}

export default sequelize