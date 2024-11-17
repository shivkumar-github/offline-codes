#  can have only single return value
import tkinter as tk
import math

def buttonClick(t):
    if t == "C":
        entry.delete(0, tk.END)
    elif t == "<x":
        entry.delete(len(entry.get()) - 1, tk.END)
    elif t == "=":
        try:
            result = eval(entry.get())
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "ERROR!")
    elif t in ["sin", "cos", "tan", "ln", "log", "1/x", "1/x²"]:
        try:
            value = eval(entry.get())
            entry.delete(0, tk.END)
            if t == "sin":
                entry.insert(tk.END, str(math.sin(math.radians(value))))
            elif t == "cos":
                entry.insert(tk.END, str(math.cos(math.radians(value))))
            elif t == "tan":
                entry.insert(tk.END, str(math.tan(math.radians(value))))
            elif t == "ln":
                entry.insert(tk.END, str(math.log(value)))
            elif t == "log":
                entry.insert(tk.END, str(math.log10(value)))
            elif t == "1/x":
                entry.insert(tk.END, str(1 / value))
            elif t == "1/x²":
                entry.insert(tk.END, str(1 / (value * value)))
        except:
            entry.insert(tk.END, "ERROR!")
    else:
        entry.insert(tk.END, t)

# Initialize the main window
root = tk.Tk()
root.title("Advanced Calculator")
root.geometry("400x500")
root.configure(bg="#2e3f4f")

# Entry widget for the input/output
entry = tk.Entry(
    root, 
    font=("Arial", 24), 
    justify="right", 
    width=15, 
    bd=8, 
    relief="ridge"
)
entry.grid(row=0, column=0, columnspan=4, pady=10)

# Define button layout and style
buttons = [
    ("ln", 1, 0), ("1/x", 1, 1), ("1/x²", 1, 2), ("<x", 1, 3),
    ("sin", 2, 0), ("cos", 2, 1), ("tan", 2, 2), ("log", 2, 3),
    ("7", 3, 0), ("8", 3, 1), ("9", 3, 2), ("*", 3, 3),
    ("4", 4, 0), ("5", 4, 1), ("6", 4, 2), ("/", 4, 3),
    ("1", 5, 0), ("2", 5, 1), ("3", 5, 2), ("-", 5, 3),
    ("C", 6, 0), ("0", 6, 1), ("=", 6, 2), ("+", 6, 3),
]

# Apply styles for buttons
for (text, row, col) in buttons:
    tk.Button(
        root,
        text=text,
        font=("Arial", 14, "bold"),
        bg="#4caf50" if text.isdigit() or text == "0" else "#f57c00",
        fg="white",
        width=5,
        height=2,
        relief="ridge",
        bd=4,
        command=lambda t=text: buttonClick(t)
    ).grid(row=row, column=col, padx=5, pady=5)

# Run the main loop
root.mainloop()
