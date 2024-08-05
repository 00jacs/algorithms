function sockMerchant(n: number, ar: number[]): number {
  let numberOfPairs = 0;
  const count = Array.from({ length: 101 }, () => 0);

  for (let i = 0; i < ar.length; i++) {
    count[ar[i]]++;
    if (count[ar[i]] % 2 == 0) {
      numberOfPairs++;
      count[ar[i]] = 0;
    }
  }

  return numberOfPairs;
}
