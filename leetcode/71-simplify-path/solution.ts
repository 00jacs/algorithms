function simplifyPath(path: string): string {
  const pathSplit: string[] = path.replace("//", "/").split("/");

  const pathStack: string[] = [];
  for (let i = 1; i < pathSplit.length; i++) {
    const dir = pathSplit[i];

    if (dir == "..") {
      pathStack.length && pathStack.pop();
    } else if (dir.length && dir != ".") {
      pathStack.push(dir);
    }
  }

  return "/" + pathStack.join("/");
}
