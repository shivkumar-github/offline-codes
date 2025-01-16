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

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int t;
	cin >> t;
	while (t--)
	{
		int n, k;
		cin >> n >> k;
		vector<int> v(n), ord(n);
		for (auto &x : v)
		{
			cin >> x;
			x %= k;
			if (!x) x = k;
		}
		iota(all(ord), 0);
		stable_sort(all(ord), [&](int a, int b) { return v[a] > v[b]; });
		for (auto it : ord) cout << it + 1 << " ";
		cout << "\n";
	}
	return 0;
}