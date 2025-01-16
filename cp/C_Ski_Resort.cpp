#include "bits/stdc++.h"
using namespace std;
#define ll long long
#define int long long int
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

void solve()
{
	int n, k, q, t, len = 0;
	int res = 0;
	cin >> n >> k >> q;
	fr(i, n)
	{
		cin >> t;
		if (t <= q) len++;
		else
		{
			if (len >= k) res += ((len - k + 1) * (len - k + 2)) / 2;
			len = 0;
		}
	}
	if (len >= k) res += ((len - k + 1) * (len - k + 2)) / 2;
	cout << res << "\n";
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
		solve();
	}
	return 0;
}