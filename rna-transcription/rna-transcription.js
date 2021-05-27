export const toRna = (rna) => {
  let result = [];
  for (let i = 0; i < rna.length; i++) {
    switch (rna[i]) {
      case 'G':
        result[i] = 'C';
        break;
      case 'C':
        result[i] = 'G';
        break;
      case 'T':
        result[i] = 'A';
        break;
      case 'A':
        result[i] = 'U';
        break;
      case 'g':
        result[i] = 'C';
        break;
      case 'c':
        result[i] = 'G';
        break;
      case 't':
        result[i] = 'A';
        break;
      case 'a':
        result[i] = 'U';
        break;
    }
  }
  return result.join("");
};