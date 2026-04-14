/*
  Well of Ideas - Easy Version
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57f222ce69e09c3630000212
*/

export function well(ideas: string[]): string {
  if (ideas.filter((value) => value === "good").length > 2) {
    return "I smell a series!";
  }

  if (ideas.includes("good")) {
    return "Publish!";
  }

  return "Fail!";
}
