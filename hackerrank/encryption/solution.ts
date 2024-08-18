function encryption(s: string): string {
  const trimmed = s.replace(" ", "");
  let rows = Math.floor(Math.sqrt(trimmed.length));
  const cols = Math.ceil(Math.sqrt(trimmed.length));

  if (rows * cols < trimmed.length) {
    rows++;
  }

  let result = "";

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const idx = j * cols + i;
      if (idx < trimmed.length) {
        result += s[j * cols + i];
      }
    }

    result += " ";
  }

  return result;
}
