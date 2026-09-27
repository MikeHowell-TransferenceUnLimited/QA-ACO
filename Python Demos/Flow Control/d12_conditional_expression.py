# ternary operator


i = 10
j = 5

# Note how print contains the entire conditional expression
print("i gt j" if i > j else "i lte j")

# How can this work? Isn't it executing a code block?
# It is an "illusion".  It is executing print which returns
# a value, hence you can use print where you would place
# a mathematical expression.  It returns None, but it does
# return something never-the-less, so you can get away with
# using print (or any function for that matter) but sanity
# tells you that the function should return a tangible useful value.
print("i gt j") if i > j else print("i lt j")

# colour = level > 50 ? "Bright red" : "Green"
# colour = iif(level > 50, "Bright Red", "Green")


