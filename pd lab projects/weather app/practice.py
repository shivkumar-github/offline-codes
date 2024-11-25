# a = "shivkumar"
# # a[0] = 'h' # string is immutable
# b = list(a)
# c = str(b)
# print(b, c) # list can not be converted back to string



# # touple and list
# x = [1, 2, 3]
# y = (1,2,3)
# print(type(x), type(y))
# x[0] = 100
# # y[1] = 100 # touple is immutable
# y = [2,3,4]
# print(y)

# print(type([1]), type((1)), type((1,))) # it's list int and then touple


# how to modify touple 
# first convert touple to list make changes and then again convert back
# a = (1,2,3)
# b = list(a)
# b[0] = 100
# a = tuple(b)
# print(a)

# addition of touples 
# a = (1,2,3)
# b = (4,5)
# print(a+b)
# a += b
# print(a)


# touple doesn't supports deletion

# unpacking of list
# a = [10, 20]
# x, y = a
# print(x, y)

# unpacking of touples 
# a = (10, 20)
# x, y = a
# print(x, y)

# unpacking of touples 
# a = (10, 20)
# (x, y) = a
# print(x, y, type(x), type(y))


# x, y, z = a
# print(x, y, z) # value error not enough values to unpack

a = (1,2,3,4,5)
# x, y, *z = a
# print(x, y, z, type(x), type(y), type(z))

# x, *y, z = a
# print(x, y, z, type(x), type(y), type(z))

# (*x, ) = a
# print(x, type(x)) 

# for i in a:
#     print(i)
    
# for i in range(len(a)):
#     print(a[i])
    
# print(a*3) #The * operator concatenates the tuple with itself multiple times, resulting in a single, longer tuple 

# print(a.count(3))
# print(a.count(10))
# print(a.index(3)) #a.index(10) .index gives error i f value not present in touple

# a = {1,2,3}
# print(a, type(a))

# a = {1,2,3,3,4,5} # double entries are not considered
# print(a)
# # integer sets are ordered 
# a = {'x', 'y', 'z'}
# b = {True, False, True, True}
# print(a, b) # string sets and boolean sets are not ordered

# True False and 1 and 0 in  sets
# 1 is considered as True and 0 as False
# a = {True, False, 1, 2, 0}
# print(a)

# a = set((1,2,3,4))
# print(a, type(a))

# for i in a:
#     print(i)
    
# print('1' in a)
# print(1 in a)
# print(a[0])  # set is not subscriptable ('[]' can't be used to access elements)

# # DOUBT: ordered or not integer set
# a.add(100)
# print(a)

# # update method in sets
# a = {1,2,3}
# b = {'x', 'y', 'z'}
# a.update(b)
# print(a, b)
# a.remove(2)
# print(a)

# # a.remove(2)
# a.discard(2) # .remove gives error if element is not present and discard doesn't
# print(a.pop())

# a = {2,3,3.0}
# print(type(3), type(3.0))
# a.remove(3)
# print(a)

# a.clear()
# b = {}
# print(a, b, type(a), type(b))
# # if set is empty then it prints set() and b will be a dictionary here

# union and intersection of sets
# a = {'x', 10, 20.3, "sandeep"}
# b = {2, 10,3,4}
# print(a.union(b))
# print(a.intersection(b)) # both are of set type

# # symmetric difference union - intersection
# print(a.symmetric_difference(b))

# Dictionaries
# a = {'day':'Monday', 'month':'december'}
# print(a, type(a), len(a))
# print(a['day'])
# print(a.items(), type(a.items())) # class dict items (list of touples)
# print( a.keys(), type(a.keys())) # class dict keys 

# a.update({'day':"saturday"})
# print(a)

# b = "shivkumar"
# a = {"name":b}
# print(a)

# deletion and popping in dictionary
a = {'day':'Monday', 'month':'december', 'year':2020, 'name':"shivkumar"}
# a.pop('day')
# print(a)

# del a['month']
# print(a)
# a.clear()
# print(a, type(a))
#  if key not present both give key error by default

# for i in a: # prints keys
#     print(i)
    
# for i in a.keys():
#     print(i)

# for i in a.values():
#     print(i)

# print("i in a.items()")
# for i in a.items():
#     print(i, type(i))
    
# print("key, value in a.items()")
# for key, value in a.items():
#     print(key, value)


# def collatz(n):
#     if n<=0:
#         return
#     seq = []
#     while seq[-3: : ] != [4,2,1]:
#         n = n*3+1 if n%2 else n/2
#         print(n, end=" ")
#         seq.append(n)
        
# n = int(input("Enter the number: "))
# collatz(n)

# def cumProd(arr):
#     if len(arr) == 0:
#         return 1
#     return arr[0]*cumProd(arr[1:])

# n = 1
# arr = [int(i) for i in input("Enter the array").split()]
# print(cumProd(arr))
arr = [1,2,3,4]
print(arr[1:len(arr)])