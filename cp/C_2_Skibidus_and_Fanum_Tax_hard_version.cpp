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

ll findDecInd(ll ai, ll aimn1, vll &b)
{
	auto itr = lower_bound(b.begin(), b.end(), ai + aimn1);
	if (itr == b.end())
		return -1;
	else
		return itr - b.begin();
}

void solve()
{
	ll n, m;
	cin >> n >> m;
	vll a(n), b(m);
	fr(i,n) cin >> a[i];
	fr(i,m) cin >> b[i];
	srt(b);

	if (a[0] > b[0] - a[0])
		a[0] = b[0] - a[0];

	rep(i, 1, n-1)
	{
		ll j = findDecInd(a[i], a[i - 1], b);

		if (j!= -1 && b[j] - a[i] < a[i] && b[j] - a[i] >= a[i - 1])
			a[i] = b[j] - a[i];
		else if (j != -1 && a[i] < a[i - 1] && b[j] - a[i] >= a[i - 1])
			a[i] = b[j] - a[i];

		else if (a[i] < a[i - 1])
		{
			cout << "NO\n";
			return;
		}
	}
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