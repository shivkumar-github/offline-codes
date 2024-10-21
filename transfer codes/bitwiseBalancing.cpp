#include <bits/stdc++.h>
using namespace std;
#define lli long long int
int main()
{
	lli limit = 61;
	int T;
	cin >> T;
	while (T--)
	{
		lli a = 0, b, c, d;
		bool flag = true;
		cin >> b >> c >> d;
		for (int i = 0; i <= limit; i++)
		{
			int bit_d = d & 1, bit_b = b & 1, bit_c = c & 1;
			d /= 2;
			b /= 2;
			c /= 2;
			if ((bit_b == 0 && bit_c == 0 && bit_d == 1) || ((bit_b == 1 && bit_c == 1 && bit_d == 0)))
			{
				a += pow(2, i);
			}
			if ((bit_b == 0 && bit_c == 1 && bit_d == 1) || (bit_b == 1 && bit_c == 0 && bit_d == 0))
			{
				cout << -1 << endl;
				flag = false;
				break;
			}
		}
		if (flag)
			cout << a << endl;
	}
	return 0;
}