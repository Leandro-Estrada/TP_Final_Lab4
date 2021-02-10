import express, { json } from 'express';
import morgan from 'morgan';

// importing routes
import directorRoutes from './routes/director.js';
import locutorRoutes from './routes/locutor.js';
import propagandaRoutes from './routes/propagandas.js'
import temamusicalRoutes from './routes/temasmusicales.js';
import programaRoutes from './routes/programas.js';
import periodoRoutes from './routes/periodos.js';


// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/programas', programaRoutes);
app.use('/api/periodos', periodoRoutes);
app.use('/api/directores', directorRoutes);
app.use('/api/locutores', locutorRoutes);
app.use('/api/propagandas', propagandaRoutes);
app.use('/api/temasmusicales', temamusicalRoutes);

export default app;