/*

*/

#include <bits/stdc++.h>
using namespace std;
int main()
{
	char a, b, ans;
	cin >> a >> b;
	if (a == 'R' && b == 'D')
	{
		ans = 'D';
	}
	else if (a == 'D' && b == 'R')
	{
		ans = 'D';
	}
	else if (a == 'D' && b == 'D')
	{
		ans = 'R';
	}
	else if (a == 'R' && b == 'R')
	{
		ans = 'R';
	}
	return 0;
}