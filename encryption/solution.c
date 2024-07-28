void remove_spaces(char *str) {
    char *read_ptr = str,
        *write_ptr = str;

    while (*read_ptr != '\0') {
        if (*read_ptr != ' ') {
            *write_ptr = *read_ptr;
            write_ptr++;
        }
        read_ptr++;
    }
    *write_ptr = '\0';
}

char* encryption(const char *s) {
    char *trimmed = strdup(s);
    remove_spaces(trimmed);

    int len = strlen(trimmed);
    char* encryption(const char *s) {
    char *trimmed = strdup(s);
    remove_spaces(trimmed);

    int len = strlen(trimmed);
    int rows = (int)floor(sqrt(len));
    int cols = (int)ceil(sqrt(len));

    if (rows * cols < len) {
        rows++;
    }

    // Allocate enough space for the result string and the spaces
    char *result = malloc(len + cols + 1); // +1 for the null terminator
    int resultIndex = 0;

    for (int i = 0; i < cols; i++) {
        for (int j = 0; j < rows; j++) {
            int idx = j * cols + i;
            if (idx < len) {
                result[resultIndex++] = trimmed[idx];
            }
        }
        if (i < cols - 1) {
            result[resultIndex++] = ' ';
        }
    }
    result[resultIndex] = '\0';

    free(trimmed);

    return result;
}
