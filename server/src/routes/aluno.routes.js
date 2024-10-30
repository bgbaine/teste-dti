import { Router } from "express";
import { validateAluno } from "../middlewares/validation.js";
import {
  alunoCreate,
  // alunoDestroy,
  // alunoIndex,
  // alunoUpdate,
} from "../controllers/alunoController.js";

const alunoRouter = Router();

alunoRouter
  // .get('/', alunoIndex)
  .post("/", validateAluno, alunoCreate);
// .put('/update/:id', alunoUpdate)
// .delete('/:id', alunoDestroy)

export default alunoRouter;
