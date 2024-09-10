int maximum69Number (int num) {
    int num_copy = num;

    int i = 0;
    int last_six = -1;

    while (num_copy) {
        if (num_copy % 10 == 6) {
            last_six = i;
        }

        num_copy /= 10;
        i++;
    }

    if (last_six == -1) {
        return num;
    }

    return num + 3 * pow(10, last_six);
}