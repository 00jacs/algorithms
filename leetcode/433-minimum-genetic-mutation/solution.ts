function getAllValidMutations(gene: string, bankSet: Set<string>) {
  const mutations: string[] = [];
  const letters = ['A', 'C', 'G', 'T'];

  for (let i = 0; i < gene.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (gene[i] == letters[j]) continue;

      const newMutation = gene.slice(0, i) + letters[j] + gene.slice(i + 1);

      if (bankSet.has(newMutation)) {
        mutations.push(newMutation);
      }
    }
  }

  return mutations;
}

function minMutation(
  startGene: string,
  endGene: string,
  bank: string[]
): number {
  if (!bank.includes(endGene)) {
    return -1;
  }

  const bankSet = new Set<string>(bank);
  const seen = new Set<string>();

  let queue: string[] = [startGene];
  seen.add(startGene);
  let steps = 0;

  while (queue.length) {
    const nextQueue: string[] = [];
    steps++;

    for (let i = 0; i < queue.length; i++) {
      const mutations = getAllValidMutations(queue[i], bankSet);

      for (const mutation of mutations) {
        if (mutation == endGene) {
          return steps;
        }

        if (!seen.has(mutation)) {
          seen.add(mutation);
          nextQueue.push(mutation);
        }
      }
    }

    queue = nextQueue;
  }

  return -1;
}
