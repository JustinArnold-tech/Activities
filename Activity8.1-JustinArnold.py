x = 2
y = 3
z = 5

if(x < y) and (y < z):
    myTupil = (x, y, z)
elif(y < x) and (x < z):
    myTupil = (y, x, z)
elif(z < y) and (y < x):
    myTupil = (z, y, x)
elif(x < z) and (z < y):
    myTupil = (y, z, x)
elif(y < z) and (z < x):
    myTupil = (x, z, y)
else:
    myTupil = (z, x, y)


print(myTupil)

