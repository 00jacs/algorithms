// This is an iterative version of binary_power function (with modulo)
// based on this resource: https://cp-algorithms.com/algebra/binary-exp.html
// which I highly recommend - great learning materials
int binary_power(long long base, long long exp, int mod) {
    base %= mod;
    long long res = 1;

    while (exp > 0) {
        // if exponent is odd
        if (exp & 1) {
            res = res * base % mod;
        }

        // x -> x^2
        // x^2 -> x^4
        // until we have the result that we want
        base = base * base % mod;

        // Divides the number by 2
        exp >>= 1;
    }

    return res;
}

// Think of it as a simple combinatorics problem
int countGoodNumbers(long long n) {
    // The modulo given in problem statement
    const int MOD = 1e9 + 7;

    // Just handle the special case here
    if (n == 1) {
        return 5;
    }

    // For "n" digits, we have "n/2" digits at even indices
    long long res = binary_power(4, n/2, MOD);

    // If "n" is even, we have "n/2" digits at odd indices (prime digits)
    if (n % 2 == 0) {
        res *= binary_power(5, n/2, MOD) % MOD;
        res %= MOD;
    } else {
        // If "n" is odd, we have "n/2 + 1" digits at odd indices (prime digits)
        res *= binary_power(5, n/2 + 1, MOD) % MOD;
        res %= MOD;
    }

    return res;
}
