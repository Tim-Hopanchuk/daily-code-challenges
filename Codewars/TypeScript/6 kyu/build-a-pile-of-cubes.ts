/*
  Build a pile of Cubes
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
*/

export function findNb(targetVolume: number): number {
  let currentVolume = 0;

  for (let i = 1; currentVolume < targetVolume; i++) {
    currentVolume += i ** 3;
    if (currentVolume === targetVolume) {
      return i;
    }
  }

  return -1;
}
