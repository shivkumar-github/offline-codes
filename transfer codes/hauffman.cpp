#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
	char symbol;
	int freq;
	Node *left, *right;
	Node(char symbol, int freq)
	{
		this->symbol = symbol;
		this->freq = freq;
		left = right = nullptr;
	}
};

struct Compare
{
	bool operator()(Node *const &n1, Node *const &n2)
	{
		return n1->freq > n2->freq;
	}
};

void util(Node *root, string code)
{
	if (!root)
		return;

	if (!root->left && !root->right)
	{
		cout << root->symbol << " -> " << code << endl;
	}

	util(root->left, code + "0");
	util(root->right, code + "1");
}

int main()
{
	priority_queue<Node *, vector<Node *>, Compare> pq;
	int T;
	cin >> T;

	while (T--)
	{
		char c;
		int f;
		cin >> c >> f;
		Node *cr = new Node(c, f);
		pq.push(cr);
	}

	while (pq.size() > 1)
	{
		Node *p1 = pq.top();
		pq.pop();
		Node *p2 = pq.top();
		pq.pop();

		Node *t = new Node('$', p1->freq + p2->freq);
		t->left = p1;
		t->right = p2;
		pq.push(t);
	}

	Node *root = pq.top();

	util(root, "");

	return 0;
}
