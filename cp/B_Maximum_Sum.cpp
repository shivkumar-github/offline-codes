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
#define pb push_back

void solve()
{
	ll n, k;
	cin >> n >> k;
	vll a(n), pf(n);
	rep(i, 0, n - 1) cin >> a[i];
	srt(a);

	pf[0] = a[0];
	rep(i, 1, n - 1) pf[i] = pf[i - 1] + a[i];
	ll maxSum = pf[n - k - 1];
	for (int k1 = 1; k1 <= k; ++k1)
	{
		ll crSum = pf[n - k + k1 - 1] - pf[2 * k1 - 1] ;
		maxSum = max(maxSum, crSum);
	}

	cout << maxSum << nl;
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