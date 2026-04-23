const colors: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedResistorValue(color: string[]): string {
  let first = colors[color[0]];
  let second = colors[color[1]];
  let third = colors[color[2]];

  let base = (first * 10) + second;
  let totalOhms = base * (10 ** third);

  if (totalOhms >= 1000000000) {
    return `${totalOhms / 1000000000} gigaohms`;
  } 
  else if (totalOhms >= 1000000) {
    return `${totalOhms / 1000000} megaohms`;
  } 
  else if (totalOhms >= 1000) {
    return `${totalOhms / 1000} kiloohms`;
  } 
  
  return `${totalOhms} ohms`;
}