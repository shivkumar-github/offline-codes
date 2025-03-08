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
	ll n;
	cin >> n;
	vll a(n + 1);
	unordered_map<int, int> ump;
	rep(i, 1, n) {
		cin >> a[i];
		ump[a[i]] ++ ;
	}
	ll len = 0, l, r;
	rep(i,1,n) {
		if(ump[a[i]] == 1) {
			ll j = i+1;
			while(j<=n && ump[a[j]] == 1) {
				j++;
			}
			ll newLen = j - i;
			if(newLen > len) {
				l = i;
				r = j-1;
				len = newLen;
			}
			i = j;
		}
	}
	if (len == 0)
		cout << 0 << nl;
	else
		cout << l << " " << r << nl;
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