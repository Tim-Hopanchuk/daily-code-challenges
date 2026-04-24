/*
  Roman Numerals Decoder
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/51b6249c4612257ac0000005
*/

export function solution(roman: string): number {
  const convertingTable: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const result = roman.split("").reduce((sum, current, index, arr) => {
    const currentArabic = convertingTable[current];
    const nextArabic =
      arr[index + 1] === undefined ? 0 : convertingTable[arr[index + 1]];

    if (currentArabic >= nextArabic) {
      return sum + currentArabic;
    }

    return sum - currentArabic;
  }, 0);

  return result;
}
