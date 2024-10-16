#include <bits/stdc++.h>
using namespace std;

#define lli long long int

int main()
{
	vector<double> v;
	double n, l;
	cin >> n >> l;
	while (n--)
	{
		double t;
		cin >> t;
		v.push_back(t);
	}
	sort(v.begin(), v.end());
	double mx = -1;
	for (int i = 0; i < v.size() - 1; i++)
		if (v[i + 1] - v[i] > mx)
			mx = v[i + 1] - v[i];
	if (mx / 2 < v[0] - 0)
		mx = 2 * (v[0] - 0);
	if (mx / 2 < l - v[v.size() - 1])
		mx = 2 * (l - v[v.size() - 1]);
	cout << setprecision(9)<<(mx / 2) << endl;
	return 0;
}