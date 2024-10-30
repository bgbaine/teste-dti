import { useForm, SubmitHandler } from "react-hook-form";
import { ClassData, StudentData } from "./types/types";
import Disciplines from "./components/Disciplines";
import formatStudentData from "./utils/FormatStudentData";
import CalculateClassAverage from "./utils/CalculateClassAverage";
import CalculateStudentAverage from "./utils/CalculateStudentAverage";
import { useEffect, useState } from "react";

function App() {
  const { register, handleSubmit, setFocus, reset } = useForm<StudentData>();
  const [classData, setClassData] = useState<ClassData>();

  useEffect(() => {
    setFocus("nome");
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const response = await fetch("http://localhost:3001/alunos");

      if (!response.ok) {
        throw new Error(
          `O servidor respondeu, mas com um erro. Resposta: ${response.statusText}`
        );
      }

      const classData: any = await response.json();
      setClassData(classData);
    } catch (error) {
      console.error(
        "Houve um problema enviando os dados para o servidor. Erro:",
        error
      );
    }
  };

  const submitStudentData: SubmitHandler<StudentData> = async (data) => {
    reset();
    setFocus("nome");

    const formattedData = formatStudentData(data);
    try {
      const response = await fetch("http://localhost:3001/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error(
          `O servidor respondeu, mas com um erro. Resposta: ${response.statusText}`
        );
      }

      fetchClassData();
    } catch (error) {
      console.error(
        "Houve um problema enviando os dados para o servidor. Erro:",
        error
      );
    }
  };

  const editStudent = (id: number) => {
    alert(`you pressed ${id}`);
  };

  const deleteStudent = (id: number) => {
    alert(`you pressed ${id}`);
  };

  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="text-4xl text-red-500">Olá, Carlos</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        {classData && (
          <div>
            <h2 className="text-center">Estudantes Cadastrados:</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Nota 1
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Nota 2
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Nota 3
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Nota 4
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Nota 5
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Frequência
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Média
                    </th>
                    <th className="px-4 py-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {classData.students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-100">
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.nome}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.nota1}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.nota2}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.nota3}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.nota4}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.nota5}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {student.frequencia}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {CalculateStudentAverage(student)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button
                          onClick={() => editStudent(student.id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="text-red-600 hover:text-red-900 ml-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-4 font-bold">
                      Média da turma por disciplina
                    </td>
                    <td className="px-4 py-4">
                      {classData.classAverageBySubject.gradeAverage1}
                    </td>
                    <td className="px-4 py-4">
                      {classData.classAverageBySubject.gradeAverage2}
                    </td>
                    <td className="px-4 py-4">
                      {classData.classAverageBySubject.gradeAverage3}
                    </td>
                    <td className="px-4 py-4">
                      {classData.classAverageBySubject.gradeAverage4}
                    </td>
                    <td className="px-4 py-4">
                      {classData.classAverageBySubject.gradeAverage5}
                    </td>
                    <td className="px-4 py-4" colSpan={2}></td>{" "}
                    <td className="px-4 py-4" colSpan={2}></td>{" "}
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-4 font-bold">
                      Média Geral da turma
                    </td>
                    <td className="px-4 py-4" colSpan={6}>
                      {CalculateClassAverage(classData.classAverageBySubject)}
                    </td>
                    <td className="px-4 py-4"></td>{" "}
                    <td className="px-4 py-4"></td>{" "}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(submitStudentData)}>
          <div>
            <label htmlFor="nome">Nome do aluno: </label>
            <input type="text" id="nome" required {...register("nome")} />
          </div>
          <Disciplines register={register} />
          <div>
            <label htmlFor="frequencia">Frequência do aluno: </label>
            <input
              type="number"
              id="frequencia"
              min="0"
              max="100"
              required
              {...register("frequencia")}
            />
          </div>
          <div>
            <button type="reset">Limpar</button>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
