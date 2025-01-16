#include <bits/stdc++.h>

#define f first
#define s second
#define pb push_back

typedef long long int ll;
typedef unsigned long long int ull;
using namespace std;
typedef pair<int,int> pii;
typedef pair<ll,ll> pll;

template<typename T> int die(T x) { cout << x << endl; return 0; }

#define mod 1000000007
#define INF 1000000000
#define LNF 1e15
#define LOL 12345678912345719ll

using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);

    int T; cin >> T;
    while (T--) {
        int N, M; cin >> N >> M;
        string S; cin >> S;
        vector<vector<ll>> A;
        for (int i = 0; i < N; i++) {
            A.push_back(vector<ll>(M));
            for (int j = 0; j < M; j++) {
                cin >> A[i][j];
            }
        }
        int x = 0, y = 0;
        for (char c : S) {
            if (c == 'D') {
                long long su = 0;
                for (int i = 0; i < M; i++) {
                    su += A[x][i];
                }
                A[x][y] = -su;
                ++x;
            } else {
                long long su = 0;
                for (int i = 0; i < N; i++) {
                    su += A[i][y];
                }
                A[x][y] = -su;
                ++y;
            }
        }
        long long su = 0;
        for (int i = 0; i < M; i++) {
            su += A[N-1][i];
        }
        A[N-1][M-1] = -su;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                cout << A[i][j] << " ";
            }
            cout << endl;
        }

    }
    return 0;
}

