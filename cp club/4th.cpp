#include <bits/stdc++.h>
using namespace std;
int main()
{
	int T;
	cin >> T;
	while (T--)
	{
		int n;
		int ys[] = {0, 0, 0};
		int nys[] = {0, 0, 0};
		cin >> n;
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < n; j++)
			{
				int t;
				cin >> t;
				if ((((i == j) || (i + j == n - 1)) && i <= n / 2) || (j == n / 2 && i >= n / 2))
					ys[t]++;
				else
					nys[t]++;
			}
		}
		int ans[3] = {0, 0, 0};
		for (int i = 0; i < 3; i++)
		{
			for (int j = 0; j < 3; j++)
				if (j != i)
					ans[i] += ys[i];
			int nymx;
			int mx = -1;
			for (int j = 0; j < 3; j++)
			{
				if (j != i && nys[j] > mx)
				{
					mx = nys[j];
					nymx = j;
				}
			}
			for (int j = 0; j < 3; j++)
				if (j != nymx)
					ans[i] += nys[j];
		}
		cout << min(ans[0], min(ans[1], ans[2])) << endl;
	}
	return 0;
}