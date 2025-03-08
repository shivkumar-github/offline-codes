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

ll dist(const pair<ll, ll>& a, const pair<ll, ll>& b) {
	return abs(a.first-b.first) + abs(a.second - b.second);
}

void solve(){
	ll n, k, a, b;
	cin >> n >> k >> a >> b;
	vector<pair<ll, ll>> v(n+1);
	rep(i, 1, n) cin >> v[i].first >> v[i].second;
	ll directDist = dist(v[a], v[b]);
	if(k<2) {
		cout << directDist << nl;
		return;
	}
	ll cma = 1, cmb = 1;
	rep(i,1,k) {
		if(dist(v[a], v[i])< dist(v[a], v[cma])) {
			cma = i;
		}
		if(dist(v[b], v[i])< dist(v[b], v[cmb])) {
			cmb = i;
		}
	}
	ll majorDist = dist(v[a], v[cma]) + dist(v[b], v[cmb]);
	cout << min(directDist, majorDist) << nl;
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