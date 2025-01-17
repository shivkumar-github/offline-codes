#include "bits/stdc++.h"
using namespace std;
#define int long long
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
	int n, x;
	cin >> n >> x;
	vi v(n);
	fr(i, n) cin >> v[i];
	int mx = v[0], mn = v[0], changes = 0;
	fr(i,n){
		mx = max(mx, v[i]);
		mn = min(mn, v[i]);
		if(mx-mn>2*x){
			++changes;
			mx = mn = v[i];
		}
	}
	cout << changes << "\n";
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