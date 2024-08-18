def insertionSort1(n, arr):
    last_val = arr[n - 1]
    should_return = False

    for i in reversed(range(0, n - 1)):
        if arr[i] > last_val:
            arr[i + 1] = arr[i]
        else:
            arr[i + 1] = last_val
            should_return = True

        print(*arr, sep=" ")

        if (should_return):
            break

    if not should_return:
        arr[0] = last_val
        print(*arr, sep=" ")

    return
