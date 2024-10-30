import prisma from "../../prisma/prismaClient.js";
import { z } from "zod";

export const alunoCreate = async (req, res) => {
  try {
    const aluno = await prisma.aluno.create({ data: req.body });
    res.status(201).json(aluno);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res
        .status(500)
        .json(`Desculpe, um erro no servidor ocorreu! Erro: ${error}`);
    }
  }
};