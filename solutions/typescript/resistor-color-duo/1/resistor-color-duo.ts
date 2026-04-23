export const COLORS = [
  "black", "brown", "red", "orange", "yellow", 
  "green", "blue", "violet", "grey", "white"
];

export function decodedValue(colors: string[]): number {
  let firstDigit = COLORS.indexOf(colors[0]);
  
  let secondDigit = COLORS.indexOf(colors[1]);
  
  return (firstDigit * 10) + secondDigit;
}