import Disciplines from "./components/Disciplines";


function App() {
  return (
    <>
      <h1 className="text-4xl text-red-500">Olá, Carlos</h1>
      <form action="">
        <div>
          <label htmlFor="nome">Nome do aluno: </label>
          <input type="text" id="nome" required />
        </div>
        <Disciplines />
        <div>
          <label htmlFor="frequencia">Frequência do aluno: </label>
          <input type="number" id="frequencia" min="0" max="100" required />
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
