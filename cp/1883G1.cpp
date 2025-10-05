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
		int n, m;
		cin>>n>>m;
		vector<ll> a(n), b(n);
		a[0] = 1;
		for(int i = 1; i < n; ++i) cin >> a[i];
		bool already = true;
		for(int i = 0 ; i < n; ++i){ cin >> b[i]; if(a[i] >= b[i]) already = false;}
		int ops = 0;
		if(already) {
			cout << 0 << '\n';
			continue;
		}
		sort(a.begin(), a.end());
		sort(b.begin(), b.end());
		int i = 0, j = 0;
		while(j < n) {
			if(b[i] <= a[j]) ++i, --n, ++ops;
			else ++i, ++j;
		}
		cout << ops << '\n';
	}
	return 0;
}