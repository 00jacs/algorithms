def pickingNumbers(a):
    results = [0] * 101
    result = 0
    for num in a:
        results[num] += 1
        results[num - 1] += 1
        result = max(result, results[num], results[num - 1])

    return result
