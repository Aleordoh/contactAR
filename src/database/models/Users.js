import { DataTypes}  from 'sequelize'

export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		'Users',
		{
			userId: {
				type: DataTypes.INTEGER.UNSIGNED,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			deleted_at: {
				type: DataTypes.DATE,
				allowNull: true,
			},
		},
		{
			tableName: 'users',
			timestamps: true, // crea/usa createdAt/updatedAt
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at',
			underscored: true, // usa snake_case en DB
			paranoid: true, // usa deleted_at para soft delete
		}
	)
	return User
}
