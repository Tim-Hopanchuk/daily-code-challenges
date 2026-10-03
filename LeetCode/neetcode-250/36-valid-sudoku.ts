/*
  36. Valid Sudoku
  
  Difficulty: Medium
  Topics: Array, Hash Table, Matrix
  Runtime: 6 ms
  Memory:  56.83 MB

  Link: https://leetcode.com/problems/valid-sudoku
*/

function isValidSudoku(board: string[][]): boolean {
  if (!isValidRows(board)) {
    return false;
  }

  if (!isValidColumns(board)) {
    return false;
  }

  if (!isValidSubBoxes(board)) {
    return false;
  }

  return true;
}

function isValidRows(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    const rowValues = new Set<string>();

    for (let column = 0; column < 9; column++) {
      if (board[row][column] === ".") {
        continue;
      }

      if (rowValues.has(board[row][column])) {
        return false;
      }

      rowValues.add(board[row][column]);
    }
  }

  return true;
}

function isValidColumns(board: string[][]): boolean {
  for (let column = 0; column < 9; column++) {
    const columnValues = new Set<string>();

    for (let row = 0; row < 9; row++) {
      if (board[row][column] === ".") {
        continue;
      }

      if (columnValues.has(board[row][column])) {
        return false;
      }

      columnValues.add(board[row][column]);
    }
  }

  return true;
}

function isValidSubBoxes(board: string[][]): boolean {
  const subBoxesCenters: [number, number][] = [
    [1, 1],
    [1, 4],
    [1, 7],
    [4, 1],
    [4, 4],
    [4, 7],
    [7, 1],
    [7, 4],
    [7, 7],
  ];

  for (const [row, column] of subBoxesCenters) {
    const subBoxValues = new Set<string>();

    for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
      for (let columnOffset = -1; columnOffset < 2; columnOffset++) {
        if (board[row + rowOffset][column + columnOffset] === ".") {
          continue;
        }

        if (subBoxValues.has(board[row + rowOffset][column + columnOffset])) {
          return false;
        }

        subBoxValues.add(board[row + rowOffset][column + columnOffset]);
      }
    }
  }

  return true;
}
