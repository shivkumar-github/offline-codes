import tkinter
window = tkinter.Tk()

data = tkinter.StringVar()
data.set('Sandeep Udmale')

label = tkinter.Label(window, textvariable=data)
label.pack()

window.mainloop()
print('done')