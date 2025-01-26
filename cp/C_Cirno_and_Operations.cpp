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
	vll v(n+1);
	rep(i, 1, n) cin >> v[i];
	ll now = n, ans = -1e18;
	rep(i, 1, n)
	{
		ll sum = 0;
		rep(i, 1, now) sum += v[i];
		if(i==1) ans = max(ans, sum);
		else ans = max(ans, max(sum, -1 * sum));
		rep(i, 1, now - 1) v[i] = v[i + 1] - v[i];
		now--;
	}
	cout << ans << endl;
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