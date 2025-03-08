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

bool check(ll mid, vll& a, ll x) {
	ll cst = 0;
	rep(i,1,a.size()-1) {
		if(a[i]>=mid) return cst <= x;
		cst += mid - a[i];
	}
	return cst <= x;
}

void solve(){
	ll n, x;
	cin>>n >> x;
	vll a(n + 1);
	rep(i, 1, n) cin >> a[i];
	srt(a);
	int start = 1, end = x+a[1], ans = 1;
	while(start <= end) {
		ll mid = start + (end - start) / 2;
		if(check(mid, a, x)) {
			ans = mid;
			start = mid + 1;
		}
		else end = mid - 1;
	}
	cout << ans << nl;
}
// this code can further be optimised (but with same worst case time complexity) by crcost = nxtCost - (a[i+1] - a[i])*i; and when crcost becomes lesser than x then the answer exists between a[i], and a[i+1]; and then apply binary search for this

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