/*
  Roman Numerals Encoder
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
*/

export function solution(num: number): string {
  const convertingTable: { [key: string]: string } = {
    "0": "",
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": "XX",
    "30": "XXX",
    "40": "XL",
    "50": "L",
    "60": "LX",
    "70": "LXX",
    "80": "LXXX",
    "90": "XC",
    "100": "C",
    "200": "CC",
    "300": "CCC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM",
  };

  const numDecimals: string[] = String(num).split("");

  for (let i = 1; i <= numDecimals.length; i++) {
    const currentIndex = numDecimals.length - i;
    numDecimals[currentIndex] = String(
      Number(numDecimals[currentIndex]) * 10 ** (i - 1),
    );
  }

  let result: string = "";
  for (let i = 0; i < numDecimals.length; i++) {
    result += convertingTable[numDecimals[i]];
  }

  return result;
}
