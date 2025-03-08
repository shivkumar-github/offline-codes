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
	int n;
	cin >> n;
	string s;
	cin >> s;
	fr(i, s.size()-1) {
		if(s[i+1]<s[i]) {
			cout << "YES\n" << i+1 << " " << i + 2 << nl;
			return;
		}
	}
	cout << "NO\n";
}

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int T = 1;
	while (T--)
	{
		solve();
	}
	return 0;
}