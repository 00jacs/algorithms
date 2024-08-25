function countingSort(arr: number[]): number[] {
  const freq = Array.from({ length: 100 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }

  return freq;
}
