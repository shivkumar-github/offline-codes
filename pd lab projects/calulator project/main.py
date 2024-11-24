import tkinter as tk
from utilityFuncs import buttonClick

root = tk.Tk()
root.title("Advanced Calculator")
root.geometry("400x500")
root.configure(bg="#2e3f4f")

entry = tk.Entry(
    root,
    font=("Arial", 24),
    justify="right",
    width=15,
    bd=8,
    relief="ridge"
)
entry.grid(row=0, column=0, columnspan=4, pady=10)

buttons = [
    ("ln", 1, 0), ("1/x", 1, 1), ("1/x²", 1, 2), ("←", 1, 3),
    ("sin", 2, 0), ("cos", 2, 1), ("tan", 2, 2), ("log", 2, 3),
    ("7", 3, 0), ("8", 3, 1), ("9", 3, 2), ("*", 3, 3),
    ("4", 4, 0), ("5", 4, 1), ("6", 4, 2), ("/", 4, 3),
    ("1", 5, 0), ("2", 5, 1), ("3", 5, 2), ("-", 5, 3),
    ("C", 6, 0), ("0", 6, 1), ("=", 6, 2), ("+", 6, 3),
]

for (text, row, col) in buttons:
    tk.Button(
        root,
        text=text,
        font=("Arial", 14, "bold"),
        bg="#000000" if text.isdigit() or text == "0" else "#2a2929",
        fg="white",
        width=5,
        height=2,
        relief="ridge",
        bd=4,
        command=lambda t=text: buttonClick(t, entry)
    ).grid(row=row, column=col, padx=5, pady=5)

root.mainloop()
