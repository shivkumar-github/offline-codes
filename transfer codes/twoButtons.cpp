#include <bits/stdc++.h>
using namespace std;

#define lli long long int
void solve()
{
	lli n, m;
	cin >> n >> m;
	if (n > m)
	{
		cout << n - m << endl;
		return;
	}
	lli lmt = n;
	while (lmt < m)
		lmt *= 2;

	vector<vector<int>> g(lmt + 1);
	g[1].push_back(2);
	for (int i = 2; i < lmt + 1; i++)
	{
		g[i].push_back(i - 1);
		if (2 * i <= lmt)
		{
			g[i].push_back(2 * i);
		}
	}

	vector<int> parent(lmt + 1, -1);
	parent[1] = -1;
	vector<bool> visited(lmt + 1, false);
	queue<int> q;
	q.push(n);
	visited[n] = true;
	while (!q.empty())
	{
		int node = q.front();
		q.pop();

		for (auto it : g[node])
		{
			if (!visited[it])
			{
				visited[it] = true;
				parent[it] = node;
				q.push(it);
			}
		}
	}
	int crNd = m;
	int ans = 0;
	while (crNd != n)
	{
		ans++;
		crNd = parent[crNd];
	}
	cout << ans << endl;
}

int main()
{
	solve();
	return 0;
}