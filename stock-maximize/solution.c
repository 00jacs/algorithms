long stockmax(int prices_count, int* prices) {
    long profit = 0;
    int last_max = prices[prices_count - 1];

    for (int i = prices_count - 2; i >= 0; i--) {
       if (prices[i] > last_max) {
           last_max = prices[i];
       } else {
           profit += last_max - prices[i];
       }
    }

    return profit;
}
