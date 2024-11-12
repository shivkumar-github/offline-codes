import sqlite3

con = sqlite3.connect('population.db')
cur = con.cursor()

cur.execute('SELECT PopByRegion.Region, PopByCity.City from PopByRegion INNER JOIN PopByCity  where (PopByRegion.Id = PopByCity.ID)')
print(cur.fetchall())

cur.execute('SELECT * FROM PopByRegion, PopByCity where (PopByRegion.Id = PopByCity.ID)')
print(cur.fetchall())