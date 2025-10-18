import app from './src/app.js';
import { init } from 'browser-sync';
import  db  from "./src/database/models/index.js";

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

// ************ Server UP ************
const server = app.listen(PORT, (err) => {
	if (err) {
		console.error('Error en la configuración del servidor:', err);
		return;
	}
	console.log(`Servidor corriendo en http://localhost:${PORT} (${ENVIRONMENT})`);
});




/* // ************ Sequelize  Sincroiniza modelos (solo en desarrollo) ************

(async () => {
	try {
		await db.sequelize.authenticate();
		console.log('✅ Conexión a la base de datos establecida.');
		// 🔹 Sincroniza los modelos (solo en desarrollo)
		if (ENVIRONMENT === 'development') {
			await db.sequelize.sync({ alter: true });
			console.log('🗂️ Modelos sincronizados con la base de datos.');
		}
	} catch (error) {
		console.error('❌ Error al cincronizar la abase de datos:', error);
	}
})(); */



// ************ BrowserSync (solo en desarrollo) ************

if (ENVIRONMENT === 'development') {
	init({
		proxy: `http://localhost:${PORT}`,
		files: ['src/**/*.*'], // Archivos para observar
		port: 3001,
		open: false,
		notify: false,
	});
}


