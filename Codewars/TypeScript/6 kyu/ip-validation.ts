/*
  IP Validation
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/515decfd9dcfc23bb6000006
*/

export function isValidIP(str: string): boolean {
  const regexp =
    /^((((?<=\.|^)[0-9](?=\.|$))|((?<=\.|^)[1-9][0-9](?=\.|$))|((?<=\.|^)[1][0-9][0-9](?=\.|$))|((?<=\.|^)[2][0-4][0-9](?=\.|$))|((?<=\.|^)[2][5][0-5](?=\.|$)))(\.|$)){4}$/;

  return regexp.test(str);
}
