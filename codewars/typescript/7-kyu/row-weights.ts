/*
  Row Weights
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
*/

export function rowWeights(weights: number[]): [number, number] {
  const evenWeightsSum = weights.reduce(
    (sum, currentValue, currentIndex) =>
      currentIndex % 2 === 0 ? sum + currentValue : sum,
    0,
  );
  const oddWeightsSum = weights.reduce(
    (sum, currentValue, currentIndex) =>
      currentIndex % 2 === 0 ? sum : sum + currentValue,
    0,
  );

  return [evenWeightsSum, oddWeightsSum];
}
