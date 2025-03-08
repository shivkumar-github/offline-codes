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
#define pb push_back

void solve()
{
	ll n;
	cin >> n;
	string s;
	cin >> s;
	ll nl = count(all(s), '_'), nu = count(all(s), '-');
	if(nu < 2 || nl < 1) {
		cout << "0\n";
		return;
	}
	cout << ((nu / 2) * nl * ((nu + 1)/2)) << "\n";
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