import { z } from "zod";

export const schemaAluno = z.object({
  nome: z.string().min(1, "Insira um nome"),
  nota1: z
    .number()
    .int()
    .min(0)
    .max(10, "Nota deve ser um inteiro entre 0 e 10"),
  nota2: z
    .number()
    .int()
    .min(0)
    .max(10, "Nota deve ser um inteiro entre 0 e 10"),
  nota3: z
    .number()
    .int()
    .min(0)
    .max(10, "Nota deve ser um inteiro entre 0 e 10"),
  nota4: z
    .number()
    .int()
    .min(0)
    .max(10, "Nota deve ser um inteiro entre 0 e 10"),
  nota5: z
    .number()
    .int()
    .min(0)
    .max(10, "Nota deve ser um inteiro entre 0 e 10"),
  frequencia: z
    .number()
    .int()
    .min(0)
    .max(100, "Frequência deve ser um inteiro entre 0 e 100"),
});

export const validateAluno = (req, res, next) => {
  try {
    schemaAluno.parse(req.body);

    next();
  } catch (error) {
    res.status(400).json(`Desculpe, um erro ocorreu validando o aluno. Erro: ${error}`);
  }
};
