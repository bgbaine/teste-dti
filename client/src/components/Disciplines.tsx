import { UseFormRegister } from "react-hook-form";
import { StudentData } from "../types/types";

interface DisciplinesProps {
  register: UseFormRegister<StudentData>;
}

const Disciplines: React.FC<DisciplinesProps> = ({ register }) => {
  const disciplines = [
    { id: "1", label: "Disciplina 1" },
    { id: "2", label: "Disciplina 2" },
    { id: "3", label: "Disciplina 3" },
    { id: "4", label: "Disciplina 4" },
    { id: "5", label: "Disciplina 5" },
  ];

  return (
    <div>
      {disciplines.map((discipline) => (
        <div key={discipline.id}>
          <label htmlFor={discipline.id}>{discipline.label}: </label>
          <input
            type="number"
            id={discipline.id}
            min="0"
            max="10"
            required
            {...register(`disciplina${discipline.id}` as keyof StudentData)}
          />
        </div>
      ))}
    </div>
  );
};

export default Disciplines;
