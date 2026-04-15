/*
  The Coupon Code
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/539de388a540db7fec000642
*/

export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string,
): boolean {
  if (enteredCode !== correctCode) {
    return false;
  }

  if (Date.parse(currentDate) > Date.parse(expirationDate)) {
    return false;
  }

  return true;
}
