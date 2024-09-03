def makeGood(self, s: str) -> str:
    stack = []

    def is_upper_version(a: str, b: str) -> bool:
        if len(a) != 1 or len(b) != 1:
            raise ValueError("Both inputs must be single characters.")

        return (a == b.upper() and b == a.lower()) or (b == a.upper() and a == b.lower())

    for i in range(len(s)):
        if len(stack) and is_upper_version(stack[len(stack) - 1], s[i]):
            stack.pop()
        else:
            stack.append(s[i])

    return "".join(stack)
