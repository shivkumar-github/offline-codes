//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution
{
public:
	vector<int> maxCombinations(int N, int K, vector<int> &A, vector<int> &B)
	{
		vector<int> ans;
		sort(A.begin(), A.end());
		sort(B.begin(), B.end());
		int ia = N - 1, ib = N - 1;
		while (ib >= 0)
		{
			while (ia >= 0)
			{
				ans.push_back(A[ia] + B[ib]);
				if (ans.size() == K)
					return ans;
				int lower = A[ia - 1] + B[ib];
				int ob = 1;
				while (A[ia] + B[ib - ob] >= lower)
				{
					ans.push_back(A[ia] + B[ib - ob]);
					if (ans.size() == K)
						return ans;
				}
				ia--;
			}
			ib--;
		}
		return ans;
	}
};

//{ Driver Code Starts.

int main()
{
	int t;
	cin >> t;
	while (t--)
	{
		int N, K;
		cin >> N >> K;

		vector<int> A(N), B(N);
		for (int i = 0; i < N; i++)
		{
			cin >> A[i];
		}
		for (int i = 0; i < N; i++)
		{
			cin >> B[i];
		}
		Solution obj;
		vector<int> ans = obj.maxCombinations(N, K, A, B);
		cout << "printing answer";
		for (auto &it : ans)
			cout << it << ' ';
		cout << endl;
	}
	return 0;
}
// } Driver Code Ends