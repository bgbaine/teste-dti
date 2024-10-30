import { ClassAverageBySubject } from "../types/types";

const CalculateClassAverage = (data: ClassAverageBySubject): number => {
  const average = Math.round(
    (data.gradeAverage1 +
      data.gradeAverage2 +
      data.gradeAverage3 +
      data.gradeAverage4 +
      data.gradeAverage5) /
      5
  );

  return average;
};

export default CalculateClassAverage;
