#include "bits/stdc++.h"
using namespace std;
#define endl "\n"
#define int long long
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

void solve()
{
	int n;
	cin >> n;
	vi v(n + 1);
	rep(i, 1, n) cin >> v[i];
	rep(i, 1, n)
	{
		if (2 * (i-1) >= min(v[i], v[1]) || 2 * (n - i) >= min(v[i], v[n]))
		{
			cout << "NO" << endl;
			return;
		}
	}
	cout << "YES" << endl;
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