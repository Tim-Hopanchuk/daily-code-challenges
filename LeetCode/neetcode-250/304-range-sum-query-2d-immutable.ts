/*
  304. Range Sum Query 2D - Immutable
  
  Difficulty: Medium
  Topics: Array, Design, Matrix, Prefix Sum
  Runtime: 41 ms
  Memory: 83.2 MB

  Link: https://leetcode.com/problems/range-sum-query-2d-immutable
*/

class NumMatrix {
  prefixSums: number[][];

  constructor(matrix: number[][]) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    this.prefixSums = [];
    for (let row = 0; row <= rowCount; row++) {
      this.prefixSums[row] = [];
      for (let col = 0; col <= colCount; col++) {
        if (row === 0 || col === 0) {
          this.prefixSums[row][col] = 0;
          continue;
        }

        this.prefixSums[row][col] =
          matrix[row - 1][col - 1] +
          this.prefixSums[row - 1][col] +
          this.prefixSums[row][col - 1] -
          this.prefixSums[row - 1][col - 1];
      }
    }
  }

  sumRegion(
    startRow: number,
    startCol: number,
    endRow: number,
    endCol: number,
  ): number {
    return (
      this.prefixSums[endRow + 1][endCol + 1] -
      this.prefixSums[startRow][endCol + 1] -
      this.prefixSums[endRow + 1][startCol] +
      this.prefixSums[startRow][startCol]
    );
  }
}

/*
  Alternatives:

  class NumMatrix {
    matrix: number[][];

    constructor(matrix: number[][]) {
      this.matrix = matrix;
    }

    sumRegion(
      startRow: number,
      startCol: number,
      endRow: number,
      endCol: number,
    ): number {
      let sum = 0;

      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          sum += this.matrix[row][col];
        }
      }

      return sum;
    }
  }



  class NumMatrix {
    rowPrefixes: number[][];

    constructor(matrix: number[][]) {
      this.rowPrefixes = buildRowPrefixes(matrix);
    }

    sumRegion(
      startRow: number,
      colStart: number,
      endRow: number,
      endCol: number,
    ): number {
      let sum = 0;
      for (let row = startRow; row <= endRow; row++) {
        sum +=
          this.rowPrefixes[row][endCol + 1] - this.rowPrefixes[row][colStart];
      }

      return sum;
    }
  }

  function buildRowPrefixes(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const rowPrefixes: number[][] = [];
    for (let row = 0; row < rows; row++) {
      rowPrefixes[row] = [0];
      for (let col = 0; col < cols; col++) {
        rowPrefixes[row][col + 1] = rowPrefixes[row][col] + matrix[row][col];
      }
    }

    return rowPrefixes;
  }
*/
