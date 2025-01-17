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

void solve()
{
	ll n;
	cin >> n;
	vll aval(n), req(n);
	for (auto &x : aval)
		cin >> x;
	for (auto &y : req)
		cin >> y;
	ll minExtra = 1e11, debtCnt = 0, debt = 0;
	fr(i, n)
	{
		ll dif = aval[i] - req[i];
		if (dif >= 0)
		{
			if (dif < minExtra)
				minExtra = dif;
		}
		else
		{
			debt -= dif;
			debtCnt++;
			if (debtCnt > 1)
			{
				cout << "NO\n";
				return;
			}
		}
	}
	if (debt > minExtra)
		cout << "NO\n";
	else
		cout << "YES\n";
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