import prisma from "../../prisma/prismaClient.js";
import { z } from "zod";

export const alunoIndex = async (req, res) => {
  try {
    const students = await prisma.aluno.findMany();

    const studentsWithAverage = students.map((student) => {
      const average = (
        (student.nota1 + student.nota2 + student.nota3 + student.nota4 + student.nota5) /
        5
      ).toFixed(0);
      return { ...student, average };
    });

    const gradeTotal = {
      grade1: 0,
      grade2: 0,
      grade3: 0,
      grade4: 0,
      grade5: 0,
    };

    students.forEach((student) => {
      gradeTotal.grade1 += student.nota1;
      gradeTotal.grade2 += student.nota2;
      gradeTotal.grade3 += student.nota3;
      gradeTotal.grade4 += student.nota4;
      gradeTotal.grade5 += student.nota5;
    });

    const studentCount = students.length;
    const classAverageBySubject = {
      gradeAverage1: studentCount
        ? Math.round(gradeTotal.grade1 / studentCount)
        : 0,
      gradeAverage2: studentCount
        ? Math.round(gradeTotal.grade2 / studentCount)
        : 0,
      gradeAverage3: studentCount
        ? Math.round(gradeTotal.grade3 / studentCount)
        : 0,
      gradeAverage4: studentCount
        ? Math.round(gradeTotal.grade4 / studentCount)
        : 0,
      gradeAverage5: studentCount
        ? Math.round(gradeTotal.grade5 / studentCount)
        : 0,
    };
    console.log(classAverageBySubject);

    const classAverage = Math.round(
      (classAverageBySubject.gradeAverage1 +
        classAverageBySubject.gradeAverage2 +
        classAverageBySubject.gradeAverage3 +
        classAverageBySubject.gradeAverage4 +
        classAverageBySubject.gradeAverage5) /
        5
    );
    console.log(classAverage);

    const aboveAverage = studentsWithAverage
      .filter((student) => Number(student.average) > Number(classAverage))
      .map((student) => student.nome);

    const lowFrequency = studentsWithAverage
      .filter((student) => student.frequencia < 75)
      .map((student) => student.nome);

    const response = {
      students,
      classAverageBySubject,
      aboveAverage,
      lowFrequency,
    };

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json(`Desculpe, um erro no servidor ocorreu! Erro: ${error}`);
  }
};

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
