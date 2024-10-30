import { Router } from "express";
import { validateStudent } from "../middlewares/validation.js";
import {
  studentCreate,
  studentDestroy,
  studentIndex,
  studentUpdate,
} from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter
  .get("/", studentIndex)
  .post("/", validateStudent, studentCreate)
  .delete("/:id", studentDestroy)
  .put("/:id", validateStudent, studentUpdate);

export default studentRouter;
