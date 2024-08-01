function countingValleys(steps: number, path: string): number {
  let seaLevel = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      seaLevel--;
    } else {
      seaLevel++;
      seaLevel === 0 && (valleys++);
    }
  }

  return valleys;
