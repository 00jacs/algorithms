int minSetSize(vector<int>& arr) {
    unordered_map<int, int> counts;

    for (int num : arr) {
        counts[num]++;
    }

    vector<int> ordered;

    for (auto [key, val] : counts) {
        ordered.push_back(val);
    }

    sort(ordered.begin(), ordered.end(), greater<int>());

    int current_size = arr.size();
    int removed_count = 0;
    for (int num : ordered) {
        if (current_size > (arr.size() / 2)) {
            current_size -= num;
            removed_count++;
        } else {
            break;
        }
    }

    return removed_count;
}