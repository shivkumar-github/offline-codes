//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// 845
// 638 414 105 0 325 315 209 24 68 409 611

// } Driver Code Ends
class Solution {
  public:
  
    int util(vector<int>& coins, unordered_map<int, int>& dp, int sum){
		if (sum == 0)
			return 0;

        int min_res = INT_MAX;
        
        for(int i = 0;i<coins.size();i++){
            if(coins[i]<=sum && coins[i]!=0){
                int rem_sum = sum-coins[i];
                
                if(dp.find(rem_sum) == dp.end()) {
                    int res = util(coins, dp, rem_sum);
                    if(res != -1)
                        dp[rem_sum] = 1+res;
                    else 
                        dp[rem_sum] = -1;
                }
                
                if(dp[rem_sum] != -1)
                    min_res = min(min_res, dp[rem_sum]);
            }
        }
        return min_res!=INT_MAX?min_res:-1; 
    }
    
    int minCoins(vector<int> &coins, int sum) {
        unordered_map<int, int> dp;// dp array to store ans of overlapping subproblems
        return util(coins, dp, sum);
    }
};

//{ Driver Code Starts.

int main() {
    // string ts;
    // getline(cin, ts);
    // int t = stoi(ts);
	int t = 1;
	while (t--)
	{
		string ks;
        getline(cin, ks);
        int k = stoi(ks);
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        Solution obj;
        int res = obj.minCoins(arr, k);
        cout << res << endl;
        cout << "~" << endl;
	}
	return 0;
}

// } Driver Code Ends