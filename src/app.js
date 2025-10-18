// ************ Import's (ESM) ************
import express from 'express';
import createError from 'http-errors';
import methodOverride from 'method-override';
import logger from 'morgan';
import { join } from 'path';
import { __dirname } from './utils.js';

// ************ Instancia ************
const app = express();

// ************ Template Engine ************
app.set('view engine', 'ejs');
app.set('views', join(__dirname, './views'));

// ************ Middlewares ************
app.use(logger('dev'));
app.use(express.static(join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// ************ Imports Rutes ************
import mainRoutes from './routes/main.routes.js';
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

// ************ Rutas ************
app.use('/user',userRoutes)
app.use('/authenticate',authRoutes)
app.use('/', mainRoutes);

// ************ 404 ************
app.use((req, res, next) => next(createError(404)));

// ************ Manejador de errores ************
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.path = req.path;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error/error.ejs');
});

// ************ Exportación ************
export default app;