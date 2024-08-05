def sockMerchant(n, ar):
    number_of_pairs = 0
    count = [0 for i in range(101)]

    for i in range(len(ar)):
        count[ar[i]] += 1
        if (count[ar[i]] % 2 == 0):
            count[ar[i]] -= 2
            number_of_pairs += 1

    return number_of_pairs
