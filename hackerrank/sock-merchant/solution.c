int sockMerchant(int n, int ar_count, int* ar) {
    int number_of_pairs = 0;
    int count[101];

    for (int i = 0; i < 101; i++) {
        count[i] = 0;
    }

    for (int i = 0; i < ar_count; i++) {
        count[ar[i]]++;

        if (count[ar[i]] % 2 == 0) {
            count[ar[i]] = 0;
            number_of_pairs++;
        }
    }

    return number_of_pairs;
}
