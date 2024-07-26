def flippingMatrix(matrix):
    n = len(matrix)
    result = 0

    for i in range(0, n//2):
        for j in range(0, n//2):
            result += max(matrix[i][j], matrix[i][n-j-1], matrix[n-i-1][n-j-1], matrix[n-i-1][j])

    return result
