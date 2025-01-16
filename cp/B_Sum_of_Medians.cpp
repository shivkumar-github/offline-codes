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
	int n, k;
	cin >> n >> k;
	ll N = n * k;
	vi v(N+1);
	rep(i, 1, N) cin >> v[i];
	int ind = ((n + 2) / 2), cnt = 0;
	ll sum = 0;
	N++;
	while(k--){
		N -= (ind);
		sum += v[N];
	}
	cout << sum << "\n";
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