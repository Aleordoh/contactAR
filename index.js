import app from './src/app.js';
import { init } from 'browser-sync';

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

// ************ BrowserSync (solo en desarrollo) ************
console.log(ENVIRONMENT);

if (ENVIRONMENT === 'development') {
	init({
		proxy: `http://localhost:${PORT}`,
		files: ['src/**/*.*'], // Archivos para observar
		port: 3001,
		open: false,
		notify: false,
	});
}
