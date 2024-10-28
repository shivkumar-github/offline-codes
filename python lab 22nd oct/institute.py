class Inst:
	"""A class for institute/University"""

	def __init__(self, name, id_number, email):
		"""Information about stakeholders of the institute"""
		self.name = name
		self.id_number = id_number
		self.email_id = email
		self.id_number = id_number

	def __str__(self) -> str:
		return '{}\n{}\n{}'.format(self.name, self.id_number, self.email_id)
	
class Faculty(Inst):
	def __init__(self, name, id_number, email, salary):
		super().__init__(name, id_number, email)
		self.salary = salary

class Student(Inst):
	def __init__(self, name, id_number, email, perc):
		super().__init__(name, id_number, email)
		self.perc = perc
		self.gy = 2027

sandeep = Faculty("Sandeep Udmale", 1659, "ssudmale@it.vjti.ac.in", 10000)
print(sandeep.salary, sandeep.name)
shivkumar = Student("shivkumar", 231080053, "ssrajmane_b23@it.vjti.ac.in", 97)
shivkumar1 = Student("shivkumar", 231080054, "ssrajmane1_b23@it.vjti.ac.in", 97)
print(shivkumar.name, shivkumar.id_number, shivkumar.email_id, shivkumar.perc, shivkumar.gy)
print(shivkumar)
