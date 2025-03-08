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

void solve(){
	ll n, k;
	cin >> n >> k;
	vll a(n+1), b(n+1);
	rep(i,1,n) cin >> a[i];
	rep(i,1,n) cin >> b[i];
	ll elSum = 0, mxScore = 0, mxSecScore = 0;
	rep(k1,1,min(k,n)) {
		mxSecScore = max(mxSecScore, b[k1]);
		elSum += a[k1];
		mxScore = max(mxScore, elSum + (k - k1) * mxSecScore);
	}
	cout << mxScore << nl;
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