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
	ll n, q;cin>>n >> q;vll a(n), x;fr(i,n) cin >> a[i];unordered_map<int, int> ump;
	
	fr(i, q){
		ll t;cin >> t;
		if(ump.find(t) == ump.end()){
			x.pb(t);
			ump[t] = 1;
		}
	}

	rep(i, 0, n-1) rep(j, 0, x.size()-1)
			if(a[i]%(1<<x[j]) == 0)
				a[i] += (1 << (x[j]-1));


	rep(i, 0, n - 1) cout << a[i] << " ";
	cout << nl;
}

int32_t main(){ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);int T = 1;cin >> T;while (T--){solve();}return 0;}


