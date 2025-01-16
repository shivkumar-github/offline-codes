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
	string s;
	cin >> s;
	int n = s.size(), zc = count(all(s), '0'), oc = count(all(s), '1');
	for (int i = 0; i < s.size(); i++)
	{
		if (s[i] == '1')
		{
			if (zc == 0) break;
			zc--;
		}
		else
		{
			if (oc == 0) break;
			oc--;
		}
		n--;
	}
	cout << n << "\n";
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