#include <bits/stdc++.h>
using namespace std;

void solve()
{
	int m, s;
	cin >> m >> s;
	if (s == 0)
	{
		if (m == 1)
			cout << "0 0" << endl;
		else
			cout << "-1 -1" << endl;
		return;
	}

	vector<int> sm(m, 0);
	vector<int> gr(m, 0);
	sm[0] = 1;
	sm[sm.size() - 1] = s - bool(sm.size() > 1);
	gr[0] = s;
	for (int i = m - 1; i > 0 && sm[i] > 9; i--)
	{
		sm[i - 1] += (sm[i] - 9);
		sm[i] = 9;
	}
	for (int i = 1; i < m && gr[i - 1] > 9; i++)
	{
		gr[i] = gr[i - 1] - 9;
		gr[i - 1] = 9;
	}

	if (sm[0] > 9 || gr[gr.size() - 1] > 9)
	{
		cout << "-1 -1" << endl;
		return;
	}
	else
	{
		for (auto it : sm)
			cout << it;
		cout << " ";
		for (auto it : gr)
			cout << it;
		cout << endl;
	}
}

int main()
{
	solve();
	return 0;
}