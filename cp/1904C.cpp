#include "bits/stdc++.h"
using namespace std;
#define ll long long
#define int long long

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(0), cout.tie(0);
	int TC = 1;
	cin >> TC;
	while (TC--)
	{
		int n, k;
		cin >> n >> k;
		vector<int> a(n);
		for(int&x:a)
			cin >> x;
		if(k >= 3) {
			cout << 0 << '\n';
			continue;
		}
		sort(a.begin(), a.end());
		int d = a[0];
		for (int i = 0; i < n - 1; ++i) d = min(d, a[i + 1] - a[i]);
		if(k == 1) {
			cout << d << '\n';
			continue;
		}
		for (int i = 0; i < n; ++i) {
			for (int j = 0; j < i; ++j) {
				int v = a[i] - a[j];
				int p = lower_bound(a.begin(), a.end(), v) - a.begin();
				if(p < n) d = min(d, a[p] - v);
				if(p > 0) d = min(d, v - a[p-1]);
			}
		}
		cout << d << '\n';
	}
	return 0;
}