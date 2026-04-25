/*
  Help the bookseller !
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/54dc6f5a224c26032800005c
*/

export function stockList(skus: string[], categories: string[]): string {
  if (skus.length === 0 || categories.length === 0) {
    return "";
  }

  let result: string[] = [];

  for (let category of categories) {
    let categoryQuantity = 0;

    for (let sku of skus) {
      if (sku[0] === category) {
        categoryQuantity += Number(sku.split(" ")[1]);
      }
    }
    
    result.push(`(${category} : ${categoryQuantity})`);
  }

  return result.join(" - ");
}
