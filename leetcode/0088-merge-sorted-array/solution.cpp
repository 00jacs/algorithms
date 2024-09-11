class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = 0;
        int j = 0;

        int last = 0;
        vector<int> result(n + m + 1, 0);

        while (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                result[last++] = nums1[i++];
            } else {
                result[last++] = nums2[j++];
            }
        }

        while (i < m) {
            result[last++] = nums1[i++];
        }

        while (j < n) {
            result[last++] = nums2[j++];
        }

        i = 0;
        while (i < n + m) {
            nums1[i] = result[i];
            i++;
        }
    }
};
