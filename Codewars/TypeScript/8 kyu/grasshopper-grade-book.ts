/*
  Grasshopper - Grade book
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5
*/

export function getGrade(
  score1: number,
  score2: number,
  score3: number,
): string {
  const averageScore = (score1 + score2 + score3) / 3;

  if (averageScore >= 90) {
    return "A";
  }
  if (averageScore >= 80) {
    return "B";
  }
  if (averageScore >= 70) {
    return "C";
  }
  if (averageScore >= 60) {
    return "D";
  }

  return "F";
}
