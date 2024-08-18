import math

def encryption(s):
    s = s.replace(' ', '')
    rows = math.floor(math.sqrt(len(s)))
    cols = math.ceil(math.sqrt(len(s)))

    if rows * cols < len(s):
        rows += 1

    result = ''

    for i in range(0, cols):
        for j in range(0, rows):
            idx = j * cols + i
            if idx < len(s):
                result += s[j * cols + i]
        result += ' '

    return result
