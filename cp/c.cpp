#include "bits/stdc++.h"
using namespace std;
#define endl "\n"
#define int long long
#define ll long long
#define lli long long int
#define ull unsigned long long
#define vi vector<int>
#define vvi vector<vi>
#define vll vector<long long>
#define vb vector<bool>
#define fr(i,n) for(int i=0; i<(n); i++)
#define rep(i,a,n) for(int i=(a); i<=(n); i++)
#define all(v) v.begin(),v.end()
#define sz(v) (int)(v.size())
#define srt(v)  sort(v.begin(),v.end()) 

ll solve(){
	int n;
	cin>>n;
	vi v(n+1);
	rep(i, 1, n) cin >> v[i];
	vi dpf(n+1), dpe(n+1);
	dpf[1] = -1;
	dpe[n] = 1;
	int sum = accumulate(v.begin(), v.end(),0);
	if(n==1)
		return sum;
	sum = max(sum, max(v[1] - v[n], v[n] - v[1]));
	if(n==2) return sum;
	rep(i, 1, n)
	{
		for (int j = i; j >= 1; --j)
		{
			dpf[j] = (abs(dpf[j]) + abs(dpf[j - 1]));
			if((i-j+1)&1)
				dpf[j] *= -1;
		}
		for (int j = n - i + 1; j <= n - 1;++j) {
			dpe[j] = abs(dpe[j + 1]) + abs(dpe[j]);
			if((n-j)&1)
				dpe[j] *= -1;
		}
		int crsm = 0;
		for (int j = 1; j <= n;++j){
			if(i<n)crsm += ((dpf[j]+dpe[j]) * v[j]);
			else crsm += (dpe[j] * v[j]);
		}

		if(crsm<0) crsm *= (-1);
		sum = max(sum, crsm);
	}
	return sum;
}

int32_t main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int T = 1;
	cin >> T;
	while (T--)
	{
		cout << solve() << endl;
	}
	return 0;
}