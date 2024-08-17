def insertionSort2(n, arr):
    for i in range(1, n):
        j = i

        while j > 0 and arr[j] < arr[j - 1]:
            temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
            j -= 1

        print(*arr, sep=" ")
