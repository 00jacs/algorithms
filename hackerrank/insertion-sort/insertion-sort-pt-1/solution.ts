function insertionSort1(n: number, arr: number[]) {
  let should_return = false;
  let last_value = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > last_value) {
      arr[i + 1] = arr[i];
    } else {
      arr[i + 1] = last_value;
      should_return = true;
    }

    console.log(arr.join(" "));

    if (should_return) break;
  }

  if (!should_return) {
    arr[0] = last_value;
    console.log(arr.join(" "));
  }

  return;
}
