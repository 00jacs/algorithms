def countingSort(arr):
    freq = [0] * 100

    for num in arr:
        freq[num] += 1

    idx = 0
    for i in range(100):
        for j in range(freq[i]):
            arr[idx] = i
            idx += 1

    return arr
