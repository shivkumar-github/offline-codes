# imports
import tkinter as tk
from datetime import datetime
from tkinter import ttk

# handling functions and variables
bill_no = 0
available_items = ["dosa", "idli", "chai", "vadapav", "coffee"]		
added_items = []

def set_frames_width():
    half = root.winfo_width()//2
    ofr.config(width=half)

def show_time():
    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    ofrdate_time.config(text=f"Current Date & Time : {time}")
    root.after(1000, show_time)

def add_item():
    name = menu_drop_down.get()
    menu_drop_down.set("select item to add")
    quantity = quantity_drop_down.get()
    quantity_drop_down.set("Select quantity")
    added_item(name, quantity)
    added_items.append({"name":name, "quantity":quantity})


class added_item:
	def __init__(self, item_name, item_quantity):
		self.frame = tk.Frame(ofr_orders_frame)
		self.frame.grid(row=len(added_items))
  
		self.name = tk.Label(self.frame, text=item_name)
		self.name.grid(column=0)
		self.quantity = tk.Label(self.frame, text=f"{item_quantity}")
		self.quantity.grid(column=1)
		self.delete_btn = tk.Button(self.frame, text="delete", command=)
		self.delete_btn.grid(column=2)
		

# gui
root = tk.Tk()
root.geometry('900x800')

# select order frame
ofr = tk.Frame(root, height=800, bg='#929292')
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
add_item_btn.pack()

ofr_orders_frame = tk.Frame(ofr)
ofr_orders_frame.pack()

orders_list = tk.Label(ofr)

root.after(100, set_frames_width)
root.mainloop()