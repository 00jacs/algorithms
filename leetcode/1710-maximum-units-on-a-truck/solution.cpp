int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
    vector<pair<int, int>> boxes;

    for (int i = 0; i < boxTypes.size(); i++) {
        boxes.push_back(make_pair(boxTypes[i][1], boxTypes[i][0]));
    }

    sort(boxes.begin(), boxes.end(), greater<pair<int, int>>());

    int units = 0;
    int i = 0;
    while (truckSize > 0 && i < boxes.size()) {
        if (boxes[i].second >= truckSize) {
            units += truckSize * boxes[i].first;
            truckSize = 0;
            break;
        }

        if (boxes[i].second < truckSize) {
            units += boxes[i].second * boxes[i].first;
            truckSize -= boxes[i].second;
        }

        i++;
    }

    return units;
}