export interface StudentData {
  id: number;
  nome: string;
  nota1: number | string;
  nota2: number | string;
  nota3: number | string;
  nota4: number | string;
  nota5: number | string;
  frequencia: number | string;
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
  editStudent: (student: StudentData) => void;
  deleteStudent: (id: number) => void;
}
