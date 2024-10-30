import { Router } from 'express';
import alunoRouter from './aluno.routes.js';


const routes = Router();
routes.use('/alunos', alunoRouter);

export default routes;
