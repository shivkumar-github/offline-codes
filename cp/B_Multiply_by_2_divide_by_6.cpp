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
	ll n, twos = 0, threes = 0;
	cin >> n;
	while (1)
	{
		if (n % 2 == 0)
		{
			n /= 2;
			twos++;
		}
		else
			break;
	}
	while (1)
	{
		if (n % 3 == 0)
		{
			n /= 3;
			threes++;
		}
		else
			break;
	}
	if(threes<twos || n!=1)
		cout << -1 << "\n";
	else
		cout << 2*threes - twos << "\n";
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