/*
  The Feast of Many Beasts
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5aa736a455f906981800360d
*/

export function feast(animal: string, dish: string): boolean {
  return animal.at(0) === dish.at(0) && animal.at(-1) === dish.at(-1);
}
