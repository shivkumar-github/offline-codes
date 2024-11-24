import math
import tkinter as tk

def buttonClick(t, entry):
    if t == "C":
        entry.delete(0, tk.END)
    elif t == "←":
        entry.delete(len(entry.get()) - 1, tk.END)
    elif t == "=":
        try:
            result = eval(entry.get())
            if isinstance(result, (int, float)) and result == float('inf'):
                raise ZeroDivisionError
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except ZeroDivisionError:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "DIV BY 0!")
        except:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "ERROR!")
    elif t in ["sin", "cos", "tan", "ln", "log", "1/x", "1/x²"]:
        try:
            value = eval(entry.get())
            if t in ["1/x", "1/x²"] and value == 0:
                raise ZeroDivisionError
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
        except ZeroDivisionError:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "ERROR! CAN'T DIVIDE BY 0")
        except:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "ERROR!")
    else:
        entry.insert(tk.END, t)
