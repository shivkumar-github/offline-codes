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
	char sc;
	string s;
	cin >> n >> sc >> s;

	int i = 0, j = 0;
	while(1){
		while(i<n && s[i]!=sc)
			i++;
		if(i==n)
			break;
		j = i;
		while(s[j]!='g'){
			j++;
			if(j==n)
				j = 0;
		}

		ans = max(ans, (i <= j) ? (j - i) : (n - i + j));

		if(i>j)
			break;
		i = j+1;
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