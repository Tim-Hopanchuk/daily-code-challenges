/*
  Mexican Wave
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
*/

export function wave(str: string): Array<string> {
  const result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    let current = str.split("");

    if (current[i] === " ") {
      continue;
    }

    current[i] = current[i].toUpperCase();
    result.push(current.join(""));
  }

  return result;
}
