// ************ Import's (ESM) ************
const express = require('express')
const createError = require('http-errors')
const methodOverride = require('method-override') //permite usar los metodos PUT y DELET
const logger = require('morgan')
const { join } = require('path')
const browserSync = require('browser-sync') //consta browser-syn que actualiza el navegador entiempo rea

// ************ Instancias ************
const app = express()
const PORT = process.env.PORT || 3000

// ************ Template Engine  ************
app.set('view engine', 'ejs')
app.set('views', join(__dirname, './views'))

// ************ Middlewares  ************
app.use(logger('dev')) //morgan
app.use(express.static(join(__dirname, '/public'))) //ruta de archivos estáticos
app.use(express.urlencoded({ extended: false })) //permite leer la informacion enviada por un formulario
app.use(express.json()) //permite a express leer informacion en formato JSON
app.use(methodOverride('_method')) //habilita los metodos PUT y DELETE

// ************ Route System require and use() ************
const mainRoutes = require('./routes/main.routes.js')
app.use('/', mainRoutes)

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)))

// ************ error handler ************
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.path = req.path
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error/error.ejs')
})

// ************ Console Logs ************

// ************ Server browser-sync UP ************
if (process.env.ENVIRONMENT === 'development') {
	browserSync.init({
		proxy: 'http://localhost:3000', // El servidor Express corre aquí
		files: ['src/**/*.*'], // Archivos para observar
		port: 3001, // BrowserSync proxy en este puerto
		open: false,
		notify: false,
	})
}

// ************ Server Up ************
app.listen(PORT, function (err) {
	if (err) console.log('Error en la configuración del servidor')
	console.log(
		`Servidor corriendo en http://localhost:${this.address().port} (${
			process.env.ENVIRONMENT
		})`
	)
})
