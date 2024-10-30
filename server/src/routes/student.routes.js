import { Router } from "express";
import { validateStudent } from "../middlewares/validation.js";
import {
  studentCreate,
  // studentDestroy,
  studentIndex,
  // alunoUpdate,
} from "../controllers/alunoController.js";

const studentRouter = Router();

studentRouter
  .get('/', studentIndex)
  .post("/", validateStudent, studentCreate)
  // .delete('/:id', studentDestroy);
// .put('/update/:id', alunoUpdate)

export default studentRouter;
