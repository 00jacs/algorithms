/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const hashCoordinates = (x, y) => {
    return `${x}-${y}`;
  };

  const visited = new Set();
  visited.add(hashCoordinates(0, 0));

  let x = 0;
  let y = 0;

  for (const dir of path) {
    switch (dir) {
      case 'N':
        y -= 1;
        break;
      case 'S':
        y += 1;
        break;
      case 'E':
        x += 1;
        break;
      case 'W':
        x -= 1;
        break;
    }

    const hashedCoordinates = hashCoordinates(x, y);
    if (visited.has(hashedCoordinates)) {
      return true;
    }

    visited.add(hashedCoordinates);
  }

  return false;
};
