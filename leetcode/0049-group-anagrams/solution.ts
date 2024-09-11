function groupAnagrams(strs: string[]): string[][] {
  const m = new Map<string, string[]>();

  const sortString = (text: string): string => {
    return text.split("").sort().join("");
  };

  for (const str of strs) {
    const sortedString = sortString(str);

    if (m.has(sortedString)) {
      m.get(sortedString).push(str);
    } else {
      m.set(sortedString, [str]);
    }

    // console.log('sorted string: ', sortedString);
    // console.log('after: ', m.get(sortedString));
  }

  const ans = [];
  for (const value of m.values()) {
    //console.log('value: ', value);
    ans.push(value);
  }

  return ans;
}
