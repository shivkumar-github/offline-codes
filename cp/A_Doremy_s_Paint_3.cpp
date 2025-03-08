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
	unordered_map<ll, ll> mp;
	fr(i, n) mp[a[i]]++;
	if(mp.size()>2) {
		cout << "NO\n";
		return;
	}
	if(mp.size()==1){
		cout << "YES\n";
		return;
	}
	auto bgn = mp.begin();
	ll f = bgn->second;
	bgn++;
	ll s = bgn->second;
	if (((n & 1) && abs(s-f) == 1) || ((!(n&1)) && abs(s-f) == 0))
		cout << "YES\n";
	else cout << "NO\n";
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