import  sequelize  from '../config/database.js'
import UserModel from './Users.js'
import { DataTypes } from 'sequelize'

const User = UserModel(sequelize, DataTypes)

const db = {
	sequelize,
	User,
}

// Exportás todo
export default db
