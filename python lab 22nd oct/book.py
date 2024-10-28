class Book:
	"""
	Information about books in the library.
	"""

	

	def number_of_authors(self):
		return len(self.author)
	

python_book1 = Book()
python_book1.title = "Python"
python_book1.author = ["author1", "author2", "author3"]
python_book1.price = 500
python_book1.publisher = "THM"
print(python_book1.title, python_book1.author, python_book1.price, python_book1.publisher, python_book1.number_of_authors())
