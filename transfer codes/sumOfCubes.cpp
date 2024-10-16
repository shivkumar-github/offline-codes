#include <bits/stdc++.h>
using namespace std;
#define lli long long int
int main()
{
	int T;
	cin >> T;
	while(T--){
		lli n;
		string ans = "NO";
		cin >> n;
		int near = cbrt(n);
		lli l = 1;
		lli r = near;
		while(1){
			if(l>r)break;
			lli cr = l * l * l + r * r * r;
			if (cr == n){
				ans = "YES";
				break;
			}
			else if(cr<n)
				l++;
			else
				r--;
		}
		cout << ans << endl;
	}
	return 0;
}