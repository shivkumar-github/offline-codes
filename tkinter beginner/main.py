import sqlite3

conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# cursor.execute("DROP TABLE IF EXISTS users")

# cursor.execute('''
# CREATE TABLE IF NOT EXISTS users (
# 	id INTEGER PRIMARY KEY, 
# 	name TEXT,
# 	age INTEGER
# )
# ''')

# cursor.execute("INSERT INTO users (id, name, age) VALUES (?, ?, ?)", (0,"Shivkumar",19 ))

# cursor.execute("INSERT INTO users (id, name, age) VALUES (?, ?, ?)", (5, "tanmay", 34))

# cursor.execute("UPDATE users SET age = ? WHERE name = ?", (20, "Shivkumar"))

# cursor.execute("DELETE FROM users WHERE name = ?", ("name2",))

cursor.execute("SELECT * FROM users")
users = cursor.fetchall()



conn.commit()
conn.close()