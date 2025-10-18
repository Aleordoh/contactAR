import sequelize from './database.js'

try {
	await sequelize.authenticate()
	console.log('Conexion establecida')
} catch (error) {
	console.error(`Error al conectar a la base de datos ${errro}`)
}
