#include "bits/stdc++.h"
using namespace std;
#define int long long
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
	int n, beauty = 0,a2Mn = 1e10, a1Mn = 1e10;
	cin >> n;
	while(n--) {
		int m;
		cin >> m;
		vi v(m);
		fr(i, m) cin >> v[i];

		int cr1Mn = *min_element(all(v));
		v.erase(find(all(v), cr1Mn));
		int cr2Mn = *min_element(all(v));
		
		beauty += cr2Mn;
		if(cr1Mn<a1Mn) a1Mn = cr1Mn;
		if(cr2Mn<a2Mn) a2Mn = cr2Mn;
	}

	cout << (beauty - a2Mn + a1Mn) << "\n";
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