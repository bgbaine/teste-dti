import { Router } from "express";
import { validateStudent } from "../middlewares/validation.js";
import {
  studentCreate,
  studentDestroy,
  studentIndex,
  // alunoUpdate,
} from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter
  .get('/', studentIndex)
  .post("/", validateStudent, studentCreate)
  .delete('/:id', studentDestroy);
// .put('/update/:id', alunoUpdate)

export default studentRouter;
