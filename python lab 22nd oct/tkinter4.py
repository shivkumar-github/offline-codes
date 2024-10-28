import tkinter as tk

# MVC # Architecture

# Controller
def click():
	counter.set(counter.get()+1)

if __name__ == '__main__':

	window = tk.Tk()

	# model
	counter = tk.IntVar()
	counter.set(0)

	# Views
	frame = tk.Frame(window)
	frame.pack()

	button = tk.Button(frame, text='click', command=click)
	button.pack()

	label = tk.Label(frame, textvariable=counter)
	label.pack()

	# start the machinary
	window.mainloop()
