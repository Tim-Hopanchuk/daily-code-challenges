/*
  Divide and Conquer
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/57eaec5608fed543d6000021
*/

export function divCon(arr: (string | number)[]): number {
  const result: number = arr.reduce<number>((sum, current) => {
    if (typeof current === "string") {
      return sum - Number(current);
    }

    return sum + current;
  }, 0);

  return result;
}
