import tkinter as tk
from tkinter import ttk
from datetime import datetime
import sqlite3
import matplotlib.pyplot as plt
import qrcode
import time
from time import strftime

available_items = {
    "Dosa": 50,
    "Idli": 30,
    "Chai": 10,
    "Vada Pav": 40,
    "Coffee": 20
}
added_items = []
order_id = str(time.time()) 


BACKGROUND_COLOR = "#f9f9f9"
FRAME_BG = "#ffffff"  
TEXT_COLOR = "#333333"
BUTTON_BG = "#4caf50" 
BUTTON_FG = "#ffffff" 
HIGHLIGHT_COLOR = "#a5d6a7"

def update_time():
    current_time = strftime('%Y-%m-%d %H:%M:%S %p')  
    time_date_label.config(text=current_time) 
    time_date_label.after(1000, update_time) 

def connect_db():
    conn = sqlite3.connect('orders.db')  
    return conn


def init_db():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS order_items (
        item_name TEXT PRIMARY KEY,
        total_quantity INTEGER
    )
    ''')
    conn.commit()
    conn.close()

def update_order_in_db(item_name, quantity):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
    INSERT INTO order_items (item_name, total_quantity)
    VALUES (?, ?)
    ON CONFLICT(item_name) 
    DO UPDATE SET total_quantity = total_quantity + ?
    ''', (item_name, quantity, quantity))
    conn.commit()
    conn.close()

def generate_pie_chart():
    data = get_order_data_from_db()
    if not data:
        return
    items = [item[0] for item in data]
    quantities = [item[1] for item in data]
    
    fig, ax = plt.subplots()
    ax.pie(quantities, labels=items, autopct='%1.1f%%', startangle=90)
    ax.axis('equal')
    
    plt.title("Item Distribution - Total Orders")
    plt.show()

def get_order_data_from_db():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT item_name, total_quantity FROM order_items")
    data = cursor.fetchall()
    conn.close()
    return data

def update_total_amount():
    total = sum(item.price * item.quantity for item in added_items)
    total_label.config(text=f"Total Amount: ₹{total}")

def add_item():
    item_name = menu_drop_down.get()
    quantity = quantity_drop_down.get()
    if item_name != "Select item to add" and quantity != "Select quantity":
        quantity = int(quantity)
        price = available_items[item_name]
        new_item = OrderedItem(item_name, quantity, price)
        added_items.append(new_item)
        update_total_amount()

def generate_qr_code(amount):
    qr = qrcode.QRCode()
    qr.add_data(f"Payment: ₹{amount}")
    qr.make(fit=True)
    img = qr.make_image(fill="black", back_color="white")
    img.show()

def reset_order():
    global added_items
    added_items.clear()
    update_total_amount()

    for widget in ofr_orders_frame.winfo_children():
        widget.destroy()

def process_payment():
    global added_items, order_id
    total_amount = sum(item.price * item.quantity for item in added_items)

    for item in added_items:
        update_order_in_db(item.name, item.quantity)
    if payment_method_var.get() == "Online":
        generate_qr_code(total_amount)
    else:
        generate_bill_window(total_amount)

    reset_order()
    order_id = str(time.time())  
    ofrtitle.config(text=f"Your Order - ID {order_id}")

def generate_bill_window(total_amount):
    bill_window = tk.Toplevel(root)
    bill_window.geometry("400x300")
    bill_window.title("Bill")
    bill_window.config(bg=FRAME_BG)
    
    bill_label = tk.Label(bill_window, text=f"Bill No: {order_id}\nTotal Amount: ₹{total_amount}", font=("Helvetica", 16), bg=FRAME_BG, fg=TEXT_COLOR)
    bill_label.pack(pady=20)

    bill_button = tk.Button(bill_window, text="Close", font=("Helvetica", 12), bg=BUTTON_BG, fg=BUTTON_FG, relief="flat", command=bill_window.destroy)
    bill_button.pack(pady=10)

def cancel_order():
    reset_order()

class OrderedItem:
    def __init__(self, name, quantity, price):
        self.name = name
        self.quantity = quantity
        self.price = price
        self.frame = tk.Frame(ofr_orders_frame, bg=FRAME_BG, bd=1, relief=tk.RAISED)
        self.frame.pack(fill="x", pady=5, padx=10)

        self.name_label = tk.Label(self.frame, text=name, font=("Helvetica", 12), width=20, anchor="w", bg=FRAME_BG, fg=TEXT_COLOR)
        self.name_label.grid(row=0, column=0, padx=10, sticky="w")

        self.quantity_label = tk.Label(self.frame, text=f"Qty: {quantity}", font=("Helvetica", 12), width=10, bg=FRAME_BG, fg=TEXT_COLOR)
        self.quantity_label.grid(row=0, column=1, padx=10)

        self.price_label = tk.Label(self.frame, text=f"₹{price*quantity}", font=("Helvetica", 12), width=10, bg=FRAME_BG, fg=TEXT_COLOR)
        self.price_label.grid(row=0, column=2, padx=10)

        self.delete_button = tk.Button(self.frame, text="Delete", font=("Helvetica", 10), width=10, bg="#f44336", fg=BUTTON_FG, command=self.delete_item)
        self.delete_button.grid(row=0, column=3, padx=10)

    def delete_item(self):
        added_items.remove(self)
        update_total_amount()
        self.frame.destroy()


root = tk.Tk()
root.geometry('900x800')
root.title("Order Management System")
root.config(bg=BACKGROUND_COLOR)

init_db()

ofr = tk.Frame(root, height=800, bg=BACKGROUND_COLOR)
ofr.pack(side="left", fill="both", expand=True)

ofrtitle = tk.Label(ofr, text=f"Your Order - ID {order_id}", font=("Helvetica", 18, "bold"), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
ofrtitle.pack(pady=20)

time_date_label = tk.Label(ofr, font=("Helvetica", 14), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
time_date_label.pack(pady=5)
update_time()

menu_label = tk.Label(ofr, text="Select Item", font=("Helvetica", 14), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
menu_label.pack(pady=5)

menu_drop_down = ttk.Combobox(ofr, values=list(available_items.keys()), font=("Arial", 12), state="readonly", width=25)
menu_drop_down.set("Select item to add")
menu_drop_down.pack(pady=5)

quantity_label = tk.Label(ofr, text="Select Quantity", font=("Helvetica", 14), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
quantity_label.pack(pady=5)

quantity_drop_down = ttk.Combobox(ofr, values=[str(i) for i in range(1, 11)], font=("Arial", 12), state="readonly", width=25)
quantity_drop_down.set("Select quantity")
quantity_drop_down.pack(pady=5)

add_item_button = tk.Button(ofr, text="Add Item", font=("Helvetica", 12), width=25, bg=BUTTON_BG, fg=BUTTON_FG, relief="flat", command=add_item)
add_item_button.pack(pady=15)

ofr_orders_frame = tk.Frame(root, bg=FRAME_BG, bd=0)
ofr_orders_frame.pack(side="right", fill="both", expand=True, padx=10, pady=10)

total_label = tk.Label(ofr, text="Total Amount: ₹0", font=("Helvetica", 14), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
total_label.pack(pady=10)

payment_method_label = tk.Label(ofr, text="Select Payment Method", font=("Helvetica", 14), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
payment_method_label.pack(pady=5)

payment_method_var = tk.StringVar()
payment_method_cash = tk.Radiobutton(ofr, text="Cash", variable=payment_method_var, value="Cash", font=("Helvetica", 12), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
payment_method_cash.pack()

payment_method_online = tk.Radiobutton(ofr, text="Online", variable=payment_method_var, value="Online", font=("Helvetica", 12), bg=BACKGROUND_COLOR, fg=TEXT_COLOR)
payment_method_online.pack()

process_payment_button = tk.Button(ofr, text="Process Payment", font=("Helvetica", 14), width=25, bg=BUTTON_BG, fg=BUTTON_FG, relief="flat", command=process_payment)
process_payment_button.pack(pady=20)

cancel_order_button = tk.Button(ofr, text="Cancel Order", font=("Helvetica", 14), width=25, bg="#f44336", fg=BUTTON_FG, relief="flat", command=cancel_order)
cancel_order_button.pack(pady=10)

pie_chart_button = tk.Button(ofr, text="View Data Analysis", font=("Helvetica", 14), width=25, bg=HIGHLIGHT_COLOR, fg=TEXT_COLOR, relief="flat", command=generate_pie_chart)
pie_chart_button.pack(pady=20)

def update_ofr_width(event=None):
    ofr_width = root.winfo_width()//2
    ofr.config(width=ofr_width)
    
root.bind('<Configure>', update_ofr_width)

root.mainloop()
