#include "bits/stdc++.h"
using namespace std;
#define nl "\n"
#define ll long long
#define lli long long int
#define ull unsigned long long
#define vi vector<int>
#define vvi vector<vi >
#define vll vector<long long>
#define vb vector<bool>
#define fr(i,n) for(int i=0; i<(n); i++)
#define rep(i,a,n) for(int i=(a); i<=(n); i++)
#define all(v) v.begin(),v.end()
#define sz(v) (int)(v.size())
#define srt(v)  sort(v.begin(),v.end()) 
#define pb push_back

void solve(){
	ll n, x;
	cin>>n >> x;
	vector<ll>v(n);
	ll res = 0;
	rep(i,0,2) {
		rep(k, 0, n - 1) cin >> v[k];
		rep(k, 0, n - 1) {
			if((x | v[k]) != x) break;
			res |= v[k];
		}
	}
	cout << ((res == x) ? "YES" : "NO") << nl;
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