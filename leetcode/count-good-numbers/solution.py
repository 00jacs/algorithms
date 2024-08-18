def countGoodNumbers(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        count = 1

        if n % 2 == 0:
            count *= pow(4, n//2, MOD)
            count *= pow(5, n//2, MOD)
            count %= MOD
        else:
            count *= pow(4, n//2, MOD)
            count *= pow(5, n//2 + 1, MOD)
            count %= MOD

        return count
