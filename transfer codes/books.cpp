#include <bits/stdc++.h>
using namespace std;
#define lli long long int

int main()
{
	lli n, t;
	cin >> n >> t;
	vector<lli> arr;
	while (n--)
	{
		lli tk;
		cin >> tk;
		arr.push_back(tk);
	}
	lli i = 0, j = 0, mx = 0, ans = 0;
	n = arr.size();
	while (j <= n - 1 && i <= n - 1)
	{
		if (arr[j] + mx <= t)
		{
			mx += arr[j];
			ans = max(ans, j - i + 1);
			j++;
		}
		else
		{
			mx -= arr[i];
			i++;
		}
	}
	cout << ans << endl;
	return 0;
}