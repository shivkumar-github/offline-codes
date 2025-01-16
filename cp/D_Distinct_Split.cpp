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
	int n, ans = 0;
	cin >> n;
	string s;
	cin >> s;
	vi freq(26), tfreq(26);
	fr(i, n) ++tfreq[s[i] - 'a'];

	for (int i = 0; i < n - 1;++i){
		int cr = 0;
		++freq[s[i] - 'a'];
		for (int j = 0; j < 26;++j){
			if(freq[j]>=1) cr++;
			if(tfreq[j]-freq[j]>=1) cr++;
		}
		ans = max(ans, cr);
	}

	cout << ans << "\n";
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