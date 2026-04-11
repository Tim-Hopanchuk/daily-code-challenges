/*
  Total amount of points
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5bb904724c47249b10000131
*/

export function points(score: string[]): number {
  const points = score.reduce((sum, current) => {
    const score = current.split(":");
    if (score[0] > score[1]) {
      return sum + 3;
    }

    if (score[0] === score[1]) {
      return sum + 1;
    }

    return sum;
  }, 0);

  return points;
}
