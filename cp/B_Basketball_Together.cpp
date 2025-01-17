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
	int n,d;
	cin>>n >> d;
	vi v(n);
	fr(i, n) cin >> v[i];
	srt(v);
	int rem = n, teams = 0;
	for (int i = n - 1; i >= 0 && rem>=0;i--){
		int req = (d + v[i])/v[i];
		if(rem<req) break;
		rem -= req;
		teams++;
	}
	cout << teams << "\n";
}

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	solve();
	return 0;
}