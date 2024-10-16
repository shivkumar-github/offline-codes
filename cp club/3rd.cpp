#include <bits/stdc++.h>
using namespace std;
int main()
{
	int n;
	int arr[5] = {0, 0, 0, 0, 0};
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		int t;
		cin >> t;
		arr[t]++;
	}
	int ans = arr[4];
	int el = min(arr[3], arr[1]);
	ans += el;
	arr[3] -= el;
	arr[1] -= el;
	ans += arr[2] / 2;
	arr[2] %= 2;
	if (arr[2])
	{
		if(arr[1]>=2){
			arr[1] -= 2;
			ans++;
		}
		else if(arr[1]<2){
			arr[1] = 0;
			ans++;
		}
	}
	ans += (arr[1] / 4);
	if (arr[1] % 4)
	{
		ans += 1;
	}
	ans += arr[3];
	cout << ans << endl;
	return 0;
}