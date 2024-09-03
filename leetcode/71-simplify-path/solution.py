def simplifyPath(self, path: str) -> str:
    path = path.replace('//', '/')
    path_dirs = path.split('/')
    path_stack = []

    for i, _dir in enumerate(path_dirs):
        if _dir == '..':
            if len(path_stack):
                path_stack.pop()
        elif len(_dir) and _dir != '.':
            path_stack.append(_dir)

    return '/' + '/'.join(path_stack)
