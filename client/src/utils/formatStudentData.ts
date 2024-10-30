import { StudentData } from "../types/types";

const FormatStudentData = (data: StudentData) => {
  return {
    nome: data.nome,
    nota1: Number(data.nota1),
    nota2: Number(data.nota2),
    nota3: Number(data.nota3),
    nota4: Number(data.nota4),
    nota5: Number(data.nota5),
    frequencia: Number(data.frequencia),
  };
};

export default FormatStudentData;
