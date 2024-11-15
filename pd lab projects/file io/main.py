from collections import Counter
data = ''
with open('data.txt','r') as fread:
	data = fread.read()
	words = data.lower().replace('.', ' ').split()
	counter = Counter(words)
	print("No of unique words in file are, ",len(counter))
	for i in counter:
		print(i, counter[i])
	fread.close()

with open('data.txt', 'r') as fread:
	lines = fread.readlines()
	newLines = []
	print('the number new lines in data are ',len(lines))
	for line in lines:
		if len(line) > 1:
			newLine = line[0].upper() + line[1:-1] + line[-1].upper()
		else:
			newLine = line.upper() 
		newLines.append(newLine)
	with open('data.txt', 'w') as fwrite:
		fwrite.writelines(newLines)
