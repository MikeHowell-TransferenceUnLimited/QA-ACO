squares = [x**2 for x in range(1,11)]
print (squares)

names = ["Charlie", "Alice", "Chloe", "David", "Caleb", "Emma", "Connor", "Grace", "Claire", "Ben"]

c_names = [name for name in names if name.startswith("C")]
print(c_names)

values = [1,2,3,4]

# List comprehension
[x * 2 for x in values]

# Set comprehension
{x * 2 for x in values}

# Dictionary comprehension
{x: x * 2 for x in values}