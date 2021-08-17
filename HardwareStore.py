import csv, sqlite3
con = sqlite3.connect(":memory:") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
cur.execute("CREATE TABLE t (col1, col2);") # use your column names here
with open('inventory.csv','r') as fin:
    dr = csv.DictReader(fin)
#you are going to use executemany