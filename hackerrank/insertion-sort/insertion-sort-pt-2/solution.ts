function insertionSort2(n: number, arr: number[]): void {
  for (let i = 1; i < n; i++) {
    let j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      // swap
      const temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;

      j--;
    }

    console.log(arr.join(" "));
  }

  return;
}
