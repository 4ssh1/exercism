export function format(name: string, number: number): string {
  let suffix: string;

  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = "th";
  } 
  else if (lastDigit === 1) {
    suffix = "st";
  } 
  else if (lastDigit === 2) {
    suffix = "nd";
  } 
  else if (lastDigit === 3) {
    suffix = "rd";
  } 
  else {
    suffix = "th";
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}