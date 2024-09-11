// In JavaScript, in this case, we need to operate on BIGInts!
// This is the only tricky part of the problem (compared to `solution.py` and `solution.cpp`)
function countGoodNumbers(n) {
  // The modulo given in problem statement
  const MOD = BigInt(10 ** 9 + 7);
  n = BigInt(n);

  if (n === 1n) {
    return 5;
  }

  function binaryPower(base, exp) {
    if (exp === 0n) return 1n;

    if (exp % 2n === 0n) {
      const half = binaryPower(base, exp / 2n);
      return (half * half) % MOD;
    } else {
      return (base * binaryPower(base, exp - 1n)) % MOD;
    }
  }

  return Number(
    (binaryPower(4n, n / 2n) * binaryPower(5n, (n + 1n) / 2n)) % MOD,
  );
}
