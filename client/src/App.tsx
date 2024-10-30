import { useForm, SubmitHandler } from "react-hook-form";
import { StudentData } from "./types/types";
import Disciplines from "./components/Disciplines";
import formatStudentData from "./utils/formatStudentData";
import { useEffect } from "react";

function App() {
  const { register, handleSubmit, setFocus, reset } = useForm<StudentData>();

  useEffect(() => {
    setFocus("nome");
  }, []);

  const submitStudentData: SubmitHandler<StudentData> = async (data) => {
    reset();

    setFocus("nome");
    console.log(data);

    const formattedData = formatStudentData(data);
    console.log(formattedData);
    
    try {
      const response = await fetch("http://localhost:3001/aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error(`O servidor respondeu, mas com um erro. Resposta: ${response.statusText}`);
      }

      const result: any = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Houve um problema enviando os dados para o servidor. Erro:", error);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-red-500">Olá, Carlos</h1>
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
    </>
  );
}

export default App;
