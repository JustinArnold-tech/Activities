Car = {
    "Year": 1964, 
    "Brand": "Ford", "Model": 
    "Mustang"
    }
# I expected it to clear the dictionary and it did.
car3 = Car.clear()
print(car3)

# Expected it to copy.
car4 = Car.copy()
print(car4)

# I expected it to get the value of model
print(Car.get("Model"))

# Expected a tuple for every key value pair
print(Car.items())

# A list of the keys 
print(Car.keys())

# To remove the key model from the dictionary
Car.pop("Model")
print(Car)

# To remove the last item in the dictionary
Car.popitem()
print(Car)

# To add Color to the dictionary
Car.update(Color = "Blue")
print(Car)

# A list of all the values in the dictionary
print(Car.values())

