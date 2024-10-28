class Book:
	"""
	Information about books in the library.
	"""
	
	def __init__(self, title, author, price, publisher):
		"""
		create a new book with title, author, price and publisher information
		"""
		self.title = title
		self.author = author
		self.price = price
		self.publisher = publisher

	def number_of_authors(self):
		return len(self.author)
	
	def print_price(self):
		return self.price
	
	def __str__(self) -> str:
		return """Title: {0} 
		Authors: {1}
		Price: {2}
		Publisher: {3}""".format(self.title, '.'.join(self.author), self.price, self.publisher)
	
	def __eq__(self, other) -> bool:
		"""
		returns true if two books have same publisher
		"""
		return self.publisher == other.publisher

python_book1 = Book("python1", ["abc", "xyz"], 500, "XML publications")
python_book2 = Book("python2", ["abc1", "xyz2"], 700, "XML publications2")

print(python_book1==python_book2)
print(str(python_book1))
print(Book.print_price(python_book1))
print(python_book2)