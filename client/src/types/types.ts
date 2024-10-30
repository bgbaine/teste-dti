export interface StudentData {
  id: number;
  nome: string;
  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;
  nota5: number;
  frequencia: number;
}

export interface ClassAverageBySubject {
  gradeAverage1: number;
  gradeAverage2: number;
  gradeAverage3: number;
  gradeAverage4: number;
  gradeAverage5: number;
}

export interface ClassData {
  students: StudentData[];
  classAverageBySubject: ClassAverageBySubject;
  aboveAverage: string[];
  lowFrequency: string[];
}

export interface StudentTableProps {
  classData: ClassData;
  editStudent: (id: number) => void;
  deleteStudent: (id: number) => void;
}
