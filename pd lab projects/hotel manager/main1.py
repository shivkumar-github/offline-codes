# imports
import tkinter as tk
from tkinter import ttk
from datetime import datetime
import sqlite3
import uuid
import qrcode

# items and prices
available_items = {
    "Dosa":50, 
    "Idli":10,
    "Chai":10,
    "Vada Pav":18,
    "Coffee":20
}

added_items = []
order_id = str(uuid.uuid1())

def connect_db():
    conn = sqlite3.connect('orders.db')
    return conn

def init_db():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS items_analysis_table(
        name TEXT PRIMARY KEY
        total_quantity INTEGER
    )
    ''')
    conn.commit()
    conn.close()
    
def update_db(name, quantity):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
    INSERT INTO items_analysis_table (name, quantity)
    VALUES(?, ?)
    ON CONFLICT(name) 
    DO UPDATE SET total_quantity = total_quantity + ?
    ''', (name, quantity, quantity))
    conn.commit()
    conn.close()
    
    
    
class Ordered_item:
    def __init__(self, name, quantity, price):
        self.name = name
        self.quantity = quantity
        self.price = price
        self.frame = tk.Frame(added_items_frame)
        self.frame.pack()
        
        self.name_label = tk.Label(self.frame, text=name)
        self.name_label.grid(row=0, column=0)
        
        self.quantity_label = tk.Label(self.frame, text=f"Qty: {quantity}")
        self.quantity_label.grid(row=0, column=1)

        self.price_label = tk.Label(self.frame, text=f"₹{price}")
        self.price_label.grid(row=0, column=2)
        
        self.delete_btn = tk.Button(self.frame, text="Delete", command=self.delete_item)
        self.delete_btn.grid(row=0, column=3)

    def delete_item(self):
        added_items.remove(self)
        update_total_amt()
        self.frame.destroy()
        
def update_total_amt():
    total = sum(item.price for item in added_items)
    total_label.config(text=f"Total Amount: ₹{total}")
    
def reset_order():
    global added_items
    added_items.clear()
    update_total_amt()
    
    for widget in added_items_frame.winfo_children():
        widget.destroy()
        
def process_payment():
    global added_items, order_id
    total_amt = sum(item.price for item in added_items)
    for item in added_items:
        update_db(item.name, item.quantity)
    if payment_method.get() == "Online":
        generate_qr_code(total_amt)
    else:
        generate_bill_window(total_amt)
    
    reset_order()
    order_id = str(uuid.uuid1())
    ofr_title.config(text=f"Order ID: {order_id}")

def generate_qr_code(amount):
    qr = qrcode.QRCode()
    qr.add_data(f"Payment: ₹{amount}")
    qr.make()
    img = qr.make_image(fill="black", back_color="white")
    img.show()
    
def generate_bill_window(total_amt):
    bill_window = tk.Toplevel(root)
    bill_window.geometry("400x300")
    bill_window.title("Bill")
    
    bill_label = tk.Label(bill_window, text=f"Bill No: {order_id} \n Total Amount: ₹{total_amt}")
    bill_label.pack()
    
    bill_btn = tk.Button(bill_window, text="Close", command=bill_window.destroy)
    bill_btn.pack()
        
def cancel_order():
    reset_order()

def add_item():
    name = menu_drop_down.get()
    menu_drop_down.set("Select Item to add")
    quantity = quantity_drop_down.get()
    quantity_drop_down.set("Select Quantity")
    if name !="Select Item to add" and quantity != "Select Quantity":
        price = available_items[name] * quantity
        new_item = Ordered_item(name, quantity, price)
        added_items.append(new_item)
        update_total_amt()

    

# GUI
root = tk.Tk()
root.title("Anna's Kitchen")

ofr = tk.Frame(root)
ofr.pack(side="left")

ofr_title = tk.Label(ofr, text=f"Order ID: {order_id}")
ofr_title.pack()

menu_label = tk.Label(ofr, text="Select your dish: ")
menu_label.pack()

menu_drop_down = ttk.Combobox(ofr, values=list(available_items.keys()), state="readonly")
menu_drop_down.set("Select Item to add")
menu_drop_down.pack()

quantity_label = tk.Label(ofr, text="Select Quantity")
quantity_label.pack()

quantity_drop_down = ttk.Combobox(ofr, values=[i for i in range(1,11)], state="readonly")
quantity_drop_down.set("Select Quantity")
quantity_drop_down.pack()

add_item_btn = tk.Button(ofr, text="Add item", command=add_item)
add_item_btn.pack()

added_items_frame = tk.Frame(root)
added_items_frame.pack(side="right")


total_label = tk.Label(ofr, text="Total Amount : ₹0")
total_label.pack

total_label = tk.Label(ofr)
total_label.pack()

payment_method_label = tk.Label(ofr, text="Select Payment Method")
payment_method_label.pack()

payment_method = tk.StringVar()
cash_radio_btn = tk.Radiobutton(ofr, text="Cash", variable=payment_method, value="Cash")
cash_radio_btn.pack()
online_radio_btn = tk.Radiobutton(ofr, text="Online UPI", variable=payment_method, value="Online")
online_radio_btn.pack()

pay_btn = tk.Button(ofr, text="Process to Pay")
pay_btn.pack()

cancel_btn = tk.Button(ofr, text="Cancel Order")
cancel_btn.pack()

analysis_btn = tk.Button(ofr, text="View Data Analysis")
analysis_btn.pack()


root.mainloop()