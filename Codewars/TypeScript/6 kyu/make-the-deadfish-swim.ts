/*
  Make the Deadfish Swim
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/51e0007c1f9378fa810002a9
*/

export function parse(data: string): number[] {
  let currentValue = 0;
  const result: number[] = [];

  for (let char of data) {
    switch (char) {
      case "i":
        currentValue++;
        break;

      case "d":
        currentValue--;
        break;

      case "s":
        currentValue = currentValue ** 2;
        break;

      case "o":
        result.push(currentValue);
        break;
    }
  }

  return result;
}
