import { Router } from 'express';
import studentRouter from './student.routes.js';


const routes = Router();
routes.use('/students', studentRouter);

export default routes;
