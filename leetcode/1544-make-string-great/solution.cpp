string makeGood(string s) {
    vector<char> stack;

    for (int i = 0; i < s.size(); i++) {
        if (stack.size() && ((
                s[i] == toupper(s[i]) &&
                stack.back() == tolower(stack.back()) &&
                tolower(s[i]) == stack.back()
            ) || (
                s[i] == tolower(s[i]) &&
                stack.back() == toupper(stack.back()) &&
                toupper(s[i]) == stack.back()
            )
        )) {
            stack.pop_back();
        } else {
            stack.push_back(s[i]);
        }
    }

    string ans = "";

    for (int i = 0; i < stack.size(); i++)
        ans += stack[i];

    return ans;
}
