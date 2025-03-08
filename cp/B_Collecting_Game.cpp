#include "bits/stdc++.h"
using namespace std;
#define nl "\n"
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
	ll n;
	cin >> n;
	vector<pair<ll, ll>> v(n);
	fr(i, n)
	{
		cin >> v[i].first;
		v[i].second = i;
	}
	srt(v);
	vll pfx(n);
	pfx[0] = v[0].first;
	rep(i, 1, n - 1) pfx[i] = pfx[i - 1] + v[i].first;
	int stop = n - 1;
	vll tans(n);
	tans[n - 1] = stop;
	for (int i = n - 2; i >= 0;--i){
		if(pfx[i]<v[i+1].first) stop = i;
		tans[i] = stop;
	}
	vll ans(n);
	fr(i, n) ans[v[i].second] = tans[i];
	fr(i, n) cout << ans[i] << " ";
	cout << nl;
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