import tkinter as tk

def buttonClick(t):
	print(t)

root = tk.Tk()
root.title("Calculator")

entry = tk.Entry(root, font=(20), justify="right")
entry.grid(row=0, column=0, columnspan=4)

buttons = [
	("ln", 1, 0), ("1/x", 1, 1), ("1/x^2", 1, 2), ("<=", 1, 3),
	("sin", 2, 0), ("cos", 2, 1), ("tan", 2, 2), ("log", 2, 3),
	("7", 3, 0), ("8", 3, 1), ("9", 3, 2), ("x", 3, 3),
	("4", 4, 0), ("5", 4, 1), ("6", 4, 2), ("/", 4, 3), 
	("1", 5, 0), ("2", 5, 1), ("3", 5, 2), ("-", 5, 3),
	("C", 6, 0), ("0", 6, 1), ("=", 6, 2), ("+", 6, 3), 
]

for (text, row, col) in buttons:
z


root.mainloop()