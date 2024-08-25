function countingSort(arr: number[]): number[] {
  const freq = new Array(100).fill(0);

  for (const num of arr) {
    freq[num]++;
  }

  let idx: number = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < freq[i]; j++) {
      arr[idx++] = i;
    }
  }

  return arr;
}
