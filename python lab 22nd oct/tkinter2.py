import tkinter as tk
window = tk.Tk()
frame = tk.Frame(window)
frame.pack()
a = tk.Label(frame, text="One")
a.pack()
b = tk.Label(frame, text="Two")
b.pack()
c = tk.Label(frame, text="Three")
c.pack()

window.mainloop()