/*
  Drink about
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/56170e844da7c6f647000063
*/

export function peopleWithAgeDrink(age: number): string {
  if (age >= 21) {
    return "drink whisky";
  }

  if (age >= 18) {
    return "drink beer";
  }

  if (age >= 14) {
    return "drink coke";
  }

  return "drink toddy";
}
