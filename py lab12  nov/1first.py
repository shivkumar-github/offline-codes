import sqlite3

con = sqlite3.connect('population.db')
cur = con.cursor()

# Removed the incomplete SQL command
cur.execute('INSERT INTO PopByRegion')

cities = [(1, "Mumbai", "Gate of India"), (5, "Varansi", "Kashi Vishnath Temple"), (4, "Ujjain", "Kalbhiravnath Temple"), (3, "Kevadia", "Statue of Unity"), (1, "Pune", "Shivneri")]

# Assuming you want to create a table and insert data into it
cur.execute('CREATE TABLE IF NOT EXISTS PopByCity(Id INTEGER, City TEXT, Landmark TEXT)')

for c in cities:
    cur.execute('INSERT INTO PopByCity VALUES(?, ?, ?)', (c[0], c[1], c[2]))

con.commit()
con.close()