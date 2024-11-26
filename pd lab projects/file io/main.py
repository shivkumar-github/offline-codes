from collections import Counter
import re

with open('data.txt') as fread:
	lines = fread.readlines()
	newLines = []

	words = []
	counter = 0
	for line in lines:
		curr_words = re.findall(r'\b\w+\b', line.lower())
		words.extend(curr_words)

		if len(line.strip())>0:
			counter+=1
			newLines.append(line[0].upper() + line[1:-1] + line[-1].upper())
	counter = Counter(words)
	print("Unique words in the file : ")
	for word, count in counter.items():
		print(word, count)
        
	with open('data.txt', 'w') as fwrite:
		fwrite.writelines(newLines)
		fwrite.close()
	fread.close()
