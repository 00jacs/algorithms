def getMoneySpent(keyboards, drives, b):
    result = -1
    for keyboard in keyboards:
        for drive in drives:
            if keyboard + drive <= b:
                result = max(result, keyboard + drive)

    return result
