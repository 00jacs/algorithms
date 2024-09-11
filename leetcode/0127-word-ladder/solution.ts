function getAllStringMutations(
  str: string,
  wordListSet: Set<string>
): string[] {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  const mutations: string[] = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] == alphabet[j]) continue;

      const mutation = str.slice(0, i) + alphabet[j] + str.slice(i + 1);

      if (wordListSet.has(mutation)) {
        mutations.push(mutation);
      }
    }
  }

  return mutations;
}

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  // Key observations:
  // 1) only letters of the english lowercase alphabet
  // 2) word length is lower than 10

  const wordListSet = new Set<string>(wordList);
  const visited = new Set<string>();

  let queue: string[] = [beginWord];
  let steps = 0;
  visited.add(beginWord);

  while (queue.length) {
    steps++;
    const nextQueue: string[] = [];

    for (let i = 0; i < queue.length; i++) {
      const word = queue[i];
      const neighbours = getAllStringMutations(word, wordListSet);

      for (let j = 0; j < neighbours.length; j++) {
        if (neighbours[j] === endWord) {
          return steps + 1;
        }

        if (!visited.has(neighbours[j])) {
          visited.add(neighbours[j]);
          nextQueue.push(neighbours[j]);
        }
      }
    }

    queue = nextQueue;
  }

  return 0;
}
