/*
  Deodorant Evaporator
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
*/

export function evaporator(
  content: number,
  evapPerDay: number,
  threshold: number,
): number {
  const contentThreshold = content * (threshold / 100);
  let currentContent = content;
  let days = 0;

  while (currentContent >= contentThreshold) {
    currentContent -= currentContent * (evapPerDay / 100);
    days++;
  }

  return days;
}
