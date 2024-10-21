import heapq

class Node:
	def __init__(self, symbol, freq):
		self.symbol = symbol
		self.freq = freq
		self.right = None
		self.left = None
	# comparator for heap 
	def __lt__(self, other):
		return self.freq < other.freq

def printHuffman(root, codeStr):
	if root is None:
		return
	
	# if it is leaf node 
	if root.left is None and root.right is None:
		print(f"{root.symbol} -> {codeStr}")

	printHuffman(root.left, codeStr+"0")
	printHuffman(root.right, codeStr+"1")

def buildTree(inp):
	heap = []

	for symbol, freq in inp:
		heapq.heappush(heap, Node(symbol, freq))

	while len(heap) > 1:
		left = heapq.heappop(heap)
		right = heapq.heappop(heap)

		parent = Node('$', left.freq + right.freq)
		parent.left = left
		parent.right = right

		heapq.heappush(heap, parent)
	
	# return the laste remaining node (root of the our huffman tree)
	return heap[0]

def main():
	T = int(input())

	# list to take input
	inp = []

	for i in range(T):
		symbol = input()
		freq = int(input())
		inp.append((symbol, freq))

	root = buildTree(inp)

	print("The hauffman for each letter is : ")
	printHuffman(root, "") # before root string will be empty

if __name__ == "__main__":
	main()