import db from '../database/models/index.js'
const { User } = db

const controller = {
	login: (req, res) => {
    return res.send('Estas en login')
/* 		return res.render('index', {
			title: 'Contac-ar',
			styles: ['head', 'index'],
			buttons: [
				{
					text: 'Login',
					iconText: 'login',
					icon: 'material-symbols-outlined',
					route: '/login',
				},
			],
		}) */
	},
}
export default controller
