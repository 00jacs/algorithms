function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let low = 0;
  let high = rows * cols - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const row = Math.floor(mid / cols);
    const col = mid % cols;

    if (matrix[row][col] === target) {
      return true;
    }

    if (matrix[row][col] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}
