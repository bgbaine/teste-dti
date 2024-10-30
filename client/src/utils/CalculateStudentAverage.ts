import { StudentData } from "../types/types";

const CalculateStudentAverage = (student: StudentData): number => {
  return Math.round(
    (student.nota1 + student.nota2 + student.nota3 + student.nota4 + student.nota5) / 5
  );
};

export default CalculateStudentAverage;
