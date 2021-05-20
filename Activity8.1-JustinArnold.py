x = 24
y = 26
z = 25

if(x < y) and (y < z):
    myTupil = (x, y, z)
elif(y < x) and (x < z):
    myTupil = (y, x, z)
elif(z < y) and (y < x):
    myTupil = (z, y, x)
elif(x < z) and (z < y):
    myTupil = (x, z, y)
elif(y < z) and (z < x):
    myTupil = (y, z, x)
else:
    myTupil = (z, x, y)


print(myTupil)

