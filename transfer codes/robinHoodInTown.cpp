/*

*/

#include <bits/stdc++.h>
using namespace std;

#define lli long long int

int main()
{
	lli T;
	cin >> T;
	while (T--)
	{
		lli n, s = 0;
		cin >> n;
		vector<lli> v;
		while (n--)
		{
			lli t;
			cin >> t;
			v.push_back(t);
			s += t;
		}
		cout << endl;
		n = v.size();
		if (n <= 2)
		{
			cout << -1 << endl;
			continue;
		}
		sort(v.begin(), v.end());
		lli x;
		lli min = n * 2 * v[n / 2] - s;
		x = min + 1;
		cout << ((x > 0) ? x : 0) << endl;
	}
	return 0;
}