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
	ll n, m, b;
	cin >> n >> m;
	vll a(n + 1);
	rep(i, 1, n) cin >> a[i];
	cin >> b;
	if(a[1]>b-a[1])
		a[1] = b - a[1];
	rep(i,2,n){
		if(b-a[i]<a[i] && b-a[i]>=a[i-1])
			a[i] = b - a[i];
		else if (a[i]<a[i-1] && b-a[i]>=a[i-1]) 
			a[i] = b - a[i];
		else if(a[i]<a[i-1]){
			cout << "NO\n";
			return;
		}
	}
	cout << "YES\n";
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