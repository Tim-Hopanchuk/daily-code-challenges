/*
  I love you, a little , a lot, passionately ... not at all
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
*/

export function howMuchILoveYou(petals: number): string {
  const loveGrades = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  return loveGrades[(petals + 5) % 6];
}
