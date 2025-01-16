#include "bits/stdc++.h"
using namespace std;
#define ll long long
#define lli long long int
#define ull unsigned long long
#define vi vector<int>
#define vvi vector<vi>
#define vll vector<long long>
#define vb vector<bool>
#define fr(i, n) for (int i = 0; i < (n); i++)
#define rep(i, a, n) for (int i = (a); i <= (n); i++)
#define all(v) v.begin(), v.end()
#define sz(v) (int)(v.size())
#define srt(v) sort(v.begin(), v.end())

int solve()
{
	int n, k;
	cin >> n >> k;
	vi v(n + 1);
	rep(i, 1, n) cin >> v[i];
	if (k != 4)
	{
		int minOps = INT_MAX;
		rep(i, 1, n)
		{
			if (v[i] % k == 0)
				return 0;
			minOps = min(minOps, k - (v[i] % k));
		}
		return minOps;
	}
	else
	{
		int evenCnt = 0, ans = 2;
		rep(i, 1, n)
		{
			if (v[i] % 2 == 0)
				evenCnt++;
			if (v[i] % k == 0 || evenCnt == 2)
				return 0;
			if (v[i] % k == 3 || evenCnt == 1)
				ans = 1;
		}
		return ans;
	}
}

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int T = 1;
	cin >> T;
	while (T--)
	{
		cout << solve() << "\n";
	}
	return 0;
}