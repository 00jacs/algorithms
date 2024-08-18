void insertionSort2(int n, vector<int> arr) {
    for (int i = 1; i < n; i++) {
        int j = i;

        while (j > 0 && arr[j] < arr[j - 1]) {
            // swap
            int temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;

            j = j - 1;
        }


        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }

        printf("\n");
    }
