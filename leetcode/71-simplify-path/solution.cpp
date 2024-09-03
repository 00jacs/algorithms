string simplifyPath(string path) {
    vector<string> path_stack;
    stringstream ss(path);
    string c;

    while (getline(ss, c, '/')) {
        if (c == "..") {
            if (!path_stack.empty()) {
                path_stack.pop_back();
            }
        } else if (c.size() != 0 && c != ".") {
            path_stack.push_back(c);
        }
    }

    string ans = "";
    for (string dir : path_stack) {
        ans += "/" + dir;
    }

    if (ans.size() == 0) {
        return "/";
    }

    return ans;
}
