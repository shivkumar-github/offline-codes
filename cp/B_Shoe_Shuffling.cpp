#include "bits/stdc++.h"
using namespace std;
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
	int n;
	cin>>n;
	vi v(n);
	fr(i, n) cin >> v[i];
	int l = 0, r;
	while (l<n){
		r = l;
		while(r<n-1 && v[r+1]==v[l]) r++;
		if (l == r)
		{
			cout << -1 << "\n";
			return;
		}	
		rep(k,l,r-1){
			v[k] = k + 2;
		}
		v[r] = l+1;
		l = r + 1;
	}
	fr(i, n) cout << v[i] << " ";
	cout << "\n";
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