int getMoneySpent(int keyboards_count, int* keyboards, int drives_count, int* drives, int b) {
    int result = -1;

    for (int i = 0; i < keyboards_count; i++) {
        for (int j = 0; j < drives_count; j++) {
            int sum = keyboards[i] + drives[j];
            if (sum <= b && sum > result) {
                result = sum;
            }
        }
    }

    return result;
}
