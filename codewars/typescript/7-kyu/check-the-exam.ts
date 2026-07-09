/*
  Check the exam
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5a3dd29055519e23ec000074
*/

export function checkExam(
  examKey: string[],
  submitedAnswers: string[],
): number {
  let score = 0;

  for (let i = 0; i < examKey.length; i++) {
    if (submitedAnswers[i] === "") {
      continue;
    }

    if (examKey[i] === submitedAnswers[i]) {
      score += 4;
      continue;
    }

    score--;
  }

  return score > 0 ? score : 0;
}
