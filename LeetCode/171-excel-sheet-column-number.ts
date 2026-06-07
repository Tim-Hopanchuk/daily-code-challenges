/*
  171. Excel Sheet Column Number
  
  Difficulty: Easy
  Topics: Math, String
  Runtime: 1 ms
  Memory: 58.01 MB

  Link: https://leetcode.com/problems/excel-sheet-column-number?envType=problem-list-v2&envId=string
*/

function titleToNumber(columnTitle: string): number {
  let columNumber = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    columNumber +=
      (columnTitle[columnTitle.length - 1 - i].codePointAt(0)! - 64) * 26 ** i;
  }

  return columNumber;
}
