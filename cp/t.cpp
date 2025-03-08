#include "bits/stdc++.h"
using namespace std;

#define nl "\n"
#define ll long long
#define vi vector<int>
#define vll vector<long long>
#define vb vector<bool>
#define fr(i, n) for (int i = 0; i < (n); i++)
#define rep(i, a, n) for (int i = (a); i <= (n); i++)
#define all(v) v.begin(), v.end()
#define sz(v) (int)(v.size())
#define srt(v) sort(v.begin(), v.end())
#define pb push_back

void solve()
{
    ll nx, ns;
    cin >> nx >> ns;
    string x, s;
    cin >> x >> s;
    
    if (x.find(s) != string::npos) {
        cout << 0 << nl;
        return;
    }

    int ops = 0;
    while (x.size() < nx + ns) {
        x += x;
        ops++; 
        if (x.find(s) != string::npos) {
            cout << ops << nl;
            return;
        }
    }
    cout << -1 << nl;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int T;
    cin >> T;
    while (T--) {
        solve();
    }
    return 0;
}
