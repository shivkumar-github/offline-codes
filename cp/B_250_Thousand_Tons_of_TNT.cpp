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
	ll n, sum = 0;
	cin>>n;
	vll pfx;
	pfx.pb(0);
	fr(i,n){
		ll t;
		cin >> t;
		sum += t;
		pfx.pb(sum);
	}
	
	ll mxDiff = 0;
	rep(groups, 1, n){
		if(n%groups) continue;
		ll k = n/groups, mxSum, mnSum;
		mxSum = mnSum = pfx[k];
		for (ll i = k; i <= n;i+=k) {
			mxSum = max(mxSum, pfx[i] - pfx[i - k]);
			mnSum = min(mnSum, pfx[i] - pfx[i - k]);
		}
		mxDiff = max(mxDiff, mxSum - mnSum);
	}

	cout << mxDiff << nl;
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