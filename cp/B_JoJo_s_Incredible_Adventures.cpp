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
	string s;
	cin >> s;
	ll mxl = 0, n = s.size();
	if(count(all(s), '1') == s.size()) {
		cout << sz(s) * sz(s) << nl;
		return;
	}
	ll i = (s.find('0')+1)%n;
	ll j = i, mxlen = 0;
	while(j != i) {
		while(s[i%n] == '0')
			++i;
		j = i + 1;
		while(s[j%n] == '1')
			++j;
		ll len;
		if(j>=i)
			len = j - i;
		else
			len = (n - i) + j+1;
		mxlen = max(mxlen, len);
		i = j;
	}
	ll mxar = 0;
	for (ll i = 1; i <= (mxlen + 1) / 2; ++i) {
		mxar = max(mxar, i * (mxlen - i + 1));
	}
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