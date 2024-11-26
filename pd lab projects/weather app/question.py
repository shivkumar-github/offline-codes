strings = ['1', '4-10', '11', '15-20', '21']
ans = []
for item in strings:
	if item.find('-') != -1:
		start = int(item.split('-')[0])
		end = int(item.split('-')[1])
		expanded = [i for i in range(start, end+1)]
		ans.extend(expanded)
		# for i in range(start, end+1):
		# 	ans.append(i)
	else:
		ans.append(int(item))

print(ans)