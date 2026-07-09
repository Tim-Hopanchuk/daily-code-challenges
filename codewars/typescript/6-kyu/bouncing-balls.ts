/*
  Bouncing Balls
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/5544c7a5cb454edb3c000047
*/

export function bouncingBall(
  initialHeight: number,
  bounceFactor: number,
  windowHeight: number,
): number {
  if (
    initialHeight <= 0 ||
    bounceFactor >= 1 ||
    bounceFactor <= 0 ||
    windowHeight >= initialHeight
  ) {
    return -1;
  }

  let currentHeight = initialHeight * bounceFactor;
  let passCount = 1;

  while (currentHeight > windowHeight) {
    passCount += 2;
    currentHeight = currentHeight * bounceFactor;
  }

  return passCount;
}
