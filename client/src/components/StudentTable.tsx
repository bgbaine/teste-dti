import { StudentTableProps } from "../types/types";
import CalculateClassAverage from "../utils/CalculateClassAverage";
import CalculateStudentAverage from "../utils/CalculateStudentAverage";

const StudentTable: React.FC<StudentTableProps> = ({
  classData,
  editStudent,
  deleteStudent,
}) => {
  return (
    <div className="overflow-x-auto mt-4 rounded-lg shadow-lg border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
              Nota 1
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
              Nota 2
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
              Nota 3
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
              Nota 4
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
              Nota 5
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
              Frequência
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
              Média
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {classData.students.map((student) => {
            const studentAverage = CalculateStudentAverage(student);
            const classAverage = CalculateClassAverage(
              classData.classAverageBySubject
            );
            const rowClass =
              student.frequencia < 75
                ? "bg-red-300 hover:bg-red-200"
                : studentAverage > classAverage
                ? "bg-green-300 hover:bg-green-200"
                : "";

            return (
              <tr key={student.id} className={`hover:bg-gray-100 ${rowClass}`}>
                <td className="px-4 py-4 whitespace-nowrap font-bold">
                  {student.nome}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold hidden md:table-cell">
                  {student.nota1}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold hidden md:table-cell">
                  {student.nota2}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold hidden lg:table-cell">
                  {student.nota3}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold hidden lg:table-cell">
                  {student.nota4}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold hidden lg:table-cell">
                  {student.nota5}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold">
                  {student.frequencia}%
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-semibold">
                  {studentAverage}
                </td>
                <td className="px-4 py-4 whitespace-nowrap hidden md:table-cell">
                  <button
                    onClick={() => editStudent(student)}
                    className="text-blue-600 hover:text-blue-900 font-semibold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="text-red-600 hover:text-red-900 ml-2 font-semibold"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100">
            <td className="px-4 py-4 font-bold">
              Média da turma por disciplina
            </td>
            <td className="px-4 py-4 font-semibold hidden md:table-cell">
              {classData.classAverageBySubject.gradeAverage1}
            </td>
            <td className="px-4 py-4 font-semibold hidden md:table-cell">
              {classData.classAverageBySubject.gradeAverage2}
            </td>
            <td className="px-4 py-4 font-semibold hidden lg:table-cell">
              {classData.classAverageBySubject.gradeAverage3}
            </td>
            <td className="px-4 py-4 font-semibold hidden lg:table-cell">
              {classData.classAverageBySubject.gradeAverage4}
            </td>
            <td className="px-4 py-4 font-semibold hidden lg:table-cell">
              {classData.classAverageBySubject.gradeAverage5}
            </td>
            <td className="px-4 py-4 font-bold" colSpan={2}>
              Média Geral da turma
            </td>
            <td className="px-4 py-4 font-semibold" colSpan={6}>
              {CalculateClassAverage(classData.classAverageBySubject)}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 font-bold bg-green-300" colSpan={4}>
              *Alunos com nota acima da média da turma aparecem assim
            </td>
            <td
              className="px-4 py-4 font-bold bg-red-300 text-right"
              colSpan={5}
            >
              *Alunos com frequência abaixo de 75% aparecem assim
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StudentTable;
