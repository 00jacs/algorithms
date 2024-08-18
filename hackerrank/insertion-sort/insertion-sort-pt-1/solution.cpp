void insertionSort1(int n, vector<int> arr) {
    bool should_return = false;
    int last_value = arr[n - 1];

    for (int i = n - 2; i >= 0; i--) {
        if (arr[i] > last_value) {
            arr[i + 1] = arr[i];
        } else {
            arr[i + 1] = last_value;
            should_return = true;
        }

        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }

        printf("\n");

        if (should_return) break;
    }

    if (!should_return) {
        arr[0] = last_value;

        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }

        printf("\n");
    }

    return;
}
