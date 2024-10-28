import tkinter as tk
window = tk.Tk()
frame = tk.Frame(window)

var = tk.StringVar()
label = tk.Label(frame, textvariable=var)
label.pack()

entry = tk.Entry(frame, textvariable=var)
entry.pack()
window.mainloop()
