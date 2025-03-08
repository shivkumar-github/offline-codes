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
	ll n;
	cin>>n;
	vll a(n);
	fr(i, n) cin >> a[i];
	vll lsmcnt(n, 0);
	// ll l = 0;
	// rep(i,0,n-1){
	// 	rep(j, i + 1, n - 1) if (a[j] < a[i]) lsmcnt[i]++;
	// 	if((lsmcnt[i] == lsmcnt[l] && a[i] > a[l]) || lsmcnt[i] > lsmcnt[l]) l = i;
	// }
	ll l;
	ll respfx = 0, resr=0, resl =0;
	for (l = 0; l < n;++l)
	{
		ll crpfx = 0;
		for (int i = l + 1; i < n; ++i)
		{
			if(a[i]<a[l]) {
				crpfx++;
				if(crpfx>respfx) {
					resl = l;
					resr = i;
					respfx = crpfx;
				}
			}
			else if(a[i] > a[l]) crpfx--;
		}
	}
	cout << resl + 1 << " " << (resr + 1) << nl;
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