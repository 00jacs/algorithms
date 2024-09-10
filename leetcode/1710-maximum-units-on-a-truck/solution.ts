function maximumUnits(boxTypes: number[][], truckSize: number): number {
  const boxes: number[][] = [];

  for (let i = 0; i < boxTypes.length; i++) {
    boxes.push([boxTypes[i][1], boxTypes[i][0]]);
  }

  boxes.sort(function (a: number[], b: number[]): number {
    return b[0] - a[0];
  });

  let units = 0;
  let i = 0;

  while (truckSize > 0 && i < boxes.length) {
    if (boxes[i][1] >= truckSize) {
      units += truckSize * boxes[i][0];
      truckSize = 0;
      break;
    }

    units += boxes[i][1] * boxes[i][0];
    truckSize -= boxes[i][1];

    i++;
  }

  return units;
}
