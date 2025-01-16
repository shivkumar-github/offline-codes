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

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int T = 1;
	cin >> T;
	while (T--)
	{
		ll n;
		cin >> n;
		cout << ((n & (n - 1) ? "YES" : "NO")) << "\n";
	}
	return 0;
}