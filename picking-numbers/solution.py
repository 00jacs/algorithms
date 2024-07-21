def pickingNumbers(a):
    start_values = [0] * 101
    result = 0
    for num in a:
        start_values[num] += 1
        start_values[num - 1] += 1
        result = max(result, start_values[num], start_values[num - 1])

    return result
