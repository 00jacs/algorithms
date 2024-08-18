int countingValleys(int steps, char* path) {
    int sea_level = 0;
    int valleys = 0;

    for (int i = 0; i < steps; i++) {
        if(path[i] == 'D') {
            sea_level--;
        } else {
            sea_level++;
            if (sea_level == 0) {
                valleys++;
            }
        }
    }

    return valleys;
