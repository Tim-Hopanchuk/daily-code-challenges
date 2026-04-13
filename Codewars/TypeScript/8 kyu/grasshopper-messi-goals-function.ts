/*
  Grasshopper - Messi goals function
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/55f73be6e12baaa5900000d4
*/

export function goals(
  laLigaGoals: number,
  copaDelReyGoals: number,
  championsLeagueGoals: number,
): number {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
