int flippingMatrix(int matrix_rows, int matrix_columns, int** matrix) {
    int sum = 0;

    for (int i = 0; i < matrix_rows / 2; i++) {
        for (int j = 0; j < matrix_columns / 2; j++) {
            int mx = 0;
            if (matrix[i][j] > matrix[i][matrix_columns-j-1]) {
                mx = matrix[i][j];
            } else {
                mx = matrix[i][matrix_columns-j-1];
            }

            if (matrix[matrix_rows-i-1][j] > mx) {
                mx = matrix[matrix_rows-i-1][j];
            }

            if (matrix[matrix_rows-i-1][matrix_columns-j-1] > mx) {
                mx = matrix[matrix_rows-i-1][matrix_columns-j-1];
            }

            sum += mx;
        }
    }

    return sum;
}
