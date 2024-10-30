import { StudentData } from "../types/types";

const FormatStudentData = (data: StudentData) => {
  return {
    name: data.nome,
    grade1: Number(data.nota1),
    grade2: Number(data.nota2),
    grade3: Number(data.nota3),
    grade4: Number(data.nota4),
    grade5: Number(data.nota5),
    frequencia: Number(data.frequencia),
  };
};

export default FormatStudentData;
