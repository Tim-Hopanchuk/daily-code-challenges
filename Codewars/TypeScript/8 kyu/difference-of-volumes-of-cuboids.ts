/*
  Difference of Volumes of Cuboids
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/58cb43f4256836ed95000f97
*/

export function findDifference(
  cuboid1Size: [number, number, number],
  cuboid2Size: [number, number, number],
): number {
  const cuboid1Volume = cuboid1Size[0] * cuboid1Size[1] * cuboid1Size[2];
  const cuboid2Volume = cuboid2Size[0] * cuboid2Size[1] * cuboid2Size[2];

  return Math.abs(cuboid1Volume - cuboid2Volume);
}
