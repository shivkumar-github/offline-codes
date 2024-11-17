import re

# match searches for patterns from start of the string else returns none
result = re.match(r'hello', " hello world")

# returns the first match starting from anywhere in the string
result = re.search(r'hello', "hey hello world hello")

# re.findAll() returns the array of all matchings
result = re.findall(r'hello', "hey hello wolrd hello and hellow")



print(result)