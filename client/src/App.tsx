import { useForm, SubmitHandler } from "react-hook-form";
import { StudentData } from "./types/types";
import Disciplines from "./components/Disciplines";
import formatStudentData from "./utils/formatStudentData";
import { useEffect, useState } from "react";

function App() {
  const { register, handleSubmit, setFocus, reset } = useForm<StudentData>();
  const [students, setStudents] = useState<StudentData[]>([]); // State to hold fetched data

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/aluno");

      if (!response.ok) {
        throw new Error(
          `O servidor respondeu, mas com um erro. Resposta: ${response.statusText}`
        );
      }

      const studentList: StudentData[] = await response.json();
      setStudents(studentList);
    } catch (error) {
      console.error(
        "Houve um problema enviando os dados para o servidor. Erro:",
        error
      );
    }
  };

  useEffect(() => {
    setFocus("nome");
    getStudents();
  }, []);

  const submitStudentData: SubmitHandler<StudentData> = async (data) => {
    reset();
    setFocus("nome");

    const formattedData = formatStudentData(data);
    try {
      const response = await fetch("http://localhost:3001/aluno", {
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

      getStudents();
    } catch (error) {
      console.error(
        "Houve um problema enviando os dados para o servidor. Erro:",
        error
      );
    }
  };

  return (
    <>
      <header className="flex justify-center items-center">
        <h1 className="text-4xl text-red-500">Olá, Carlos</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        {students.length > 0 && (
          <div>
            <h2 className="text-center">Estudantes Cadastrados:</h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Nome</th>
                  <th className="border border-gray-300 p-2">Disciplina 1</th>
                  <th className="border border-gray-300 p-2">Disciplina 2</th>
                  <th className="border border-gray-300 p-2">Disciplina 3</th>
                  <th className="border border-gray-300 p-2">Disciplina 4</th>
                  <th className="border border-gray-300 p-2">Disciplina 5</th>
                  <th className="border border-gray-300 p-2">Frequência</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">
                      {student.nome}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {student.nota1}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {student.nota2}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {student.nota3}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {student.nota4}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {student.nota5}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {student.frequencia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
