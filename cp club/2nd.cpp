/*

*/

#include <bits/stdc++.h>
using namespace std;
int main()
{
	long long int N, X, Y, s = 0, s2 = 0;
	cin >> N >> X >> Y;
	vector<long long int> arr(N);
	for (int i = 0; i < N; i++)
	{
		cin >> arr[i];
		s += arr[i];
		arr[i] -= Y;
		if (arr[i] < 0)
			arr[i] = 0;
		s2 += arr[i];
	}
	s2 += X;
	cout << min(s, s2);
	return 0;
}