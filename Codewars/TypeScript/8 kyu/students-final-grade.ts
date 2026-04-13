/*
  Student's Final Grade
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
*/

export function finalGrade(examGrade: number, projectsCount: number): number {
  if (examGrade > 90 || projectsCount > 10) {
    return 100;
  }

  if (examGrade > 75 && projectsCount >= 5) {
    return 90;
  }

  if (examGrade > 50 && projectsCount >= 2) {
    return 75;
  }

  return 0;
}
