/*
  To square(root) or not to square(root)
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57f6ad55cca6e045d2000627
*/

export function squareOrSquareRoot(arr: number[]): number[] {
  const result = arr.map((num) => {
    if (Math.sqrt(num) % 1 === 0) {
      return Math.sqrt(num);
    }

    return Math.pow(num, 2);
  });

  return result;
}
