import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.js'
import User from './User.js'

const Product=sequelize.define('Product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})


User.hasMany(Product)
Product.belongsTo(User)

export default Product
