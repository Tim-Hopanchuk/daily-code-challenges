/*
  Transportation on vacation
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/568d0dd208ee69389d000016
*/

export function rentalCarCost(days: number): number {
  let rentalCost = days * 40;

  if (days >= 7) {
    return rentalCost - 50;
  }
  if (days >= 3) {
    return rentalCost - 20;
  }

  return rentalCost;
}
