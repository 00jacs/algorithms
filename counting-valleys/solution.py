def countingValleys(steps, path):
    sea_level = 0
    valleys = 0

    for i in range(steps):
        if path[i] == 'D':
            sea_level -= 1
        else:
            sea_level += 1
            if sea_level == 0:
                valleys += 1

    return valleys
