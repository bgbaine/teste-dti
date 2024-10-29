import { useForm, SubmitHandler } from "react-hook-form";
import { StudentData } from "./types/types";
import Disciplines from "./components/Disciplines";


function App() {
  const { register, handleSubmit, setFocus, reset } = useForm<StudentData>();

  const submitStudentData: SubmitHandler<StudentData> = (data) => {
    reset();

    setFocus("nome");

    console.log(data.nome);

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
