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
#define pb push_back

void solve()
{
	ll n;
	cin >> n;
	vll a(n), a1(n);
	fr(i, n) cin >> a[i];
	fr(i, n) cin >> a1[i];
	int i = 0, j = 1;
	int l = 0, r = 0;
	while (j < n)
	{
		while (j < n && a1[j] >= a1[j - 1])
		{
			++j;
		}
		int bl = 0; // first thing that matters is differentiability as they have given that atleast one part will be different 
		// we will find all increasing subarrays and check if they have any non equal elements if yes then i.e our answer no matter what it's length is 
		
		for (int k = i; k < j; ++k)
		{
			if (a[k] != a1[k])
			{
				bl = 1;
				break;
			}
		}
		if (bl)
		{
			r = j - 1;
			l = i;
		}
		i = j;
		++j;
	}
	cout << l + 1 << " " << r + 1 << nl;
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