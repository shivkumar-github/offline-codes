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
	ll n, m;
	cin >> n >> m;
	vector<vll> grid(n, vll(m));
	fr(i, n)
	{
		fr(j, m) { cin >> grid[i][j]; }
	}

	vll pfxsms(n);
	fr(i, n)
	{
		ll sum = 0, psum = 0;
		// fr(j, m)
		// {
		// 	sum += grid[i][j] + psum;
		// 	psum += grid[i][j];
		// }
		pfxsms[i] = accumulate(grid[i].begin(), grid[i].end(),0);
	}
	vll indices(n);
	iota(indices.begin(), indices.end(), 0);
	sort(all(indices), [&](const ll &a, const ll &b)
		 { return pfxsms[a] > pfxsms[b]; });
	vll finalv;
	fr(i, n)
	{
		ll row = indices[i];
		finalv.insert(finalv.end(), grid[row].begin(), grid[row].end());
	}
	
	ll sum = 0, psum = 0;
	fr(i, n * m)
	{
		sum += finalv[i] + psum;
		psum += finalv[i];
	}
	cout << sum << nl;
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