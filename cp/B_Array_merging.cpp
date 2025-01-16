#include "bits/stdc++.h"
using namespace std;
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

void solve()
{
	int n;
	cin >> n;
	vector<int> fr1(n+n+1), fr2(n+n+1); 
	int prv, crLen = 1;
	int t;
	cin >> prv;
	fr(i, n - 1)
	{
		cin >> t;
		if (t == prv) crLen++;
		else
		{
			fr1[prv] = max(fr1[prv], crLen);
			prv = t;
			crLen = 1;
		}
	}
	fr1[prv] = max(fr1[prv], crLen);

	cin >> prv;
	crLen = 1;
	fr(i, n - 1)
	{
		cin >> t;
		if (t == prv) crLen++;
		else
		{
			fr2[prv] = max(fr2[prv], crLen);
			prv = t;
			crLen = 1;
		}
	}
	fr2[prv] = max(fr2[prv], crLen);

	int mxLen = 0;
	fr(i,n+n+1){
		mxLen = max(mxLen, fr1[i] + fr2[i]);
	}
	cout << mxLen << "\n";
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