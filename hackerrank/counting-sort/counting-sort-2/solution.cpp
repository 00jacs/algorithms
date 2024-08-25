vector<int> countingSort(vector<int> arr) {
    vector<int> freq(100, 0);

    for (int i = 0; i < arr.size(); i++) {
        freq[arr[i]]++;
    }

    int idx = 0;
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < freq[i]; j++) {
            arr[idx++] = i;
        }
    }

    return arr;
}
