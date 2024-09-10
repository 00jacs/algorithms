function maximum69Number(num: number): number {
  let numCopy = num;

  let i = 0;
  let lastSixPos = -1;

  while (numCopy > 0) {
    if (numCopy % 10 == 6) {
      lastSixPos = i;
    }

    numCopy = Math.floor(numCopy / 10);
    i++;
  }

  if (lastSixPos == -1) {
    return num;
  }

  return num + 3 * Math.pow(10, lastSixPos);
}
