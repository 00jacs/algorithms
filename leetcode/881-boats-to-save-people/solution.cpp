int numRescueBoats(vector<int>& people, int limit) {
    sort(people.begin(), people.end());

    int boats = 0;

    int light = 0;
    int heavy = people.size() - 1;

    while (light < heavy) {
        if (people[light] + people[heavy] <= limit) {
            light++;
            heavy--;
        } else {
            heavy--;
        }

        boats++;
    }

    if (light == heavy) boats++;

    return boats;
}