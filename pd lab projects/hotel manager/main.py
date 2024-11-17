# imports
import tkinter as tk
from datetime import datetime
import uuid
from tkinter import ttk

# handling functions and variables
bill_no = 0
available_items = ["dosa", "idli", "chai", "vadapav", "coffee"]

def show_time():
    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    ofrdate_time.config(text=f"Current Date & Time : {time}")
    root.after(1000, show_time)

def add_item():
    
    
# gui
root = tk.Tk()
root.geometry('900x800')


# order frame
ofr = tk.Frame(root, height=800, width=450)
ofr.pack(side="left", fill="y")

ofrtitle = tk.Label(ofr,text="Your order")
ofrtitle.pack()

ofrdate_time = tk.Label(ofr)
ofrdate_time.pack()
show_time()

ofr_bill_id = tk.Label(ofr, text=f"Bill No : {bill_no}")
ofr_bill_id.pack()

menu_drop_down = ttk.Combobox(ofr, values=available_items)
menu_drop_down.pack()
menu_drop_down.set("select item to add")

quantity_drop_down = ttk.Combobox(ofr,values=list(range(1,31)))
quantity_drop_down.pack()
quantity_drop_down.set("Select quantity")

add_item_btn = tk.Button(ofr, text="Add item", command=add_item)

orders_list = tk.Label(ofr)











root.mainloop()