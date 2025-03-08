#include "bits/stdc++.h"
using namespace std;
#define nl "\n"
#define ll long long
#define lli long long int
#define ull unsigned long long
#define vi vector<int>
#define vvi vector<vi>
#define vll vector<long long>
#define vb vector<bool>
#define fr(i, n) for (int i = 0; i < (n); i++)
#define rep(i, a, n) for (int i = (a); i <= (n); i++)
#define all(v) v.begin(), v.end()
#define sz(v) (int)(v.size())
#define srt(v) sort(v.begin(), v.end())

void solve(){
	ll n;
	cin >> n;
	for (int k = 0; k <= 9;++k)
	{
		string s = to_string(n - k);
		int mnOps = 7;
		for(char c:s){
			if(c <= '7') // as if numbers are greater than 7 we will always have a leading 0 which we can convert to 7 in 7(which is lesser for any c>7 '8', '9')
				mnOps = min(mnOps, '7'-c);
		}
		if(k >= mnOps) {
			cout << k << nl;
			return;
		}
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