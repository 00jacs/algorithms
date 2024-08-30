function minimumCardPickup(cards: number[]): number {
  const m = new Map<number, number>();

  let ans = Infinity;

  for (let i = 0; i < cards.length; i++) {
    if (m.has(cards[i])) {
      ans = Math.min(ans, i - m.get(cards[i]) + 1);
    }

    m.set(cards[i], i);
  }

  return ans == Infinity ? -1 : ans;
}
