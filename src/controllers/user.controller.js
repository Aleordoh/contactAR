import db from '../database/models/index.js'
import bcrypt from 'bcryptjs'
const { User } = db

const controller = {
	register: (req, res) => {
		return res.render('users/register', {
			title: 'Contac-ar',
			styles: ['head', 'register'],
			buttons: [
				{
					text: 'Home',
					iconText: 'home',
					icon: 'material-symbols-outlined',
					route: '/',
				},
			],
			alert: '',
		})
	},
	registerProcess: async (req, res) => {
		try {
			await db.User.create({
				...req.body,
				password: bcrypt.hashSync(req.body.password, 10),
			})
			return res.render('users/register', {
				title: 'Contac-ar',
				styles: ['head', 'register', 'sweetAlert'],
				buttons: [
					{
						text: 'Home',
						iconText: 'home',
						icon: 'material-symbols-outlined',
						route: '/',
					},
				],
				alert: {
					icon: 'success',
					title: 'Usuario Creado',
					text: 'El usuario ',
					redirect: '/',
				},
			})
			//return res.send('parece que se creo')
		} catch (error) {
			return res.render('users/register', {
				title: 'Contac-ar',
				styles: ['head', 'register', 'sweetAlert'],
				buttons: [
					{
						text: 'Home',
						iconText: 'home',
						icon: 'material-symbols-outlined',
						route: '/',
					},
				],
				alert: {
					icon: 'error',
					title: 'Error',
					text: error.errors[0].message,
					redirect: '/user/register',
				},
			})
		}
	},
}
export default controller
