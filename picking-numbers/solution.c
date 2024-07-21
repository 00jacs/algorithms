int pickingNumbers(int a_count, int* a) {
    int results[101] = {0};
    int max_result = 0;

    for (int i = 0; i < a_count; i++) {
        results[a[i]]++;
        results[a[i] - 1]++;

        if (results[a[i]] > max_result) {
            max_result = results[a[i]];
        }

        if (results[a[i] - 1] > max_result) {
            max_result = results[a[i] - 1];
        }
    }

    return max_result;
}
