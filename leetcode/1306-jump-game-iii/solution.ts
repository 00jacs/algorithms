function canReach(arr: number[], start: number): boolean {
  if (arr.length && arr[start] == 0) {
    return true;
  }

  const seen = new Set<number>(); // set of visited indexes

  let queue: number[] = [start];
  seen.add(start);

  while (queue.length) {
    const nextQueue: number[] = [];

    for (let i = 0; i < queue.length; i++) {
      const position = queue[i];
      // console.log(`currently analyzing position: ${position}:`)

      const a = position + arr[position];
      if (a >= 0 && a < arr.length && !seen.has(a)) {
        if (arr[a] == 0) return true;

        // console.log(`- adding ${a} to the queue;`);
        seen.add(a);
        nextQueue.push(a);
      }

      const b = position - arr[position];
      if (b >= 0 && b < arr.length && !seen.has(b)) {
        if (arr[b] == 0) return true;

        // console.log(`- adding ${b} to the queue;`);
        seen.add(b);
        nextQueue.push(b);
      }
    }

    queue = nextQueue;
  }

  return false;
}
