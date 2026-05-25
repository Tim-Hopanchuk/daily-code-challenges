/*
  20. Valid Parentheses
  
  Difficulty: Easy
  Topics: String, Stack
  Runtime: 3 ms
  Memory: 58.65 MB

  Link: https://leetcode.com/problems/valid-parentheses
*/

function isValid(str: string): boolean {
  const opening: string[] = [];

  for (const parenthesis of str) {
    if (parenthesis === "(" || parenthesis === "{" || parenthesis === "[") {
      opening.push(parenthesis);
    }

    if (parenthesis === ")" || parenthesis === "}" || parenthesis === "]") {
      const expected = opening.pop();
      if (getMatchingParenthesis(parenthesis) !== expected) {
        return false;
      }
    }
  }

  if (opening.length > 0) {
    return false;
  }

  return true;
}

function getMatchingParenthesis(parenthesis: string): string {
  if (parenthesis === ")") {
    return "(";
  }

  if (parenthesis === "}") {
    return "{";
  }

  if (parenthesis === "]") {
    return "[";
  }

  return "";
}
