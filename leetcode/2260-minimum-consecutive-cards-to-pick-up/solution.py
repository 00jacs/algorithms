def minimumCardPickup(self, cards: List[int]) -> int:
    m = {}
    NO_ANS = 10000009
    ans = NO_ANS

    for i in range(len(cards)):
        if cards[i] in m:
            ans = min(ans, i - m[cards[i]] + 1)
        m[cards[i]] = i

    return -1 if ans == NO_ANS else ans
