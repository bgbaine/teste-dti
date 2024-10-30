import { useForm, SubmitHandler } from "react-hook-form";
import { ClassData, StudentData } from "./types/types";
import Disciplines from "./components/Disciplines";
import formatStudentData from "./utils/FormatStudentData";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import StudentTable from "./components/StudentTable"; // Adjust the import path as needed

function App() {
  const [nome, setNome] = useState("Carlos");
  const { register, handleSubmit, setFocus, reset } = useForm<StudentData>();
  const [open, setOpen] = useState(false);
  const [classData, setClassData] = useState<ClassData>();

  useEffect(() => {
    setFocus("nome");
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const response = await fetch("http://localhost:3001/students");

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
      const response = await fetch("http://localhost:3001/students", {
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

      setOpen(false);
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
    /* try {
      fetch(`http://localhost:3001/students/${id}`, {
        method: "DELETE",
      });

      fetchClassData();
    } catch (error) {
      console.error(
        "Houve um problema enviando os dados para o servidor. Erro:",
        error
      );
    } */
    alert(`you pressed ${id}`);
  };

  const openForm = () => {
    setOpen(true);
    reset();
    setFocus("nome");
  };

  return (
    <>
      <header className="flex flex-col items-center mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Olá, {nome}</h1>
        <p className="text-lg text-gray-700">Bem-vindo ao teste-dti!</p>
      </header>
      <main className="flex flex-col justify-center items-center">
        {classData ? (
          <StudentTable
            classData={classData}
            editStudent={editStudent}
            deleteStudent={deleteStudent}
          />
        ) : (
          <>
            <h2 className="text-xl mt-4 text-center">
              Você não possui nenhum aluno cadastrado no momento
            </h2>
            <h3 className="text-lg mt-3">
              Insira um clicando no botão abaixo!
            </h3>
          </>
        )}
        <button
          onClick={openForm}
          className="px-4 py-3 mt-6 mb-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold shadow-gray-500 shadow-md"
        >
          Inserir Aluno
        </button>
        <Modal open={open} onClose={() => setOpen(false)} center>
          <form
            onSubmit={handleSubmit(submitStudentData)}
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Preencha os campos</h2>

            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome do aluno:
              </label>
              <input
                type="text"
                id="nome"
                required
                {...register("nome")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <Disciplines register={register} />

            <div className="mb-4">
              <label
                htmlFor="frequencia"
                className="block text-sm font-medium text-gray-700 mt-3"
              >
                Frequência do aluno:
              </label>
              <input
                type="number"
                id="frequencia"
                min="0"
                max="100"
                required
                {...register("frequencia")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="reset"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 font-semibold shadow-gray-500 shadow-md"
              >
                Limpar
              </button>
              <button
                type="submit"
                className="w-full ml-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold shadow-gray-500 shadow-md"
              >
                Inserir
              </button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  );
}

export default App;
