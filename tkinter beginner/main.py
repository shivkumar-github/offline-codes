import tkinter as tk

# base
root = tk.Tk()

root.geometry('500x500')
root.minsize(500, 500)
root.maxsize(500, 500)
root.title('My first gui')

label = tk.Label(root,text='my label')
label.pack()

#  remembers logic that we write
root.mainloop()