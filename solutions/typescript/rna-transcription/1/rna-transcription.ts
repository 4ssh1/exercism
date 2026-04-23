const rnaMapping: Record<string, string> = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
};

export function toRna(dna: string): string {
  return dna
    .split('')
    .map(letter => {
  if(!rnaMapping[letter]) throw('Invalid input DNA.')
    return  rnaMapping[letter]
    } )
    .join('');
}