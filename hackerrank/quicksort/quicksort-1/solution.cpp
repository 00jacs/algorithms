vector<int> quickSort(vector<int> arr) {
    // pivot p = arr[0]
    int p = arr[0];

    vector<int> left;
    vector<int> equal;
    vector<int> right;

    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] < p) {
            left.push_back(arr[i]);
        } else if (arr[i] == p) {
            equal.push_back(p);
        } else if (arr[i] > p) {
            right.push_back(arr[i]);
        }
    }

    vector<int> result;
    for (int i = 0; i < left.size(); i++) {
        result.push_back(left[i]);
    }

    for (int i = 0; i < equal.size(); i++) {
        result.push_back(equal[i]);
    }

    for (int i = 0; i < right.size(); i++) {
        result.push_back(right[i]);
    }

    return result;
}
