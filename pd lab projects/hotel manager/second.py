import tkinter as tk
from tkinter import ttk
from datetime import datetime
import sqlite3
import matplotlib.pyplot as plt
import qrcode
import uuid

# Initialize the available menu items and prices
available_items = {
    "Dosa": 50,
    "Idli": 30,
    "Chai": 10,
    "Vada Pav": 40,
    "Coffee": 20
}
added_items = []
order_id = str(uuid.uuid4())  # Generate unique order ID using uuid4

# Connect to SQLite3 Database (Create or Open)
def connect_db():
    conn = sqlite3.connect('orders.db')  # Create or open the database
    return conn

# Initialize the database and create necessary tables
def init_db():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS order_items (
        item_name TEXT PRIMARY KEY,
        total_quantity INTEGER
    )
    ''')
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS bill_info (
        bill_no INTEGER PRIMARY KEY,
        total_amount INTEGER
    )
    ''')
    conn.commit()
    conn.close()

# Get the latest bill number from the database
def get_latest_bill_no():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT MAX(bill_no) FROM bill_info")
    result = cursor.fetchone()
    conn.close()
    return result[0] if result[0] else 0

# Update bill number in the database
def update_bill_no():
    global order_id
    order_id = str(uuid.uuid4())  # Generate a new unique ID for the order

# Add item to the order list and update database
def add_item():
    item_name = menu_drop_down.get()
    quantity = quantity_drop_down.get()
    if item_name != "Select item to add" and quantity != "Select quantity":
        quantity = int(quantity)
        price = available_items[item_name]
        update_order_in_db(item_name, quantity)
        new_item = OrderedItem(item_name, quantity, price)
        added_items.append(new_item)
        update_total_amount()

# Update order data in the database
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

# Generate a pie chart of item quantities ordered
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

# Retrieve data for the pie chart from the database
def get_order_data_from_db():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT item_name, total_quantity FROM order_items")
    data = cursor.fetchall()
    conn.close()
    return data

# Update the total amount based on added items
def update_total_amount():
    total = sum(item.price * item.quantity for item in added_items)
    total_label.config(text=f"Total Amount: ₹{total}")

# Generate QR code for online payment
def generate_qr_code(amount):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(f"Payment: ₹{amount}")
    qr.make(fit=True)
    img = qr.make_image(fill="black", back_color="white")
    img.show()

# Process payment based on selected method
def process_payment():
    total_amount = sum(item.price * item.quantity for item in added_items)
    if payment_method_var.get() == "Online":
        generate_qr_code(total_amount)
    else:
        generate_bill_window(total_amount)

# Generate and display bill window
def generate_bill_window(total_amount):
    bill_window = tk.Toplevel(root)
    bill_window.geometry("400x300")
    bill_window.title("Bill")
    bill_window.config(bg="#2c3e50")
    
    bill_label = tk.Label(bill_window, text=f"Bill No: {order_id}\nTotal Amount: ₹{total_amount}", font=("Helvetica Neue", 16), bg="#2c3e50", fg="white")
    bill_label.pack(pady=20)

    bill_button = tk.Button(bill_window, text="Close", font=("Helvetica Neue", 12), bg="#3498db", fg="white", relief="flat", command=bill_window.destroy)
    bill_button.pack(pady=10)

# Cancel the order and reset everything
def cancel_order():
    global added_items
    added_items.clear()
    update_total_amount()

    # Remove all items from database (optional, based on the requirement)
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM order_items")
    conn.commit()
    conn.close()

    for widget in ofr_orders_frame.winfo_children():
        widget.destroy()

# Create the ordered item representation class
class OrderedItem:
    def __init__(self, name, quantity, price):
        self.name = name
        self.quantity = quantity
        self.price = price
        self.frame = tk.Frame(ofr_orders_frame, bg="#f4f4f4", bd=1, relief=tk.RAISED)
        self.frame.pack(fill="x", pady=5)

        self.name_label = tk.Label(self.frame, text=name, font=("Helvetica Neue", 12), width=20, anchor="w", bg="#f4f4f4")
        self.name_label.grid(row=0, column=0, padx=10, sticky="w")

        self.quantity_label = tk.Label(self.frame, text=f"Qty: {quantity}", font=("Helvetica Neue", 12), width=10, bg="#f4f4f4")
        self.quantity_label.grid(row=0, column=1, padx=10)

        self.price_label = tk.Label(self.frame, text=f"₹{price}", font=("Helvetica Neue", 12), width=10, bg="#f4f4f4")
        self.price_label.grid(row=0, column=2, padx=10)

        self.delete_button = tk.Button(self.frame, text="Delete", font=("Helvetica Neue", 10), bg="#e74c3c", fg="white", command=self.delete_item)
        self.delete_button.grid(row=0, column=3, padx=10)

    def delete_item(self):
        added_items.remove(self)
        update_total_amount()
        self.frame.destroy()

# Set up the GUI
root = tk.Tk()
root.geometry('900x800')
root.title("Order Management System")
root.config(bg="#2c3e50")

# Select order frame
ofr = tk.Frame(root, height=800, bg='#2c3e50')
ofr.pack(side="left", fill="both", expand=True)

# Initialize and set the bill number
update_bill_no()

# Label for the title
ofrtitle = tk.Label(ofr, text=f"Your Order - ID {order_id}", font=("Helvetica Neue", 18, "bold"), bg='#2c3e50', fg="white")
ofrtitle.pack(pady=20)

# Dropdown for selecting menu items
menu_label = tk.Label(ofr, text="Select Item", font=("Helvetica Neue", 14), bg="#2c3e50", fg="white")
menu_label.pack(pady=5)

menu_drop_down = ttk.Combobox(ofr, values=list(available_items.keys()), font=("Helvetica Neue", 12), state="readonly", width=20)
menu_drop_down.set("Select item to add")
menu_drop_down.pack(pady=5)

# Dropdown for selecting quantity
quantity_label = tk.Label(ofr, text="Select Quantity", font=("Helvetica Neue", 14), bg="#2c3e50", fg="white")
quantity_label.pack(pady=5)

quantity_drop_down = ttk.Combobox(ofr, values=[str(i) for i in range(1, 11)], font=("Helvetica Neue", 12), state="readonly", width=10)
quantity_drop_down.set("Select quantity")
quantity_drop_down.pack(pady=5)

# Button to add item
add_item_button = tk.Button(ofr, text="Add Item", font=("Helvetica Neue", 12), bg="#1abc9c", fg="white", relief="flat", command=add_item)
add_item_button.pack(pady=15)

# Frame to display added items
ofr_orders_frame = tk.Frame(root, bg="#1e2a3a", bd=0)
ofr_orders_frame.pack(side="right", fill="both", expand=True, padx=10, pady=10)

# Label to show total amount
total_label = tk.Label(ofr, text="Total Amount: ₹0", font=("Helvetica Neue", 14), bg="#2c3e50", fg="white")
total_label.pack(pady=10)

# Payment method options
payment_method_label = tk.Label(ofr, text="Select Payment Method", font=("Helvetica Neue", 14), bg="#2c3e50", fg="white")
payment_method_label.pack(pady=5)

payment_method_var = tk.StringVar()
payment_method_cash = tk.Radiobutton(
    ofr, 
    text="Cash", 
    variable=payment_method_var, 
    value="Cash", 
    font=("Helvetica Neue", 12), 
    bg="#2c3e50", 
    fg="white", 
    activebackground="#2c3e50", 
    indicatoron=False, 
    selectcolor="#3498db"
)

payment_method_online = tk.Radiobutton(
    ofr, 
    text="Online", 
    variable=payment_method_var, 
    value="Online", 
    font=("Helvetica Neue", 12), 
    bg="#2c3e50", 
    fg="white", 
    activebackground="#2c3e50", 
    indicatoron=False, 
    selectcolor="#3498db"
)


payment_method_cash.pack(pady=5)
payment_method_online.pack(pady=5)

# Button to process payment
process_payment_button = tk.Button(ofr, text="Process Payment", font=("Helvetica Neue", 14), bg="#3498db", fg="white", relief="flat", command=process_payment)
process_payment_button.pack(pady=20)

# Button to cancel the order
cancel_order_button = tk.Button(ofr, text="Cancel Order", font=("Helvetica Neue", 14), bg="#e74c3c", fg="white", relief="flat", command=cancel_order)
cancel_order_button.pack(pady=10)

# Final frame for analysis button
analysis_frame = tk.Frame(ofr, bg="#2c3e50")
analysis_frame.pack(pady=20)

analysis_button = tk.Button(analysis_frame, text="Generate Item Analysis", font=("Helvetica Neue", 14), bg="#9b59b6", fg="white", relief="flat", command=generate_pie_chart)
analysis_button.pack()

# Run the application
root.mainloop()
