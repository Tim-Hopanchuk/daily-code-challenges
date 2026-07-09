/*
  Bumps in the Road
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/57ed30dde7728215300005fa
*/

export function bump(road: string): string {
  let bumpsCount = 0;

  for (let char of road) {
    if (char === "n") {
      bumpsCount++;
    }

    if (bumpsCount > 15) {
      return "Car Dead";
    }
  }

  return "Woohoo!";
}
