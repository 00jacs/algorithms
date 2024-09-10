function minSetSize(arr: number[]): number {
  const counts = new Map<number, number>();

  for (const num of arr) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const ordered: number[] = [];

  for (const [key, value] of counts) {
    ordered.push(value);
  }

  ordered.sort(function (a: number, b: number): number {
    return b - a;
  });

  let currentSize = arr.length;
  let removedCount = 0;

  for (const num of ordered) {
    if (currentSize > Math.floor(arr.length / 2)) {
      currentSize -= num;
      removedCount++;
    } else {
      break;
    }
  }

  return removedCount;
}
