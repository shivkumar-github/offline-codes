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

void solve(){
	int n;
	cin>>n;
	vector<string> g(n+1);
	vector<int> v(n + 1);
	fr(i, n) cin >> g[i+1];
	int pind = 0;
	for (int i = n; i >= 1; i--)
	{
		int cnt = count(g[i].begin(), g[i].begin() + i, '1');
		int smaller = 0;
		for (int j = 1; j <= n; j++)
		{
			if(v[j]<i)
				smaller++;
			if(smaller>cnt){
				v[j] = i;
				break;
			}
		}
	}
	rep(i, 1, n) cout << v[i] << " ";
	cout << endl;
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