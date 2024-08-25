def countingSort(arr):
    freq = [0] * 100

    for num in arr:
        freq[num] += 1

    return freq
