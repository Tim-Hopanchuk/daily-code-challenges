/*
  Rectangle into Squares
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/55466989aeecab5aac00003e
*/

export function sqInRect(length: number, width: number): null | number[] {
  if (length === width) {
    return null;
  }

  const result: number[] = [];

  while (length > 0 && width > 0) {
    if (length > width) {
      result.push(width);
      length -= width;
      continue;
    }

    result.push(length);
    width -= length;
  }

  return result;
}
