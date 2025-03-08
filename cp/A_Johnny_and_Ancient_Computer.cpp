#include "bits/stdc++.h"
using namespace std;
#define endl "\n"
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

ll solve(){
	ll a, b;
	cin >> a >> b;
	if(a<b) swap(a, b);
	ll r2 = a / b;
	if(a%b) return -1;
	ll ops = 0, minOps = 0;
	while(r2 && (!(r2&1))){
		r2 = r2 >> 1;
		ops++;
	}
	if(r2 != 1) return -1;
	minOps += ops / 3;
	ops -= (ops/3)*3;
	
	minOps += bool(ops);
	return minOps;
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
		cout << solve() << endl;
	}
	return 0;
}